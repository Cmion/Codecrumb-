from datetime import datetime

from flask_login import UserMixin

from codecrumb import db, loginManager


@loginManager.user_loader
def loadUser(id):
    return User.query.get(int(id))


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    firstname = db.Column(db.String(255), nullable=True, unique=False)
    lastname = db.Column(db.String(255), nullable=True, unique=False)
    location = db.Column(db.String(255), nullable=True, unique=False)
    github = db.Column(db.String(255), nullable=True, unique=False)
    password = db.Column(db.String(255), nullable=False, unique=False)
    image = db.Column(
        db.String(255), nullable=False, unique=False, default="default.png"
    )
    imageUrl = db.Column(db.String(255), nullable=True, unique=True)
    theme = db.Column(db.String(30), default="andromeda", nullable=False, unique=False)
    f_size = db.Column(db.Integer, default=13, nullable=False, unique=False)
    keymap = db.Column(db.String(30), default="default", nullable=False, unique=False)
    font = db.Column(db.Text, default="consolas", nullable=False, unique=False)
    snippet = db.Column(db.Text, nullable=True, unique=False)
    dateCreated = db.Column(db.DateTime, default=datetime.utcnow)
    crumbs = db.relationship("Crumbs", backref="author", lazy=True)

    def __repr__(self):
        return f"User({self.id}, {self.username}, {self.email}, {self.dateCreated}, {self.snippet})"


class Crumbs(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    url = db.Column(db.String(20), unique=False, nullable=False)
    crumbName = db.Column(db.Text, nullable=True, unique=False, default="Unnamed Crumb")
    html = db.Column(db.Text, nullable=True, unique=False, default="")
    css = db.Column(db.Text, nullable=True, unique=False, default="")
    js = db.Column(db.Text, nullable=True, unique=False, default="")
    htmlMeta = db.Column(db.Text, nullable=True, unique=False, default="")
    cssLib = db.Column(db.Text, nullable=True, unique=False, default="")
    jsLib = db.Column(db.Text, nullable=True, unique=False, default="")
    htmlMode = db.Column(db.Text, nullable=True, unique=False, default="html")
    cssMode = db.Column(db.Text, nullable=True, unique=False, default="css")
    jsMode = db.Column(db.Text, nullable=True, unique=False, default="javascript")
    pseudocode = db.Column(db.Text, nullable=True, unique=False, default="")
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"Crumb(id = {self.id}, User Id = {self.userId}, Url = {self.url})"


class Anonymous_Crumbs(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(20), unique=False, nullable=False)
    crumb_type = db.Column(db.String(255), unique=False, nullable=True, default="normal")
    crumbName = db.Column(db.Text, nullable=True, unique=False, default="Unnamed Crumb")
    html = db.Column(db.Text, nullable=True, unique=False, default="")
    css = db.Column(db.Text, nullable=True, unique=False, default="")
    js = db.Column(db.Text, nullable=True, unique=False, default="")
    htmlMeta = db.Column(db.Text, nullable=True, unique=False, default="")
    cssLib = db.Column(db.Text, nullable=True, unique=False, default="")
    jsLib = db.Column(db.Text, nullable=True, unique=False, default="")
    htmlMode = db.Column(db.Text, nullable=True, unique=False, default="html")
    cssMode = db.Column(db.Text, nullable=True, unique=False, default="css")
    jsMode = db.Column(db.Text, nullable=True, unique=False, default="javascript")
    date_created = db.Column(db.DateTime, default=datetime.utcnow)
    theme = db.Column(db.String(50), default="andromeda", nullable=False, unique=False)
    f_size = db.Column(db.Integer, default=13, nullable=False, unique=False)
    keymap = db.Column(db.String(30), default="default", nullable=False, unique=False)
    font = db.Column(db.Text, default="consolas", nullable=False, unique=False)

    def __repr__(self):
        return f"Crumb(id = {self.id}, User Id = {self.date_created}, Url = {self.url})"
