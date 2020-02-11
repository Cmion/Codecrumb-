import json
from flask import render_template, url_for, flash, redirect, request, Blueprint
from flask_login import current_user


main = Blueprint("main", __name__)


@main.route("/", methods=["GET", "POST"])
@main.route("/crumbs", methods=["GET", "POST"])
def editor():
    title = "Create a new crumb"
    if current_user.is_authenticated:
        presets = {
            "editorSettings": {
                "theme": current_user.theme,
                "fSize": current_user.f_size,
                "keymap": current_user.keymap,
                "font": current_user.font,
            },
            "arg": False,
        }
        code = json.dumps(presets)
        imageFile = url_for("static", filename="profile-images/" + current_user.image)
        return render_template(
            "editor.html",
            title=title,
            image=imageFile,
            preset=code,
            snippets=current_user.snippet,
        )

    return render_template("editor.html", title=title)
