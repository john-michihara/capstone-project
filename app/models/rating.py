from .db import db


class Rating(db.Model):
    __tablename__ = 'ratings'

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True)
    deck_id = db.Column(db.Integer, db.ForeignKey('decks.id'), primary_key=True)
    value = db.Column(db.Integer, nullable=False)

    user = db.relationship('User', back_populates='ratings')
    deck = db.relationship('Deck', back_populates='ratings')

    def to_dict(self):
        return {
            'user_id': self.user_id,
            'deck_id': self.deck_id,
            'value': self.value
        }
