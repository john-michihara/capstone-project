from .db import db
from datetime import datetime


# user_decks = db.Table(
#     'user_decks',
#     db.Column('deck_id', db.Integer, db.ForeignKey(
#         'decks.id'), primary_key=True),
#     db.Column('user_id', db.Integer, db.ForeignKey(
#         'users.id'), primary_key=True)
# )


class Deck(db.Model):
    __tablename__ = 'decks'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(60), nullable=False)
    description = db.Column(db.String(255))
    public = db.Column(db.Boolean, nullable=False, default=False)
    creator_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)

    creator = db.relationship('User', back_populates='created_decks')
    cards = db.relationship('Card', back_populates='deck')
    user_decks = db.relationship('UserDeck', back_populates='deck')

    # users = db.relationship('User', secondary=user_decks,
    #                         back_populates='decks')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'public': self.public,
            'creator_id': self.creator_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }
