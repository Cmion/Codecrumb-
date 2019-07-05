import os
import secrets

from flask import current_app
from flask_login import current_user
from PIL import Image


def save_picture(picture):
    """ Function processes user image.

    uses the pillow library
    picture: image object
    """

    hex = secrets.token_hex(12)
    _, ext = os.path.splitext(picture.filename)
    fileName = current_user.username + "_" + hex + ext
    picturePath = os.path.join(current_app.root_path, "static/profile-images", fileName)
    resize = (400, 400)
    newImage = Image.open(picture)
    newImage.thumbnail(resize)
    newImage.save(picturePath)

    return fileName
