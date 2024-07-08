import flask
from flask import Flask

from backendResources.routes.get import initGetRoutes
from backendResources.routes.post import initPostRoutes
from backendResources.databases.main import initDB

app = Flask(__name__)  # Initialize Flask application

DB = initDB()  # Initialize database

# Initialize routes
initGetRoutes(app, DB)
initPostRoutes(app, DB)

def run():
    app.run("0.0.0.0", 8080)  # Run the Flask application

run()  # Start the application
