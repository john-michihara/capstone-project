from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import NumberRange


class RatingForm(FlaskForm):
    deckId = IntegerField('deck_id')
    value = IntegerField('value', validators=[NumberRange(max=5, min=1)])
