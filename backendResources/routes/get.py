
from flask import render_template, redirect, request
import os
from ..functions import getCurrentSite


randomUserNames = ["Niko", "Micheal", "John", "hagrid", "Jason", "Julie", "Jane", "Miok"]

def initGetRoutes(app, DB):

    #Home
    @app.get("/")
    def mainGet():
        currentSite = getCurrentSite(request)
        return render_template("/mainSites/home.html", data={"currentSite":currentSite, "request":request, "randomUserNames": randomUserNames})
    

    #Signup
    @app.get("/signup")
    def signupGet():
        currentSite = getCurrentSite(request)
        return render_template("/mainSites/signup.html", data={"currentSite":currentSite, "request":request, "randomUserNames": randomUserNames})
    

    #Login
    @app.get("/login")
    def loginGet():
        currentSite = getCurrentSite(request)
        return render_template("/mainSites/login.html", data={"currentSite":currentSite, "request":request, "randomUserNames": randomUserNames})
    



    @app.get("/explore")
    def exploreGet():
        currentSite = getCurrentSite(request)
        return render_template("/mainSites/explore.html", data={"currentSite":currentSite, "request":request, "randomUserNames": randomUserNames})


    @app.get("/reels")
    def reelsGet():
        currentSite = getCurrentSite(request)
        return render_template("/mainSites/home.html", data={"currentSite":currentSite, "request":request, "randomUserNames": randomUserNames})


    @app.get("/messages")
    def messagesGet():
        currentSite = getCurrentSite(request)
        return render_template("/mainSites/home.html", data={"currentSite":currentSite, "request":request, "randomUserNames": randomUserNames})



    @app.get("/create")
    def createGet():
        currentSite = getCurrentSite(request)
        return render_template("/mainSites/home.html", data={"currentSite":currentSite, "request":request, "randomUserNames": randomUserNames})

