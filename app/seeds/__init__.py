from flask.cli import AppGroup
from .users import seed_users, undo_users
from .decks import seed_decks, undo_decks
from .user_decks import seed_user_decks, undo_user_decks
from .cards import seed_cards, undo_cards

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_decks()
    seed_cards()
    seed_user_decks()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_decks()
    undo_cards()
    undo_user_decks()
    # Add other undo functions here
