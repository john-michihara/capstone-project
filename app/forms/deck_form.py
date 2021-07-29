from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, IntegerField
from app.models import Deck, UserDeck


# def title_validator(form, field):
#     title = form.data['title']



class CreateDeckForm(FlaskForm):
    title = StringField('title')
    description = StringField('description')
    viewable = BooleanField('viewable')
    creatorId = IntegerField('creator_id')
