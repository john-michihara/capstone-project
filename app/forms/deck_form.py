from flask_wtf import FlaskForm
from wtforms import Form, StringField, BooleanField, IntegerField, FieldList, FormField, Form, TextField
from wtforms.validators import DataRequired, Length


class CreateDeckForm(FlaskForm):
    title = StringField('title', validators=[
        DataRequired(message='Please enter a title to create your deck.'),
        Length(max=60, message='Please enter a title that is less than 60 characters.')
    ])
    description = StringField('description', validators=[
        Length(
            max=255, message='Please enter a description that is less than 255 characters.')
    ])
    viewable = BooleanField('viewable')
    creatorId = IntegerField('creator_id')


class UpdateDeckForm(FlaskForm):
    title = StringField('title', validators=[
        DataRequired(message='Please enter a title to update your deck.'),
        Length(max=60, message='Please enter a title that is less than 60 characters.')
    ])
    description = StringField('description', validators=[
        Length(
            max=255, message='Please enter a description that is less than 255 characters.')
    ])
    viewable = BooleanField('viewable')
    userId = IntegerField('user_id')
