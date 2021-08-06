from app.models import db, UserDeck


# Adds a demo user, you can add other users here if you want
def seed_user_decks():
    user_decks = [
        UserDeck(user_id=1, deck_id=1),
        UserDeck(user_id=1, deck_id=4),
        UserDeck(user_id=1, deck_id=7),
        UserDeck(user_id=1, deck_id=10),
        UserDeck(user_id=1, deck_id=13),
        UserDeck(user_id=1, deck_id=16),
        UserDeck(user_id=1, deck_id=19),
        UserDeck(user_id=1, deck_id=22),
        UserDeck(user_id=1, deck_id=24),
    ]

    for user_deck in user_decks:
        db.session.add(user_deck)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_user_decks():
    db.session.execute('TRUNCATE user_decks RESTART IDENTITY CASCADE;')
    db.session.commit()
