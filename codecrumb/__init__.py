""""
    This is the app module
"""

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_migrate import Migrate
from codecrumb.config import Config


db = SQLAlchemy()
bcrypt = Bcrypt()
loginManager = LoginManager()
loginManager.login_view = "oauth.login"
migrate = Migrate()


def create_app(app_config=Config):
    app = Flask(__name__)
    app.config.from_object(app_config)
    db.init_app(app)
    bcrypt.init_app(app)
    loginManager.init_app(app)
    migrate.init_app(app, db)
    from codecrumb.crumbs.routes import set_crumb
    from codecrumb.main.routes import main
    from codecrumb.oauth.routes import oauth
    from codecrumb.error.routes import errors

    app.register_blueprint(set_crumb)
    app.register_blueprint(main)
    app.register_blueprint(oauth)
    app.register_blueprint(errors)

    return app
