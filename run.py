from flask import Flask
from flask_jwt_extended import JWTManager
from main import create_app
from config import DevConfig, ProdConfig

app = create_app(ProdConfig)

# Set the JWT secret key
app.config['JWT_SECRET_KEY'] = 'M7tMCeKLyXVEi5T7tsbUKJrVUcQ52pKGzmBtPwlEdCo'

# Initialize the Flask-JWT-Extended extension
jwt = JWTManager(app)

# run with
if __name__ == "__main__":
    app.run()
