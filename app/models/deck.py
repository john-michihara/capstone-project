from .db import db
from datetime import datetime


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

    creator = db.relationship('User', lazy='subquery',
                              back_populates='created_decks')
    cards = db.relationship(
        'Card', lazy='subquery', back_populates='deck', cascade="delete, merge, save-update")
    user_decks = db.relationship(
        'UserDeck', lazy='subquery', back_populates='deck', cascade="delete, merge, save-update")
    ratings = db.relationship('Rating', lazy='subquery', back_populates='deck', cascade="delete, merge, save-update")


    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'public': self.public,
            'creator_id': self.creator_id,
            'creator': self.creator.to_dict(),
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'cards': [card.to_dict() for card in self.cards],
            'ratings': [rating.to_dict() for rating in self.ratings]
        }
