import json
import os
import secrets
import re

from flask import (
    Blueprint,
    abort,
    current_app,
    flash,
    jsonify,
    make_response,
    redirect,
    render_template,
    request,
    safe_join,
    send_file,
    send_from_directory,
    url_for,
)
from flask_login import current_user, login_required, login_user, logout_user

from codecrumb import bcrypt, db
from codecrumb.crumbs.export import receive_export, handle_zip_file
from codecrumb.crumbs.utils import (
    anon_response,
    create_new_anonymous_crumb,
    create_new_crumb,
    json_response,
    save_crumb,
    save_pseudo,
)
from codecrumb.model import Anonymous_Crumbs, Crumbs, User
from codecrumb.oauth.forms import Search

set_crumb = Blueprint("set_crumb", __name__)


@set_crumb.route("/dashboard/crumbs", methods=["GET", "POST"])
@login_required
def crumbs():
    search = Search()
    
    title = "Your Crumbs"
    page = request.args.get("page", 1, int)
    crumb = (
        Crumbs.query.filter_by(userId=current_user.id)
        .order_by(Crumbs.date_created.desc())
        .paginate(page=page, per_page=6)
    )

    imageFile = url_for("static", filename="profile-images/" + current_user.image)
    if search.validate_on_submit():
        name = search.byname.data
        match = re.match(f"{name}*", name)
        print(match)
        crumbs = (
            Crumbs.query.filter_by(userId=current_user.id)
            .order_by(Crumbs.date_created.desc())
            .paginate(page=page, per_page=6)
        )

        for crumb in crumbs.items:
            if crumb.crumbName == name:
                return render_template(
                    "crumb.html",
                    title=f"Search - {name}",
                    image=imageFile,
                    crumbs=crumb,
                    json=json,
                    json_response=json_response,
                    search=search
                )
        # return redirect(url_for("main.editor"))
    return render_template(
        "crumb.html",
        title=title,
        image=imageFile,
        crumbs=crumb,
        json=json,
        json_response=json_response,
        search=search
    )



@set_crumb.route("/user/dashboard/crumbs/delete", methods=["GET", "POST"])
@login_required
def delete_crumb():

    if request.method == "GET":
        abort(403)
    else:
        req = request.get_json()
        del_data = req.get("id")
        crumb = Crumbs.query.filter_by(id=int(del_data)).first_or_404()
        user = User.query.get_or_404(crumb.userId)
        db.session.delete(crumb)
        db.session.commit()
        return make_response(jsonify(req), 200)
        # return redirect(url_for('crumbs'))


@set_crumb.route("/crumbs/get", methods=["GET", "POST"])
def code():

    if request.method == "GET":
        abort(403)

    if current_user.is_authenticated:
        response = request.get_json()
        path = response.get("path")
        crumb = Crumbs.query.filter_by(url=path).first_or_404()
        user = User.query.get_or_404(crumb.userId)
        if crumb:
            save_crumb(response, crumb, user, True)
            return make_response(jsonify({"repsonse": "request successful"}), 200)

    else:
        return make_response(jsonify({"repsonse": "unsuccessful"}), 400)


@set_crumb.route("/crumbs/new", methods=["GET", "POST"])
def save():
    url = secrets.token_urlsafe(6)
    if current_user.is_authenticated:
        crumbs = Crumbs(url=url, author=current_user)

        db.session.add(crumbs)
        db.session.commit()
        return redirect(
            url_for("set_crumb.codecrumb", author=current_user.username, url=url)
        )

    elif request.method == "GET":
        abort(403)


@set_crumb.route("/<author>/crumb/<url>", methods=["GET", "POST"])
def codecrumb(author, url):
    crumb = Crumbs.query.filter_by(url=url).first_or_404()
    user = User.query.filter_by(username=author).first_or_404()

    if crumb.userId != user.id:
        abort(404)

    if current_user.is_authenticated:
        imageFile = url_for("static", filename="profile-images/" + current_user.image)
        c_id = crumb.userId == current_user.id
        code = json.dumps(json_response(crumb, c_id))
        is_author = crumb.author.id == current_user.id
        return render_template(
            "editor-v01.html",
            user=crumb,
            crumb=code,
            title=f"A Crumb by {author.capitalize()}",
            image=imageFile,
            is_author=is_author,
            snippets=user.snippet,
        )
    else:
        c_id = False
        code = json.dumps(json_response(crumb, c_id))
        is_author = False
        return render_template(
            "editor-v01.html",
            user=crumb,
            crumb=code,
            title=f"A Crumb by {author.capitalize()}",
            is_author=is_author,
        )


@set_crumb.route("/crumbs/fork", methods=["GET", "POST"])
def get_forked():
    if request.method == "GET":
        abort(403)

    if not current_user.is_authenticated:
        return make_response(jsonify({"Request Timeout": "Unsuccessful"}), 402)

    res = request.get_json()
    print(res)
    url = res.get("path")
    # author = res.get("author")
    # query db
    forked_crumb = Crumbs.query.filter_by(url=url).first_or_404()
    req = json_response(forked_crumb, False)
    new_url = secrets.token_urlsafe(6)
    new_crumb = Crumbs(url=new_url, author=current_user)
    db.session.add(new_crumb)
    db.session.commit()

    save_crumb(req, new_crumb, current_user, False)
    send_url = {"path": current_user.username + "/crumb/" + new_url}
    return make_response(jsonify(send_url), 200)


