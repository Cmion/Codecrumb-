import os


class Config:
    basedir = os.path.abspath(os.path.dirname(__file__))

    SECRET_KEY = os.environ.get("SECRET_KEY")
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        "DATABASE_URL"
    ) or "sqlite:///" + os.path.join(basedir, "crumb.db")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    CLIENT_ZIP = os.path.join(
        basedir, "/Users/USER/Desktop/codecrumb/codecrumb/static/client"
    )
