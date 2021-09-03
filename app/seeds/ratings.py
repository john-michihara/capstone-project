from app.models import db, Rating
import random


def seed_ratings():
    ratings = [
        Rating(user_id=2, deck_id=1, value=random.randint(3, 5)),
        Rating(user_id=2, deck_id=4, value=random.randint(3, 5)),
        Rating(user_id=2, deck_id=10, value=random.randint(3, 5)),

        Rating(user_id=3, deck_id=14, value=random.randint(3, 5)),
        Rating(user_id=3, deck_id=16, value=random.randint(3, 5)),
        Rating(user_id=3, deck_id=1, value=random.randint(3, 5)),
        Rating(user_id=3, deck_id=20, value=random.randint(3, 5)),
        Rating(user_id=3, deck_id=22, value=random.randint(3, 5)),

        Rating(user_id=4, deck_id=3, value=random.randint(3, 5)),
        Rating(user_id=4, deck_id=6, value=random.randint(3, 5)),
        Rating(user_id=4, deck_id=9, value=random.randint(3, 5)),
        Rating(user_id=4, deck_id=15, value=random.randint(3, 5)),
        Rating(user_id=4, deck_id=1, value=random.randint(3, 5)),
        Rating(user_id=4, deck_id=24, value=random.randint(3, 5)),
        Rating(user_id=4, deck_id=4, value=random.randint(3, 5)),

        Rating(user_id=5, deck_id=12, value=random.randint(3, 5)),
        Rating(user_id=5, deck_id=16, value=random.randint(3, 5)),
        Rating(user_id=5, deck_id=24, value=random.randint(3, 5)),

        Rating(user_id=6, deck_id=5, value=random.randint(3, 5)),
        Rating(user_id=6, deck_id=15, value=random.randint(3, 5)),
        Rating(user_id=6, deck_id=20, value=random.randint(3, 5)),
        Rating(user_id=6, deck_id=6, value=random.randint(3, 5)),
        Rating(user_id=6, deck_id=18, value=random.randint(3, 5)),

        Rating(user_id=7, deck_id=24, value=random.randint(3, 5)),
        Rating(user_id=7, deck_id=7, value=random.randint(3, 5)),
        Rating(user_id=7, deck_id=1, value=random.randint(3, 5)),
        Rating(user_id=7, deck_id=21, value=random.randint(3, 5)),
        Rating(user_id=7, deck_id=16, value=random.randint(3, 5)),
        Rating(user_id=7, deck_id=9, value=random.randint(3, 5)),
        Rating(user_id=7, deck_id=18, value=random.randint(3, 5)),

        Rating(user_id=8, deck_id=10, value=random.randint(3, 5)),
        Rating(user_id=8, deck_id=20, value=random.randint(3, 5)),
        Rating(user_id=8, deck_id=4, value=random.randint(3, 5)),
        Rating(user_id=8, deck_id=6, value=random.randint(3, 5)),

        Rating(user_id=9, deck_id=8, value=random.randint(3, 5)),
        Rating(user_id=9, deck_id=12, value=random.randint(3, 5)),
        Rating(user_id=9, deck_id=14, value=random.randint(3, 5)),
        Rating(user_id=9, deck_id=18, value=random.randint(3, 5)),
        Rating(user_id=9, deck_id=20, value=random.randint(3, 5)),
    ]

    for rating in ratings:
        db.session.add(rating)

    db.session.commit()


def undo_ratings():
    db.session.execute('TRUNCATE ratings RESTART IDENTITY CASCADE;')
    db.session.commit()
