from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from sqlalchemy import asc
from app.models import db, User
from app.models import Deck
from app.models import UserDeck
from app.s3_helpers import (upload_file_to_s3, allowed_file, get_unique_filename)


user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>/created')
@login_required
def get_user_created(id):
    decks = Deck.query.filter_by(creator_id=id).order_by(asc(
        Deck.updated_at)).all()
    return {'decks': [deck.to_dict() for deck in decks]}


@user_routes.route('/<int:id>/decks')
@login_required
def get_user_decks(id):
    user_decks = UserDeck.query.filter_by(user_id=id).all()
    return {'decks': [deck.to_dict() for deck in user_decks]}


@user_routes.route('/<int:id>/profile_picture', methods=['PUT'])
@login_required
def update_user_profile_picture(id):
    user = User.query.get(id)
    user.profile_url = request.get_json()['url']
    db.session.add(user)
    db.session.commit()
    return user.to_dict()


@user_routes.route('/upload_profile_picture', methods=['PUT'])
@login_required
def upload_user_profile_picture():
    if 'image' not in request.files:
        return {'errors': 'image required'}, 400

    image = request.files['image']

    if not allowed_file(image.filename):
        return {'errors': 'file type not permitted'}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if 'url' not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload['url']

    user = current_user
    user.profile_url = url
    db.session.add(user)
    db.session.commit()

    return user.to_dict()
