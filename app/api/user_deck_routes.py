from flask import Blueprint, request
from app.models import db, UserDeck
import json


user_deck_routes = Blueprint('user_decks', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@user_deck_routes.route('', methods=['POST'])
def create_user_deck():
    data = json.loads(request.data)
    user_id = data['userId']
    deck_id = data['deckId']

    user_deck = UserDeck(
        deck_id=deck_id,
        user_id=user_id
    )

    db.session.add(user_deck)
    db.session.commit()
    return user_deck.to_dict()


@user_deck_routes.route('/<int:userId>/<int:deckId>', methods=['DELETE'])
def delete_user_deck(userId, deckId):
    print(userId, deckId)
    user_deck = UserDeck.query.filter(
        UserDeck.user_id == userId,
        UserDeck.deck_id == deckId
    ).first()
    db.session.delete(user_deck)
    db.session.commit()
    return {'deckId': deckId}
