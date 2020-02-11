from flask import Blueprint, render_template, request, url_for
from flask_login import current_user

errors = Blueprint("errors", __name__)


@errors.app_errorhandler(403)
def error_403(error):
    title = "403 (Forbidden)"

    if current_user.is_authenticated:
        imageFile = url_for("static", filename="profile-images/" + current_user.image)
        return (
            render_template("errors/error-403.html", title=title, image=imageFile),
            403,
        )
    return render_template("errors/error-403.html", title=title), 403


@errors.app_errorhandler(404)
def error_404(error):
    title = "404 (File not Found)"

    if current_user.is_authenticated:
        imageFile = url_for("static", filename="profile-images/" + current_user.image)
        return (
            render_template("errors/error-404.html", title=title, image=imageFile),
            404,
        )
    return render_template("errors/error-404.html", title=title), 404


@errors.app_errorhandler(500)
def error_500(error):
    title = "500 (Internal Server Error)"
    if current_user.is_authenticated:
        imageFile = url_for("static", filename="profile-images/" + current_user.image)
        return (
            render_template("errors/error-500.html", title=title, image=imageFile),
            500,
        )
    return render_template("errors/error-500.html", title=title), 500


@errors.route("/error")
def redirect_error():

    if current_user.is_authenticated:
        imageFile = url_for("static", filename="profile-images/" + current_user.image)

        return render_template(
            "errors/error-500.html", title="File not Found", image=imageFile
        )

    else:

        return render_template("errors/error-500.html", title="Internal Server Error")
