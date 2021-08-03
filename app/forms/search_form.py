from flask_wtf import FlaskForm
from wtforms import Form, StringField


class SearchForm(FlaskForm):
    searchQuery = StringField('search_query')
