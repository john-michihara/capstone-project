from flask_wtf import FlaskForm
from wtforms import Form, StringField, IntegerField
from wtforms.validators import DataRequired


class CreateCardForm(FlaskForm):
    front = StringField('front')
    back = StringField('back')
    # deckId = IntegerField('deck_id')
