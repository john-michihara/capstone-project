from flask import Blueprint, request
from app.models import db, Deck
from app.forms import CreateDeckForm


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


@deck_routes.route('/', methods=['POST'])
def create_deck():
    form = CreateDeckForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        deck = Deck(
            title=form.data['title'],
            description=form.data['description'],
            public=form.data['public'],
            creator_id=form.data['creator_id']
        )
        db.session.add(deck)
        db.session.commit()
        return deck.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
