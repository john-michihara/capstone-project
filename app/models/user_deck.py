from .db import db
from datetime import datetime


class UserDeck(db.Model):
    __tablename__ = 'user_decks'

    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id'), primary_key=True)
    deck_id = db.Column(db.Integer, db.ForeignKey(
        'decks.id'), primary_key=True)
    updated_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)
    last_studied = db.Column(db.DateTime)

    user = db.relationship('User', back_populates='user_decks')
    deck = db.relationship('Deck', back_populates='user_decks')

    def to_dict(self):
        return {
            'user_id': self.user_id,
            'deck_id': self.deck_id,
            'updated_at': self.updated_at,
            'last_studied': self.last_studied,
            'details': self.deck.to_dict()
        }
