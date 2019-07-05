import os
import secrets

from flask_login import current_user

from codecrumb import db
from codecrumb.model import Anonymous_Crumbs, Crumbs


def json_response(crumb, x):
    """ Function creates a json response

    crumb: database column to process
    x: is a boolean, to check if current_user owns the column.
    """
    response = {
        "modes": {
            "htmlMode": crumb.htmlMode,
            "cssMode": crumb.cssMode,
            "jsMode": crumb.jsMode,
        },
        "codes": {"html": crumb.html, "css": crumb.css, "js": crumb.js},
        "libs": {
            "htmlMeta": crumb.htmlMeta,
            "cssLib": crumb.cssLib,
            "jsLib": crumb.jsLib,
        },
        "title": {"name": crumb.crumbName},
        "editorSettings": {
            "theme": crumb.author.theme,
            "fSize": crumb.author.f_size,
            "keymap": crumb.author.keymap,
            "font": crumb.author.font,
        },
        "author": crumb.author.username,
        "arg": x,
        "status": current_user.is_authenticated,
    }

    return response


def save_crumb(response, crumb, user, is_changeable):
    """This utility func modifies already existing columns in the db.

    response: data from the user sent through AJAX.
    crumb: users database column.
    user: users database information.
    """
    title = response.get("title")
    name = title.get("name")
    # response dict codes
    codes = response.get("codes")
    html = codes.get("html")
    css = codes.get("css")
    js = codes.get("js")

    # response dict libraries
    libs = response.get("libs")
    htmlMeta = libs.get("htmlMeta")
    cssLib = libs.get("cssLib")
    jsLib = libs.get("jsLib")

    # response dict modes
    modes = response.get("modes")
    htmlMode = modes.get("htmlMode")
    cssMode = modes.get("cssMode")
    jsMode = modes.get("jsMode")

    settings = response.get("editorSettings")

    theme = settings.get("theme")
    font = settings.get("font")
    font_size = settings.get("fSize")
    keymap = settings.get("keymap")

    if is_changeable:

        user.theme = theme
        user.font = font
        user.f_size = font_size
        user.keymap = keymap

    crumb.crumbName = name
    crumb.html = html
    crumb.css = css
    crumb.js = js
    crumb.htmlMeta = htmlMeta
    crumb.cssLib = cssLib
    crumb.jsLib = jsLib
    crumb.htmlMode = htmlMode
    crumb.cssMode = cssMode
    crumb.jsMode = jsMode

    db.session.commit()


def create_new_crumb(response, url):
    """This utility func inserts new data to the Crumb table.
    response: data sent throught AJAX
    url: to url mapper to the information in the db,
        used to access the info as a webpage.
    """

    title = response.get("title")
    name = title.get("name")
    # response dict codes
    codes = response.get("codes")
    html = codes.get("html")
    css = codes.get("css")
    js = codes.get("js")

    # response dict libraries
    libs = response.get("libs")
    htmlMeta = libs.get("htmlMeta")
    cssLib = libs.get("cssLib")
    jsLib = libs.get("jsLib")

    # response dict modes
    modes = response.get("modes")
    htmlMode = modes.get("htmlMode")
    cssMode = modes.get("cssMode")
    jsMode = modes.get("jsMode")

    crumbs = Crumbs(
        url=url,
        html=html,
        css=css,
        js=js,
        htmlMeta=htmlMeta,
        cssLib=cssLib,
        jsLib=jsLib,
        htmlMode=htmlMode,
        cssMode=cssMode,
        jsMode=jsMode,
        crumbName=name,
        author=current_user,
    )
    db.session.add(crumbs)
    db.session.commit()


def create_new_anonymous_crumb(response, url):
    """ function inserts new data to the Crumb table.
    response: data sent throught AJAX
    url: to url mapper to the information in the db,
        used to access the info as a webpage.
    """

    title = response.get("title")
    name = title.get("name")
    # response dict codes
    codes = response.get("codes")
    html = codes.get("html")
    css = codes.get("css")
    js = codes.get("js")

    # response dict libraries
    libs = response.get("libs")
    htmlMeta = libs.get("htmlMeta")
    cssLib = libs.get("cssLib")
    jsLib = libs.get("jsLib")

    # response dict modes
    modes = response.get("modes")
    htmlMode = modes.get("htmlMode")
    cssMode = modes.get("cssMode")
    jsMode = modes.get("jsMode")

    settings = response.get("editorSettings")
    theme = settings.get("theme")
    font = settings.get("font")
    font_size = settings.get("fSize")
    keymap = settings.get("keymap")

    crumbs = Anonymous_Crumbs(
        url=url,
        html=html,
        css=css,
        js=js,
        htmlMeta=htmlMeta,
        cssLib=cssLib,
        jsLib=jsLib,
        htmlMode=htmlMode,
        cssMode=cssMode,
        jsMode=jsMode,
        crumbName=name,
        theme=theme,
        font=font,
        f_size=font_size,
        keymap=keymap,
    )
    db.session.add(crumbs)
    db.session.commit()


def anon_response(crumb):
    """ Function creates a json response

    crumb: database column to process
    x: is a boolean, to check if current_user owns the column.
    """
    response = {
        "modes": {
            "htmlMode": crumb.htmlMode,
            "cssMode": crumb.cssMode,
            "jsMode": crumb.jsMode,
        },
        "codes": {"html": crumb.html, "css": crumb.css, "js": crumb.js},
        "libs": {
            "htmlMeta": crumb.htmlMeta,
            "cssLib": crumb.cssLib,
            "jsLib": crumb.jsLib,
        },
        "title": {"name": crumb.crumbName},
        "editorSettings": {
            "theme": crumb.theme,
            "fSize": crumb.f_size,
            "keymap": crumb.keymap,
            "font": crumb.font,
        },
        "author": "anonymous",
        "arg": current_user.is_authenticated,
    }

    return response


def save_anonymous_crumb(response, crumb):
    """ Function modifies already existing columns in the db.

    response: data from the user sent through AJAX.
    crumb: users database column.
    user: users database information.
    """
    title = response.get("title")
    name = title.get("name")
    # response dict codes
    codes = response.get("codes")
    html = codes.get("html")
    css = codes.get("css")
    js = codes.get("js")

    # response dict libraries
    libs = response.get("libs")
    htmlMeta = libs.get("htmlMeta")
    cssLib = libs.get("cssLib")
    jsLib = libs.get("jsLib")

    # response dict modes
    modes = response.get("modes")
    htmlMode = modes.get("htmlMode")
    cssMode = modes.get("cssMode")
    jsMode = modes.get("jsMode")

    settings = response.get("editorSettings")

    theme = settings.get("theme")
    font = settings.get("font")
    font_size = settings.get("fSize")
    keymap = settings.get("keymap")

    crumb.theme = theme
    crumb.font = font
    crumb.font_size = font_size
    crumb.keymap = keymap

    crumb.crumbName = name
    crumb.html = html
    crumb.css = css
    crumb.js = js
    crumb.htmlMeta = htmlMeta
    crumb.cssLib = cssLib
    crumb.jsLib = jsLib
    crumb.htmlMode = htmlMode
    crumb.cssMode = cssMode
    crumb.jsMode = jsMode

    db.session.commit()


def save_pseudo(response, crumb):
    """ Function modifies already existing columns in the db.

    response: data from the user sent through AJAX.
    crumb: users database column.
    """
    pseudo = response.get("code")
    crumb.pseudocode = pseudo
    db.session.commit()
