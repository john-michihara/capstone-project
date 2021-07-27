from app.models import db, Card


def seed_cards():
    demo1 = Card(
        front='inu',
        back='dog',
        deck_id=1,
    )

    db.session.add(demo1)
    db.session.commit()


def undo_cards():
    db.session.execute('TRUNCATE cards RESTART IDENTITY CASCADE;')
    db.session.commit()
