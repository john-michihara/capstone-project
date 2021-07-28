from app.models import db, UserDeck


# Adds a demo user, you can add other users here if you want
def seed_user_decks():
    user_deck1 = UserDeck(user_id=1, deck_id=1)
    user_deck2 = UserDeck(user_id=1, deck_id=2)
    user_deck3 = UserDeck(user_id=1, deck_id=3)
    user_deck4 = UserDeck(user_id=1, deck_id=4)
    user_deck5 = UserDeck(user_id=2, deck_id=5)

    db.session.add(user_deck1)
    db.session.add(user_deck2)
    db.session.add(user_deck3)
    db.session.add(user_deck4)
    db.session.add(user_deck5)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_user_decks():
    db.session.execute('TRUNCATE user_decks RESTART IDENTITY CASCADE;')
    db.session.commit()
