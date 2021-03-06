from app.models import db, Card


def seed_cards():
    cards = [
        Card(deck_id=1, front='one', back='ichi'),
        Card(deck_id=1, front='two', back='ni'),
        Card(deck_id=1, front='three', back='san'),
        Card(deck_id=1, front='four', back='shi'),
        Card(deck_id=1, front='five', back='go'),
        Card(deck_id=1, front='six', back='roku'),
        Card(deck_id=1, front='seven', back='shichi'),
        Card(deck_id=1, front='eight', back='hachi'),
        Card(deck_id=1, front='nine', back='kyuu'),
        Card(deck_id=1, front='ten', back='juu'),

        Card(deck_id=2, front='red', back='aka'),
        Card(deck_id=2, front='orange', back='orenji'),
        Card(deck_id=2, front='yellow', back='kiiro'),
        Card(deck_id=2, front='green', back='midori'),
        Card(deck_id=2, front='blue', back='ao'),
        Card(deck_id=2, front='indigo', back='kon'),
        Card(deck_id=2, front='violet', back='murasaki'),

        Card(deck_id=3, front='dog', back='inu'),
        Card(deck_id=3, front='cat', back='neko'),
        Card(deck_id=3, front='bird', back='tori'),
        Card(deck_id=3, front='fish', back='sakana'),
        Card(deck_id=3, front='horse', back='uma'),
        Card(deck_id=3, front='cow', back='ushi'),
        Card(deck_id=3, front='monkey', back='saru'),

        Card(deck_id=4, front='apple', back='ringo'),
        Card(deck_id=4, front='orange', back='mikan'),
        Card(deck_id=4, front='banana', back='banana'),
        Card(deck_id=4, front='grapes', back='budou'),
        Card(deck_id=4, front='watermelon', back='suika'),
        Card(deck_id=4, front='cherry', back='sakuranbo'),
        Card(deck_id=4, front='lemon', back='remon'),
        Card(deck_id=4, front='peach', back='momo'),

        Card(deck_id=5, front='spinach', back='hourensou'),
        Card(deck_id=5, front='carrot', back='ninjin'),
        Card(deck_id=5, front='potato', back='jagaimo'),
        Card(deck_id=5, front='cucumber', back='kyuuri'),
        Card(deck_id=5, front='cabbage', back='kyabetsu'),
        Card(deck_id=5, front='onion', back='tamanegi'),
        Card(deck_id=5, front='lettuce', back='retasu'),
        Card(deck_id=5, front='corn', back='toumorokoshi'),

        Card(deck_id=6, front='Monday', back='getsuyoubi'),
        Card(deck_id=6, front='Tuesday', back='kayoubi'),
        Card(deck_id=6, front='Wednesday', back='suiyoubi'),
        Card(deck_id=6, front='Thursday', back='mokuyoubi'),
        Card(deck_id=6, front='Friday', back='kin\'youbi'),
        Card(deck_id=6, front='Saturday', back='doyoubi'),
        Card(deck_id=6, front='Sunday', back='nichiyoubi'),

        Card(deck_id=7, front='woof woof', back='wan wan'),
        Card(deck_id=7, front='meow meow', back='nyaa nyaa'),
        Card(deck_id=7, front='oink oink', back='buu buu'),
        Card(deck_id=7, front='ribbit ribbit', back='kero kero'),
        Card(deck_id=7, front='cock-a-doodle-doo', back='kokekokko'),
        Card(deck_id=7, front='baa baa', back='mee mee'),
        Card(deck_id=7, front='neigh neigh', back='hihiin'),

        Card(deck_id=8, front='hot', back='atsui'),
        Card(deck_id=8, front='cold', back='samui'),
        Card(deck_id=8, front='high', back='takai'),
        Card(deck_id=8, front='low', back='mijikai'),
        Card(deck_id=8, front='big', back='ookii'),
        Card(deck_id=8, front='small', back='chiisai'),
        Card(deck_id=8, front='fast', back='hayai'),
        Card(deck_id=8, front='slow', back='osoi'),

        Card(deck_id=9, front='one', back='???ekahi'),
        Card(deck_id=9, front='two', back='???elua'),
        Card(deck_id=9, front='three', back='???ekolu'),
        Card(deck_id=9, front='four', back='???eh??'),
        Card(deck_id=9, front='five', back='???elima'),
        Card(deck_id=9, front='six', back='???eono'),
        Card(deck_id=9, front='seven', back='???ehiku'),
        Card(deck_id=9, front='eight', back='???ewalu'),
        Card(deck_id=9, front='nine', back='???eiwa'),
        Card(deck_id=9, front='ten', back='???umi'),

        Card(deck_id=10, front='eleven', back='???umik??m??kahi'),
        Card(deck_id=10, front='twelve', back='???umik??m??lua'),
        Card(deck_id=10, front='thirteen', back='???umik??m??kolu'),
        Card(deck_id=10, front='fourteen', back='???umik??m??h??'),
        Card(deck_id=10, front='fifteen', back='???umik??m??lima'),
        Card(deck_id=10, front='sixteen', back='???umik??m??ono'),
        Card(deck_id=10, front='seventeen', back='???umik??m??hiku'),
        Card(deck_id=10, front='eighteen', back='???umik??m??walu'),
        Card(deck_id=10, front='nineteen', back='???umik??m??iwa'),
        Card(deck_id=10, front='twenty', back='iwak??lua'),

        Card(deck_id=11, front='red', back='???ula???ula'),
        Card(deck_id=11, front='orange', back='???alani'),
        Card(deck_id=11, front='yellow', back='melemele'),
        Card(deck_id=11, front='green', back='oma???oma???o'),
        Card(deck_id=11, front='blue', back='pol??'),
        Card(deck_id=11, front='purple', back='poni'),
        Card(deck_id=11, front='pink', back='???akala'),
        Card(deck_id=11, front='black', back='???ele???ele'),
        Card(deck_id=11, front='white', back='ke???oke???o'),
        Card(deck_id=11, front='brown', back='???palaunu'),

        Card(deck_id=12, front='How are you?', back='Pehea ??oe?'),
        Card(deck_id=12, front='What\'s your name?', back='??O wai kou inoa?'),
        Card(deck_id=12, front='Where are you from?', back='No hea mai ??oe?'),
        Card(deck_id=12, front='Good morning', back='Aloha kakahiaka'),
        Card(deck_id=12, front='Good afternoon', back='Aloha ??auinal??'),
        Card(deck_id=12, front='Good evening', back='Aloha ahiahi'),
        Card(deck_id=12, front='Thank you', back='Mahalo'),
        Card(deck_id=12, front='Goodbye', back='A hui hou'),

        Card(deck_id=13, front='Monday', back='P????akahi'),
        Card(deck_id=13, front='Tuesday', back='P????alua'),
        Card(deck_id=13, front='Wednesday', back='P????akolu'),
        Card(deck_id=13, front='Thursday', back='P????ah??'),
        Card(deck_id=13, front='Friday', back='P????alima'),
        Card(deck_id=13, front='Saturday', back='P????aono'),
        Card(deck_id=13, front='Sunday', back='L??pule'),

        Card(deck_id=14, front='hand', back='lima'),
        Card(deck_id=14, front='foot', back='w??wae'),
        Card(deck_id=14, front='eyes', back='maka'),
        Card(deck_id=14, front='ears', back='pepeiao'),
        Card(deck_id=14, front='nose', back='ihu'),
        Card(deck_id=14, front='mouth', back='waha'),
        Card(deck_id=14, front='knee', back='kuli'),
        Card(deck_id=14, front='elbow', back='ku??eku??e'),

        Card(deck_id=15, front='hot', back='wela'),
        Card(deck_id=15, front='cold', back='anuanu'),
        Card(deck_id=15, front='big', back='nui'),
        Card(deck_id=15, front='small', back='li??ili??i'),
        Card(deck_id=15, front='happy', back='hau??oli'),
        Card(deck_id=15, front='sad', back='kaumaha'),
        Card(deck_id=15, front='delicious', back='??ono'),
        Card(deck_id=15, front='beautiful', back='nani'),

        Card(deck_id=16, front='man', back='k??ne'),
        Card(deck_id=16, front='woman', back='wahine'),
        Card(deck_id=16, front='boy', back='keiki k??ne'),
        Card(deck_id=16, front='girl', back='kaikamahine'),
        Card(deck_id=16, front='student', back='haum??na'),
        Card(deck_id=16, front='teacher', back='kumu'),
        Card(deck_id=16, front='family', back='??ohana'),
        Card(deck_id=16, front='people', back='po??e'),

        Card(deck_id=17, front='dog', back='canis'),
        Card(deck_id=17, front='cat', back='cattus'),
        Card(deck_id=17, front='horse', back='equus'),
        Card(deck_id=17, front='bird', back='avis'),
        Card(deck_id=17, front='sheep', back='ovis'),
        Card(deck_id=17, front='monkey', back='simia'),
        Card(deck_id=17, front='mouse', back='m??s'),
        Card(deck_id=17, front='ant', back='form??ca'),

        Card(deck_id=18, front='red', back='ruber'),
        Card(deck_id=18, front='orange', back='aurantius'),
        Card(deck_id=18, front='yellow', back='fl??vus'),
        Card(deck_id=18, front='green', back='viridis'),
        Card(deck_id=18, front='blue', back='caeruleus'),
        Card(deck_id=18, front='purple', back='purpureus'),
        Card(deck_id=18, front='pink', back='roseus'),
        Card(deck_id=18, front='brown', back='fuscus'),

        Card(deck_id=19, front='good', back='bonus'),
        Card(deck_id=19, front='bad', back='malus'),
        Card(deck_id=19, front='large', back='magnus'),
        Card(deck_id=19, front='small', back='parvus'),
        Card(deck_id=19, front='many', back='multus'),
        Card(deck_id=19, front='beautiful', back='pulcher'),
        Card(deck_id=19, front='long', back='longus'),
        Card(deck_id=19, front='high', back='altus'),

        Card(deck_id=20, front='to walk', back='ambul??'),
        Card(deck_id=20, front='to eat', back='cen??'),
        Card(deck_id=20, front='to live', back='habit??'),
        Card(deck_id=20, front='to work', back='labor??'),
        Card(deck_id=20, front='to fight', back='pugn??'),
        Card(deck_id=20, front='to love', back='am??'),
        Card(deck_id=20, front='to call', back='voc??'),
        Card(deck_id=20, front='to carry', back='port??'),

        Card(deck_id=21, front='one', back='??nus'),
        Card(deck_id=21, front='two', back='du??'),
        Card(deck_id=21, front='three', back='tr??s'),
        Card(deck_id=21, front='four', back='quattuor'),
        Card(deck_id=21, front='five', back='qu??nque'),
        Card(deck_id=21, front='six', back='sex'),
        Card(deck_id=21, front='seven', back='septem'),
        Card(deck_id=21, front='eight', back='oct??'),
        Card(deck_id=21, front='nine', back='novem'),
        Card(deck_id=21, front='ten', back='decem'),

        Card(deck_id=22, front='father', back='pater'),
        Card(deck_id=22, front='mother', back='m??ter'),
        Card(deck_id=22, front='son', back='f??lius'),
        Card(deck_id=22, front='daughter', back='f??lia'),
        Card(deck_id=22, front='husband', back='mar??tus'),
        Card(deck_id=22, front='wife', back='uxor'),
        Card(deck_id=22, front='brother', back='fr??ter'),
        Card(deck_id=22, front='sister', back='soror'),

        Card(deck_id=23, front='rice', back='or??za'),
        Card(deck_id=23, front='tea', back='thea'),
        Card(deck_id=23, front='cheese', back='c??seus'),
        Card(deck_id=23, front='egg', back='??vum'),
        Card(deck_id=23, front='chicken', back='pullus'),
        Card(deck_id=23, front='milk', back='lac'),
        Card(deck_id=23, front='fish', back='piscis'),
        Card(deck_id=23, front='chocolate', back='chocol??tum'),

        Card(deck_id=24, front='Hello', back='Salv??'),
        Card(deck_id=24, front='Goodbye', back='Val??'),
        Card(deck_id=24, front='How are you?', back='Quid agis?'),
        Card(deck_id=24, front='Thank you', back='Tibi gr??ti??s ag??'),
        Card(deck_id=24, front='Are you well?', back='Val??sne?'),
        Card(deck_id=24, front='And you?', back='Et t???'),
        Card(deck_id=24, front='I\'m sorry', back='Mea culpa'),
        Card(deck_id=24, front='Excuse me', back='Ign??sce mihi'),
    ]

    for card in cards:
        db.session.add(card)

    db.session.commit()


def undo_cards():
    db.session.execute('TRUNCATE cards RESTART IDENTITY CASCADE;')
    db.session.commit()
