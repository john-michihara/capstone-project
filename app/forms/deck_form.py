from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField
from app.models import Deck, UserDeck


class CreateDeckForm(FlaskForm):
    title = StringField('title')
    description = StringField('description')
    public = BooleanField('public')
