from app.models import db, Deck


def seed_decks():
    decks = [
        Deck(creator_id=2, public=True, title='Numbers in Japanese', description='Learn how to count from 1 to 10 in Japanese.'),
        Deck(creator_id=3, public=True, title='Colors in Japanese', description='Learn the colors of the rainbow in Japanese.'),
        Deck(creator_id=4, public=True, title='Animals in Japanese', description='Learn animal names in Japanese.'),
        Deck(creator_id=5, public=True, title='Fruits in Japanese', description='Learn fruit names in Japanese.'),
        Deck(creator_id=6, public=True, title='Vegetables in Japanese', description='Learn vegetables names in Japanese.'),
        Deck(creator_id=7, public=True, title='Days of the Week in Japanese', description='Learn the days of the week in Japanese.'),
        Deck(creator_id=8, public=True, title='Animal Sounds in Japanese', description='Learn animal sounds in Japanese.'),
        Deck(creator_id=9, public=True, title='Basic Adjectives in Japanese', description='Learn how to say several adjectives in Japanese.'),

        Deck(creator_id=2, public=True, title='Numbers 1-10 in Hawaiian', description='Learn how to count from 1 to 10 in Hawaiian.'),
        Deck(creator_id=3, public=True, title='Numbers 11-20 in Hawaiian', description='Learn how to count from 11 to 20 in Hawaiian.'),
        Deck(creator_id=4, public=True, title='Colors in Hawaiian', description='Learn colors in Hawaiian.'),
        Deck(creator_id=5, public=True, title='Basic Phrases in Hawaiian', description='Learn some basic phrases in Hawaiian.'),
        Deck(creator_id=6, public=True, title='Days of the Week in Hawaiian', description='Learn the days of the week in Hawaiian.'),
        Deck(creator_id=7, public=True, title='Parts of the Body in Hawaiian', description='Learn the parts of the body in Hawaiian.'),
        Deck(creator_id=8, public=True, title='Basic Adjectives in Hawaiian', description='Learn how to say several adjectives in Hawaiian.'),
        Deck(creator_id=9, public=True, title='People Words in Hawaiian', description='Learn words related to people in Hawaiian.'),

        Deck(creator_id=2, public=True, title='Animals in Latin', description='Learn animal names in Latin.'),
        Deck(creator_id=3, public=True, title='Colors in Latin', description='Learn colors in Latin.'),
        Deck(creator_id=4, public=True, title='Basic Adjectives in Latin', description='Learn how to say serveral adjectives in Latin.'),
        Deck(creator_id=5, public=True, title='Basic Verbs in Latin', description='Learn how to say several verbs in Latin.'),
        Deck(creator_id=6, public=True, title='Numbers in Latin', description='Learn how to count from 1 to 10 in Latin.'),
        Deck(creator_id=7, public=True, title='Family Words in Latin', description='Learn words related to family in Latin.'),
        Deck(creator_id=8, public=True, title='Foods in Latin', description='Learn foods in Latin.'),
        Deck(creator_id=9, public=True, title='Basic Phrases in Latin', description='Learn basic phrase in Latin.'),
    ]

    for deck in decks:
        db.session.add(deck)

    db.session.commit()


def undo_decks():
    db.session.execute('TRUNCATE decks RESTART IDENTITY CASCADE;')
    db.session.commit()
