from flask import Blueprint, request
from flask_login import current_user
from app.models import db, Rating, Deck
from app.forms import RatingForm


rating_routes = Blueprint('ratings', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@rating_routes.route('', methods=['POST'])
def add_deck_rating():
    form = RatingForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    print(form.data)

    if form.validate_on_submit():
        rating = Rating(
            user_id = current_user.id,
            deck_id = form.data['deckId'],
            value = form.data['value']
        )
        db.session.add(rating)
        db.session.commit()

        deck = Deck.query.get(rating.deck_id)
        print(deck.to_dict())
        return {'deck': deck.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