@set_crumb.route("/crumbs/save", methods=["GET", "POST"])
def get_saved():
    if request.method == "GET":
        abort(403)

    if not current_user.is_authenticated:
        return make_response(jsonify({"Request Timeout": "Unable to save"}), 403)

    res = request.get_json()

    # query db

    new_url = secrets.token_urlsafe(6)
    create_new_crumb(res, new_url)

    send_url = {"path": current_user.username + "/crumb/" + new_url}
    return make_response(jsonify(send_url), 200)


@set_crumb.route("/anon/crumbs", methods=["GET", "POST"])
def anonymous_crumb():
    if request.method == "GET":
        abort(403)

    res = request.get_json()

    new_url = secrets.token_urlsafe(6)

    create_new_anonymous_crumb(res, new_url)
    send_url = {"path": "anon/crumbs/" + new_url}
    return make_response(jsonify(send_url), 200)


@set_crumb.route("/anon/crumbs/<url>", methods=["GET", "POST"])
def get_anon_crumb(url):
    user = Anonymous_Crumbs.query.filter_by(url=url).first_or_404()

    if current_user.is_authenticated:
        imageFile = url_for("static", filename="profile-images/" + current_user.image)

        is_author = False
        code = json.dumps(anon_response(user))
        return render_template(
            "editor-v01.html",
            user=user,
            crumb=code,
            title="Anonymous Crumb",
            image=imageFile,
            is_author=is_author,
        )
    else:

        is_author = False
        code = json.dumps(anon_response(user))
        return render_template(
            "editor-v01.html",
            user=user,
            crumb=code,
            title="Anonymous Crumb",
            is_author=is_author,
        )


@set_crumb.route("/anon/crumbs/get", methods=["GET", "POST"])
def fork_anonymous_crumb():

    if request.method == "GET":
        abort(403)

    if not current_user.is_authenticated:
        return make_response(jsonify({"Request Timeout": "Unsuccessful"}), 402)

    res = request.get_json()
    print(res)
    url = res.get("path")
    # author = res.get("author")
    # query db
    forked_crumb = Anonymous_Crumbs.query.filter_by(url=url).first_or_404()
    req = anon_response(forked_crumb)
    new_url = secrets.token_urlsafe(6)
    new_crumb = Crumbs(url=new_url, author=current_user)
    db.session.add(new_crumb)
    db.session.commit()

    save_crumb(req, new_crumb, current_user, False)
    send_url = {"path": current_user.username + "/crumb/" + new_url}
    return make_response(jsonify(send_url), 200)


@set_crumb.route("/user/crumbs/snippets", methods=["GET", "POST"])
def snippets():
    if request.method == "GET":
        abort(403)

    res = request.get_json()

    snippet = res.get("snippet")
    user = User.query.get(current_user.id)

    user.snippet = snippet
    db.session.commit()

    return make_response(jsonify({"snippet": snippet}))


@set_crumb.route("/<author>/crumb/<url>/pseudo", methods=["GET", "POST"])
def pseudocode(author, url):
    p_code = Crumbs.query.filter_by(url=url).first_or_404()
    p_user = User.query.filter_by(username=author).first_or_404()

    pseudo = {
        "code": p_code.pseudocode,
        "user": current_user.id == p_code.userId,
        "theme": p_user.theme,
        "font": p_user.font,
        "title": p_code.crumbName,
    }
    toJson = json.dumps(pseudo)
    return render_template("readme.html", title=f"Pseudocode", toJson=toJson)


@set_crumb.route("/crumbs/pseudocode/save", methods=["GET", "POST"])
def send_pseudo():
    if request.method == "GET":
        abort(403)

    if current_user.is_authenticated:
        response = request.get_json()
        path = response.get("path")
        crumb = Crumbs.query.filter_by(url=path).first_or_404()
        User.query.get_or_404(crumb.userId)
        if crumb:
            save_pseudo(response, crumb)
            return make_response(jsonify({"repsonse": "request successful"}), 200)
    else:
        return make_response(jsonify({"response": "request forbidden"}), 403)


@set_crumb.route("/crumbs/exports/<name>", methods=["GET", "POST"])
def download(name):
    crumb = Crumbs.query.filter_by(url=name).first_or_404()
    name = (
        crumb.crumbName
        if crumb.crumbName != "Unnamed Crumb"
        else f"CodeCrumb_Exports_{name}"
    )
    sub_name = re.sub("\s|\W", "_", name.lower())

    handle_zip_file(
        sub_name,
        os.path.join(current_app.root_path, "static/client/export"),
        os.path.join(current_app.root_path, "static/client"),
    )

    return send_file(
        os.path.join(current_app.root_path, "static/client", f"{sub_name}.zip"),
        as_attachment=True,
    )


@set_crumb.route("/crumbs/exports", methods=["GET", "POST"])
def export_crumb():
    if request.method == "GET":
        abort(403)

    response = request.get_json()
    receive_export(response)
    return make_response(jsonify({"request": response.get("url")}), 200)
 