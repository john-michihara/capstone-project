from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='demo',
        email='demo@aa.io',
        password='password',
        profile_url='https://3.bp.blogspot.com/-uF9VsXtCfz0/VCIkHKJUTSI/AAAAAAAAmjw/Zmw2VGrZyyY/s800/monster05.png')
    brock = User(
        username='brock',
        email='brock@aa.io',
        password='password',
        profile_url='https://3.bp.blogspot.com/---bC5f3l67Y/VCIkKXEkX8I/AAAAAAAAmkc/xOSiXCTwebk/s100/monster12.png')
    misty = User(
        username='misty',
        email='misty@aa.io',
        password='password',
        profile_url='https://4.bp.blogspot.com/-zyd_W4E6BjM/VCIkF1J8sII/AAAAAAAAmjg/X7j73gG6UFs/s100/monster03.png')
    surge = User(
        username='surge',
        email='surge@aa.io',
        password='password',
        profile_url='https://1.bp.blogspot.com/-3GUksHO3Sgc/VCIkF-PenoI/AAAAAAAAmjk/by_uxGIO7hU/s100/monster02.png')
    erika = User(
        username='erika',
        email='erika@aa.io',
        password='password',
        profile_url='https://3.bp.blogspot.com/-66UXoSvwaOc/VCIkJiqQVMI/AAAAAAAAmkU/8lvbCe4sz9s/s100/monster10.png')
    sabrina = User(
        username='sabrina',
        email='sabrina@aa.io',
        password='password',
        profile_url='https://4.bp.blogspot.com/-CfSVFwYqpkQ/VCIkGwECcHI/AAAAAAAAmjs/Iksw2cv-43s/s100/monster04.png')
    koga = User(
        username='koga',
        email='koga@aa.io',
        password='password',
        profile_url='https://4.bp.blogspot.com/-R7qkuOoCs1k/VCIkIbJW75I/AAAAAAAAmkE/pvE5zePq6Tk/s100/monster08.png')
    blaine = User(
        username='blaine',
        email='blaine@aa.io',
        password='password',
        profile_url='https://4.bp.blogspot.com/-8DEnZirlVa0/VCIkJQVrQaI/AAAAAAAAmkQ/sYReYG-5cho/s100/monster09.png')
    giovanni = User(
        username='giovanni',
        email='giovanni@aa.io',
        password='password',
        profile_url='https://4.bp.blogspot.com/-gKPdnJWscyI/VCIkF3Po4DI/AAAAAAAAmjo/fAKkTMyf8hM/s100/monster01.png')

    db.session.add(demo)
    db.session.add(brock)
    db.session.add(misty)
    db.session.add(surge)
    db.session.add(erika)
    db.session.add(sabrina)
    db.session.add(koga)
    db.session.add(blaine)
    db.session.add(giovanni)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
