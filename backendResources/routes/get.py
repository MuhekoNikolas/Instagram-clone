
from flask import render_template, redirect, request
import os
from ..functions import getCurrentSite


randomUserNames = ["Niko", "Micheal", "John", "hagrid", "Jason", "Julie", "Jane", "Miok"]

def initGetRoutes(app):

    #Home
    @app.get("/")
    def mainGet():
        currentSite = getCurrentSite(request)


        return render_template("/mainSites/home.html", data={"currentSite":currentSite, "request":request, "randomUserNames": randomUserNames})
    
    @app.get("/search")
    def searchGet():
        currentSite = getCurrentSite(request)

        return render_template("/mainSites/home.html", data={"currentSite":currentSite, "request":request, "randomUserNames": randomUserNames})


    @app.get("/explore")
    def exploreGet():
        currentSite = getCurrentSite(request)
        return render_template("/mainSites/home.html", data={"currentSite":currentSite, "request":request, "randomUserNames": randomUserNames})


    @app.get("/reels")
    def reelsGet():
        currentSite = getCurrentSite(request)
        return render_template("/mainSites/home.html", data={"currentSite":currentSite, "request":request, "randomUserNames": randomUserNames})


    @app.get("/messages")
    def messagesGet():
        currentSite = getCurrentSite(request)
        return render_template("/mainSites/home.html", data={"currentSite":currentSite, "request":request, "randomUserNames": randomUserNames})


    @app.get("/notifications")
    def notificationsGet():
        currentSite = getCurrentSite(request)
        return render_template("/mainSites/home.html", data={"currentSite":currentSite, "request":request, "randomUserNames": randomUserNames})

    @app.get("/create")
    def createGet():
        currentSite = getCurrentSite(request)
        return render_template("/mainSites/home.html", data={"currentSite":currentSite, "request":request, "randomUserNames": randomUserNames})

