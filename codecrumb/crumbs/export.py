"""Module is contains file system hacks to handle code export.

    receive_export: takes a response json as an argument.
    write_to_file: contains necessary manipulations and files types.
    write_markdown: writes to a markdown file.
    handle_zip_file: zips a directory.
"""


import os
import re
import shutil

from flask import current_app

from codecrumb.model import Crumbs, User


def receive_export(response):

    """These Function handles responses sent from the browser through the request object.
        * Function is a wrapper function (depend on other functions to work properly).
        * parses request object.
        * gets data.
        * queries database.
        * formats a license file.
        * calls other utility function in these module.
        * utility functions handle file writing, deletions, updata and creation(if not already created)
        dependencies:
            * write_to_file.
            * write_markdown.
            * handle_zip_file.
    """

    dist = response.get("dist")
    src = response.get("src")
    readme = response.get("README")
    url = response.get("url")
    crumb = Crumbs.query.filter_by(url=url).first_or_404()
    user = User.query.get_or_404(crumb.userId)
    pseudo = crumb.pseudocode
    license_txt = f"Copyright (c) {crumb.date_created.strftime('%Y')} by {user.username.capitalize()} \nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE."

    # for src folder
    write_to_file(
        src.get("html"), "src", "index", src.get("htmlExt"), ["html", "pug", "md"]
    )
    write_to_file(
        src.get("css"),
        "src",
        "style",
        src.get("cssExt"),
        ["css", "sass", "styl", "less", "scss"],
    )
    write_to_file(
        src.get("js"),
        "src",
        "script",
        src.get("jsExt"),
        ["js", "ts", "jsx", "coffeescript"],
    )
    # for dist folder
    write_to_file(dist.get("html"), "dist", "index", "html", ["html"])
    write_to_file(dist.get("css"), "dist", "style", "css", ["css"])
    write_to_file(dist.get("js"), "dist", "script", "js", ["js"])
    # for readme and tasklist

    write_markdown(readme, "README.md")
    write_markdown(pseudo, "TASKLIST.md")
    write_markdown(license_txt, "License.txt")


def write_markdown(data, file_name):

    """These Function Write to an already existing markdown file.
    """

    with open(
        os.path.join(current_app.root_path, f"static/client/export/{file_name}"),
        "w",
        encoding="utf-8",
    ) as md:
        if data is None:
            md.write("")
        else:
            md.write(data)


def write_to_file(data, directory, file_name, file_ext, type):

    """These Function is an hack

        * function ain't perfect.
        * takes 5 args.
        * the argument type is a list of file extensions.
        * function loops through extensions, checks it against an existing file system.
        * writes to the file.
        * replaces the files extension, with the provide one.
    """

    for z in type:
        # checks for existing files
        if os.path.exists(
            os.path.join(
                current_app.root_path,
                f"static/client/export/{directory}/{file_name}.{z}",
            )
        ):

            original_path = os.path.join(
                current_app.root_path,
                f"static/client/export/{directory}/{file_name}.{z}",
            )
            os.remove(original_path)
            ext = os.path.join(
                current_app.root_path,
                f"static/client/export/{directory}/{file_name}.{file_ext}",
            )
            # writes to the file
            with open(original_path, "w", encoding="utf-8") as op:
                op.write(data)
            # replace/ changes the ext.
            os.replace(original_path, ext)


def handle_zip_file(file_name, file_path, parent_path):

    """These Function uses shutil module to handle file zipping/archiving.

        * checks for existing zip files in the parent_path.
        * removes them.
        * writes a new zip file.


    """
    dirs = os.listdir(parent_path)
    print(dirs)
    for fn in dirs:
        # regex to match any .zip file in directory.
        if re.match("\w+.zip", fn):
            os.remove(f"{os.path.join(parent_path, fn)}")

    archive_name = os.path.expanduser(os.path.join(parent_path, file_name))
    root_dir = os.path.expanduser(os.path.join(parent_path, "export"))
    shutil.make_archive(archive_name, "zip", root_dir)
