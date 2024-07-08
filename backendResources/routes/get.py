from flask import render_template, redirect, request
from ..functions import getCurrentSite  # Assuming this import is correct
import os

randomUserNames = ["Niko", "Micheal", "John", "hagrid", "Jason", "Julie", "Jane", "Miok"]

def initGetRoutes(app, DB):
    """
    Initialize GET routes for the Flask application.

    Args:
        app: The Flask application instance.
        DB: The database instance.
    """

    @app.get("/")
    def mainGet():
        """
        Handler for the main (home) page.

        Returns:
            str: Rendered template for the home page.
        """
        currentSite = getCurrentSite(request)
        return render_template("/mainSites/home.html", data={"currentSite": currentSite, "request": request, "randomUserNames": randomUserNames})

    @app.get("/signup")
    def signupGet():
        """
        Handler for the signup page.

        Returns:
            str: Rendered template for the signup page.
        """
        currentSite = getCurrentSite(request)
        return render_template("/mainSites/signup.html", data={"currentSite": currentSite, "request": request, "randomUserNames": randomUserNames})

    @app.get("/login")
    def loginGet():
        """
        Handler for the login page.

        Returns:
            str: Rendered template for the login page.
        """
        currentSite = getCurrentSite(request)
        return render_template("/mainSites/login.html", data={"currentSite": currentSite, "request": request, "randomUserNames": randomUserNames})

    @app.get("/explore")
    def exploreGet():
        """
        Handler for the explore page.

        Returns:
            str: Rendered template for the explore page.
        """
        currentSite = getCurrentSite(request)
        return render_template("/mainSites/explore.html", data={"currentSite": currentSite, "request": request, "randomUserNames": randomUserNames})

    @app.get("/reels")
    def reelsGet():
        """
        Handler for the reels page.

        Returns:
            str: Rendered template for the reels page.
        """
        currentSite = getCurrentSite(request)
        return render_template("/mainSites/home.html", data={"currentSite": currentSite, "request": request, "randomUserNames": randomUserNames})

    @app.get("/messages")
    def messagesGet():
        """
        Handler for the messages page.

        Returns:
            str: Rendered template for the messages page.
        """
        currentSite = getCurrentSite(request)
        return render_template("/mainSites/home.html", data={"currentSite": currentSite, "request": request, "randomUserNames": randomUserNames})

    @app.get("/create")
    def createGet():
        """
        Handler for the create page.

        Returns:
            str: Rendered template for the create page.
        """
        currentSite = getCurrentSite(request)
        return render_template("/mainSites/home.html", data={"currentSite": currentSite, "request": request, "randomUserNames": randomUserNames})
