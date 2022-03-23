import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(40), unique=False, nullable=False)
    logged_in = db.Column(db.Boolean(), unique=False, nullable=False)
    username = db.Column(db.String(80), unique=True, nullable=False)
    first_name = db.Column(db.String(60), unique=False)
    last_name = db.Column(db.String(100), unique=False)
    photo = db.Column(db.String(), unique=False)
    birthday = db.Column(db.DateTime())
    trips = db.relationship('Trip', backref='user', lazy=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def create(self):
      db.session.add(self)
      db.session.commit()

    @classmethod
    def get_by_username(cls, user):
      account = cls.query.filter_by(user=user).one_or_none()
      return account

    # tell python how to print the class object on the console

    def __repr__(self):
        return '<User %r>' % self.username

    # tell python how convert the class object into a dictionary ready to jsonify
    def serialize(self):
        return {
            "username": self.username,
            "email": self.email
            # do not serialize the password, its a security breach
        }

class Trip(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    travel_date = db.Column(db.DateTime())
    date_created = db.Column(db.DateTime(), nullable=False)
    city = db.Column(db.String(), unique=True)
    locations = db.Column(db.String(), unique=False, nullable=False)
    num_of_locations = db.Column(db.Integer(), unique=False, nullable=False) 
    is_favourite = db.Column(db.Boolean(), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    country_id = db.Column(db.Integer, db.ForeignKey('country.id'), nullable=False)

    # tell python how to print the class object on the console
    def __repr__(self):
        return '<Trip %r>' % self.name

    # tell python how convert the class object into a dictionary ready to jsonify
    def serialize(self):
        return {
            "name": self.name,
            "locations": self.locations
            # do not serialize the password, its a security breach
        }
        
class Country(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    country = db.Column(db.String(), unique=True, nullable=False)
    country_code = db.Column(db.String(), unique=True, nullable=False)
    trips = db.relationship('Trip', backref='country', lazy=True)


    # tell python how to print the class object on the console
    def __repr__(self):
        return '<Trip %r>' % self.name

    # tell python how convert the class object into a dictionary ready to jsonify
    def serialize(self):
        return {
            "name": self.name,
            "locations": self.locations
            # do not serialize the password, its a security breach
        }
