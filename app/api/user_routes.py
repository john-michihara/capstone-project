from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User
from app.models import Deck


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
def user_created(id):
    decks = Deck.query.filter_by(creator_id=id).all()
    print(decks)
    return {'decks': [deck.to_dict() for deck in decks]}
