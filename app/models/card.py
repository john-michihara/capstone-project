from .db import db
from datetime import datetime


class Card(db.Model):
    __tablename__ = 'cards'

    id = db.Column(db.Integer, primary_key=True)
    front = db.Column(db.Text, nullable=False)
    back = db.Column(db.Text, nullable=False)
    image_url = db.Column(db.String(2048))
    audio_url = db.Column(db.String(2048))
    deck_id = db.Column(db.Integer, db.ForeignKey('decks.id'), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    deck = db.relationship('Deck', back_populates='cards')

    def to_dict(self):
        return {
            'id': self.id,
            'front': self.front,
            'back': self.back,
            'image_url': self.image_url,
            'audio_url': self.audio_url,
            'deck_id': self.deck_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'deck': self.deck
        }
