from app.models import db, Deck


def seed_decks():
    deck1 = Deck(
        title='English',
        creator_id=1
    )

    deck2 = Deck(
        title='Math',
        creator_id=1
    )

    deck3 = Deck(
        title='Chemistry',
        creator_id=1
    )

    deck4 = Deck(
        title='History',
        creator_id=1
    )

    deck5 = Deck(
        title='Math',
        creator_id=2
    )

    decks = [
        deck1,
        deck2,
        deck3,
        deck4,
        deck5
    ]

    for deck in decks:
        db.session.add(deck)

    db.session.commit()


def undo_decks():
    db.session.execute('TRUNCATE decks RESTART IDENTITY CASCADE;')
    db.session.commit()
