"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token
from werkzeug.security import check_password_hash, generate_password_hash

import os

api = Blueprint('api', __name__)

@api.route("/signup", methods=["POST"])
def signup():
    username = request.json.get('username', None)
    password = request.json.get('password', None)
    confirm_password = request.json.get('confirmPassword', None)
    email = request.json.get('email', None)

    if (password != confirm_password):
         return({'error':'passwords are not matching'}, 400)

    elif not (username and password and email and confirm_password):
         return({'error':'Missing info'}), 400

    else:
         new_user = User(username=username, email= email, password = generate_password_hash(password, method='pbkdf2:sha256', salt_length=16))
         created_user = new_user.create()
         access_token = create_access_token(identity=created_user.id)
         return({'token' : access_token, 'message' : 'Congratulations for signing up!'}), 200

# We keep this just in case it's not working....
# @api.route("/user", methods=["GET"]) #user should be GET
# def user():
#     username = request.json.get('username')
#     password = request.json.get('password')
#     if username and password:
#          new_user = User(user=username, password = generate_password_hash(password, method='pbkdf2:sha256', salt_length=16))
#          new_user.create()
#          created_user = User.get_by_username(username)

#          if created_user :
#               access_token = create_access_token(identity=created_user.serialize())
#               return({'token' : access_token}), 200

          # return jsonify({"msg": "Bad login or password"}), 401
         
# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/token", methods=["POST"])
def create_token():
    username = request.json.get('username', None)
    password = request.json.get('password', None)
     
     # Query your database for username and password
    user = User.query.filter_by(username=username, password=password).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad username or password"}), 401

    # To-do: 1. verify that the user exists in the database
    # 2. compare the hash from the password of the password input (line20) with the hash in the database (password field in the database)
    # 3. if above true, return token (line 28), if not, return error (line 22)

    access_token = create_access_token(identity=user.id)
    return jsonify(access_token=access_token)

# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/login", methods=["POST"])
def login():
     username = request.json.get('username', None)
     password = request.json.get('password', None)

     if not (username and password):
          return jsonify({'error':'Missing info'}), 400

     user = User.query.filter_by(username = username).first() 

     if user and check_password_hash(user.password, password): #and account._is_active
          access_token = create_access_token(identity=user.id)
          return jsonify({'token' : access_token}), 200
     else: 
          return jsonify({"error" : "bad info for the login"}), 400


@api.route("/trips", methods=["GET"])
@jwt_required()
def protected():

     current_user_id = get_jwt_identity()
     user = User.query.get(current_user_id)

     if user:
          return jsonify({"protected": True }), 200
     else:
          return jsonify({"protected": False }), 400
