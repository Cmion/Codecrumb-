from flask import Blueprint, flash, redirect, render_template, request, url_for
from flask_login import current_user, login_required, login_user, logout_user

from codecrumb import bcrypt, db
from codecrumb.model import Crumbs, User
from codecrumb.oauth.forms import (
    LoginForm,
    RegistrationForm,
    UpdateAccountForm,
    UpdatePasswordForm,
    deleteForm,
)
from codecrumb.oauth.utils import save_picture

oauth = Blueprint("oauth", __name__)


@oauth.route("/user/register", methods=["GET", "POST"])
def register():

    if current_user.is_authenticated:
        return redirect(url_for("main.editor"))
    title = "Sign Up"
    register = RegistrationForm()

    if register.validate_on_submit():
        hashed = bcrypt.generate_password_hash(register.password.data).decode("utf-8")
        email = register.email.data.lower()
        username = register.username.data.lower()
        newUser = User(username=username, email=email, password=hashed)
        db.session.add(newUser)
        db.session.commit()
        flash("Account created Successfully")
        return redirect(url_for("oauth.login"))

    return render_template("register.html", register=register, title=title)


@oauth.route("/user/login", methods=["GET", "POST"])
def login():

    if current_user.is_authenticated:
        return redirect(url_for("main.editor"))
    title = "Sign In"

    login = LoginForm()

    if request.method == "POST":
        if login.validate_on_submit():
            # these conditional tries to log a user in.
            # using either their email or username.
            loginEmail = login.username.data.lower()
            loginUsername = login.username.data.lower()
            userEmail = User.query.filter_by(email=loginEmail).first()
            userName = User.query.filter_by(username=loginUsername).first()

            if userEmail and bcrypt.check_password_hash(
                userEmail.password, login.password.data
            ):
                login_user(userEmail, remember=True)
                nextPage = request.args.get("next")
                return (
                    redirect(nextPage) if nextPage else redirect(url_for("main.editor"))
                )
            elif userName and bcrypt.check_password_hash(
                userName.password, login.password.data
            ):
                login_user(userName, remember=True)
                nextPage = request.args.get("next")
                return (
                    redirect(nextPage) if nextPage else redirect(url_for("main.editor"))
                )
            else:
                flash("Login unsuccessful!\nPlease check username or password")

    # if current_user.is_authenticated:
    #     return redirect(url_for('editor'))
    return render_template("login.html", login=login, title=title)


@oauth.route("/user/logout")
def logout():
    logout_user()
    return redirect(url_for("main.editor"))


@oauth.route("/user/account/dashboard", methods=["GET", "POST"])
@login_required
def account():
    if current_user.is_authenticated:
        title = "Dashboard"
        crumbSaved = Crumbs.query.filter_by(userId=current_user.id).count()
        personal = UpdateAccountForm()
        userPassword = UpdatePasswordForm()
        deletePassword = deleteForm()
        if personal.validate_on_submit():
            if personal.picture.data:
                newPicture = save_picture(personal.picture.data)
                current_user.image = newPicture

            if personal.firstname.data:
                current_user.firstname = personal.firstname.data

            if personal.lastname.data:
                current_user.lastname = personal.lastname.data

            if personal.location.data:
                current_user.location = personal.location.data

            if personal.github.data:
                current_user.github = personal.github.data

            current_user.username = personal.username.data.lower()
            current_user.email = personal.email.data.lower()
            db.session.commit()
            flash("Your Profile has been updated succesfully")
            return redirect(url_for("oauth.account"))
        elif request.method == "GET":
            personal.username.data = current_user.username
            personal.email.data = current_user.email
            personal.lastname.data = current_user.lastname
            personal.firstname.data = current_user.firstname
            personal.location.data = current_user.location
            personal.github.data = current_user.github

        if userPassword.validate_on_submit():
            if (
                userPassword.password.data
                and userPassword.newPassword.data
                and userPassword.confirmNewPassword.data
            ):
                current_user.password = bcrypt.generate_password_hash(
                    userPassword.newPassword.data
                ).decode("utf-8")

                db.session.commit()
                flash("Your Profile has been updated succesfully")
                return redirect(url_for("oauth.account"))

        if deletePassword.validate_on_submit():
            user = User.query.get(current_user.id)
            if bcrypt.check_password_hash(user.password, deletePassword.password.data):

                crumbs = Crumbs.query.filter_by(userId=user.id).all()

                if crumbs:
                    db.session.delete(user)
                    for i in crumbs:
                        db.session.delete(i)

                    db.session.commit()
                    # flash("Account deleted")
                    return redirect(url_for("main.editor"))
                else:
                    db.session.delete(user)
                    db.session.commit()
                    # flash("Account deleted")
                    return redirect(url_for("main.editor"))

        imageFile = url_for("static", filename="profile-images/" + current_user.image)
        return render_template(
            "account.html",
            title=title,
            personal=personal,
            image=imageFile,
            userPassword=userPassword,
            crumbSaved=crumbSaved,
            deletePassword=deletePassword,
            snippets=current_user.snippet,
        )
