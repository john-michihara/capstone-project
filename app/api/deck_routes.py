from flask import Blueprint, request
from flask_login import current_user
from datetime import datetime
from app.models import db, Deck, UserDeck, Card, Rating
from app.forms import CreateDeckForm, UpdateDeckForm, CreateCardForm


deck_routes = Blueprint('decks', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@deck_routes.route('/')
def get_decks():
    decks = Deck.query.all()
    return {'decks': [deck.to_dict() for deck in decks]}


@deck_routes.route('', methods=['POST'])
def create_deck():
    form = CreateDeckForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        deck = Deck(
            title=form.data['title'],
            description=form.data['description'],
            public=form.data['viewable'],
            creator_id=form.data['creatorId']
        )
        db.session.add(deck)
        db.session.commit()

        user_deck = UserDeck(
            deck_id=deck.id,
            user_id=deck.creator_id,
            updated_at=datetime.utcnow()
        )
        db.session.add(user_deck)
        db.session.commit()
        return deck.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@deck_routes.route('/<int:id>/cards', methods=['POST'])
def create_card(id):
    form = CreateCardForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        card = Card(
            front=form.data['front'],
            back=form.data['back'],
            deck_id=id
        )
        db.session.add(card)
        db.session.commit()
        return card.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@deck_routes.route('/<int:id>')
def get_deck(id):
    deck = Deck.query.get(id)
    return {'deck': deck.to_dict()}


@deck_routes.route('/<int:id>', methods=['PUT'])
def update_deck(id):
    form = UpdateDeckForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        deck = Deck.query.get(id)
        deck.title = form.data['title']
        deck.description = form.data['description'],
        deck.public = form.data['viewable']
        user_id = form.data['userId']
        db.session.add(deck)
        db.session.commit()

        user_deck = UserDeck.query.filter(
            UserDeck.deck_id == id,
            UserDeck.user_id == user_id
        ).first()
        user_deck.updated_at = datetime.utcnow()
        db.session.add(user_deck)
        db.session.commit()
        return deck.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@deck_routes.route('/<int:id>/cards', methods=['DELETE'])
def delete_cards_in_deck(id):
    cards = Card.query.filter(Card.deck_id == id).all()
    for card in cards:
        db.session.delete(card)
    db.session.commit()
    return {'cards': [card.to_dict() for card in cards]}


@deck_routes.route('/<int:id>', methods=['DELETE'])
def delete_deck(id):
    deck = Deck.query.get(id)
    db.session.delete(deck)
    db.session.commit()
    return deck.to_dict()
