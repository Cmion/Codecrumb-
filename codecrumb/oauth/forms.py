from flask_login import current_user
from flask_wtf import FlaskForm
from flask_wtf.file import FileAllowed, FileField
from wtforms import PasswordField, StringField, SubmitField, TextField
from wtforms.validators import DataRequired, Email, EqualTo, Length, ValidationError

from codecrumb import bcrypt
from codecrumb.model import User


class RegistrationForm(FlaskForm):
    """ This class extends FlaskForm from flask_wtf and creates forms automatically.
    """

    username = StringField("Username", validators=[DataRequired(), Length(min=2)])
    email = StringField("Email Address", validators=[DataRequired(), Email()])
    password = PasswordField("Password", validators=[DataRequired(), Length(min=8)])
    submit = SubmitField("Create an account")

    def validate_username(self, username):
        userData = username.data.lower()
        dbName = User.query.filter_by(username=userData).first()
        if dbName:

            raise ValidationError(f"Account already exist with that username")

    def validate_email(self, email):
        userEmail = email.data.lower()
        dbEmail = User.query.filter_by(email=userEmail).first()
        if dbEmail:

            raise ValidationError(f"Account already exitst with that email")


class LoginForm(FlaskForm):
    """
    FlaskForm.

    This class extends FlaskForm from flask_wtf and creates forms automatically
    """

    username = StringField(
        "Username / Email",
        validators=[DataRequired(message="These field cannot be empty"), Length(min=2)]
    )
    password = PasswordField("Password", validators=[DataRequired(), Length(min=8)])
    submit = SubmitField("Sign in")


class UpdateAccountForm(FlaskForm):
    """ This class extends FlaskForm from flask_wtf
        and creates forms automatically
    """

    firstname = StringField("First name", render_kw={"placeholder": "First name", "spellcheck": "false"})
    lastname = StringField("Last name", render_kw={"placeholder": "Last name", "spellcheck": "false"})
    username = StringField("Username", validators=[DataRequired(), Length(min=2)], render_kw={"spellcheck": "false"})
    email = StringField("Email Address", validators=[DataRequired(), Email()], render_kw={"spellcheck": "false"})
    location = StringField("Location", render_kw={"placeholder": "Location", "spellcheck": "false"})
    github = StringField("Github", render_kw={"placeholder": "Github username", "spellcheck": "false"})

    picture = FileField(
        "Profile Picture", validators=[FileAllowed(["png", "jpeg", "jpg"])]
    )
    submit = SubmitField("Update profile")

    def validate_username(self, username):

        userData = username.data.lower()
        if userData != current_user.username:
            dbName = User.query.filter_by(username=userData).first()
            if dbName:

                raise ValidationError(f"Account already exist with that username")

    def validate_email(self, email):
        userEmail = email.data.lower()
        if userEmail != current_user.email:
            dbEmail = User.query.filter_by(email=userEmail).first()
            if dbEmail:

                raise ValidationError(f"Account already exist with that email")


class UpdatePasswordForm(FlaskForm):
    password = PasswordField("Password", render_kw={"placeholder": "Old password", "spellcheck": "false"})
    newPassword = PasswordField(
        "New Password",
        validators=[DataRequired(), Length(min=8)],
        render_kw={"placeholder": "New password"},
    )
    confirmNewPassword = PasswordField(
        "Confirm New Password",
        validators=[DataRequired(), Length(min=8), EqualTo("newPassword")],
        render_kw={"placeholder": "Confirm new password"},
    )
    change = SubmitField("Update password")

    def validate_password(self, password):
        userPassword = password.data
        if (
            userPassword
            and bcrypt.check_password_hash(current_user.password, userPassword) is False
        ):

            raise ValidationError(f"Incorrect password")


class deleteForm(FlaskForm):
    pass_w = PasswordField("Password", render_kw={"placeholder": "Confirm Password"})

    delete = SubmitField("Delete")

    def validate_password(self, pass_w):
        userPassword = pass_w.data
        if (
            userPassword
            and bcrypt.check_password_hash(current_user.password, userPassword) is False
        ):

            raise ValidationError(f"Incorrect password")
