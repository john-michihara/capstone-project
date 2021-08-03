from flask import Blueprint, request
from app.models import db, Deck
from app.forms import SearchForm


search_routes = Blueprint('search', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@search_routes.route('', method=['POST'])
def filter_decks():
    form = SearchForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    search_query = form.data['searchQuery']
    if form.validate_on_submit():
        filtered_decks = Deck.query.filter(
            Deck.title.like('%' + search_query + '%')).all()
        return {'filtered_decks': [deck.to_dict() for deck in filtered_decks]}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
