
import flask
from flask import Flask


from backendResources.routes.get import initGetRoutes
from backendResources.routes.post import initPostRoutes
from backendResources.databases.main import initDB

app = Flask(__name__)

DB = initDB()

initGetRoutes(app, DB)
initPostRoutes(app, DB)

def run():
    app.run("0.0.0.0", 8080)

run()