from app.models import db, Deck


def seed_decks():
    deck1 = Deck(
        title='Japanese',
        creator_id=1
    )

    db.session.add(deck1)
    db.session.commit()


def undo_decks():
    db.session.execute('TRUNCATE decks RESTART IDENTITY CASCADE;')
    db.session.commit()
