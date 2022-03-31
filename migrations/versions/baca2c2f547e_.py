"""empty message

Revision ID: baca2c2f547e
Revises: 1ca53e252a15
Create Date: 2022-03-31 15:56:02.516873

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'baca2c2f547e'
down_revision = '1ca53e252a15'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('trip', 'travel_date',
               existing_type=postgresql.TIMESTAMP(),
               nullable=True)
    op.alter_column('trip', 'date_created',
               existing_type=postgresql.TIMESTAMP(),
               nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('trip', 'date_created',
               existing_type=postgresql.TIMESTAMP(),
               nullable=True)
    op.alter_column('trip', 'travel_date',
               existing_type=postgresql.TIMESTAMP(),
               nullable=False)
    # ### end Alembic commands ###
