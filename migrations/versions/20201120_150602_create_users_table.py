"""create_users_table

Revision ID: ffdc0a98111c
Revises:
Create Date: 2020-11-20 15:06:02.230689

"""
from sqlalchemy.sql.schema import PrimaryKeyConstraint
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ffdc0a98111c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('username', sa.String(
                        length=40), nullable=False),
                    sa.Column('email', sa.String(length=255), nullable=False),
                    sa.Column('hashed_password', sa.String(
                        length=255), nullable=False),
                    sa.PrimaryKeyConstraint('id'),
                    sa.UniqueConstraint('email'),
                    sa.UniqueConstraint('username')
                    )

    op.create_table('decks',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('title', sa.String(length=60), nullable=False),
                    sa.Column('description', sa.String(
                        length=255), nullable=True),
                    sa.Column('public', sa.Boolean(), nullable=False),
                    sa.Column('creator_id', sa.Integer(), nullable=False),
                    sa.Column('created_at', sa.DateTime(), nullable=False),
                    sa.Column('updated_at', sa.DateTime(), nullable=False),
                    sa.PrimaryKeyConstraint('id'),
                    sa.ForeignKeyConstraint(['creator_id'], ['users.id'])
                    )
    # ### end Alembic commands ###qqqqqqqqq


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    op.drop_table('decks')
    # ### end Alembic commands ###
