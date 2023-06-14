
import flask
from flask import Flask


from backendResources.routes.get import initGetRoutes
from backendResources.routes.post import initPostRoutes

app = Flask(__name__)

initGetRoutes(app)
initPostRoutes(app)

def run():
    app.run("0.0.0.0", 8080)

run()