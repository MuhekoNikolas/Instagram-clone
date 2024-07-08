from flask import render_template, redirect, request
import os
from ..functions import getCurrentSite, usernameValid, fullnameValid, emailValid, passwordValid, usernameIsTaken
from ..classes import *

def initPostRoutes(app, DB):
    """
    Initialize POST routes for the Flask application.
    
    Args:
        app: The Flask application instance.
        DB: The database instance.
    """

    @app.post("/")
    def mainPost():
        """
        Handle POST requests to the home route.
        
        Returns:
            str: At the moment, just returns a placeholder response, but should return a return a json response.
        """
        return "me"

    @app.post("/signup")
    def signupPost():
        """
        Handle POST requests to the signup route.
        
        Validates user input and either renders the signup page with error messages 
        or processes the creation of a new user account.
        
        Returns:
            str: The rendered template or a placeholder response.
        """
        email = request.form.get("email")
        fullname = request.form.get("fullname")
        username = request.form.get("username")
        password = request.form.get("password")

        # Validate form data
        _emailIsValid = emailValid(email)
        _fullnameIsValid = fullnameValid(fullname)
        _usernameIsValid = usernameValid(username)
        _passwordIsValid = passwordValid(password)

        # Check each validation and render the signup page with appropriate error messages
        if not _emailIsValid["success"]:
            return render_template("/mainSites/signup.html", data={"request": request, "signup_error_message": _emailIsValid["message"], "form": request.form})
        elif not _fullnameIsValid["success"]:
            return render_template("/mainSites/signup.html", data={"request": request, "signup_error_message": _fullnameIsValid["message"], "form": request.form})
        elif not _usernameIsValid["success"]:
            return render_template("/mainSites/signup.html", data={"request": request, "signup_error_message": _usernameIsValid["message"], "form": request.form})
        elif usernameIsTaken(username):
            return render_template("/mainSites/signup.html", data={"request": request, "signup_error_message": "Username is taken.", "form": request.form})
        elif not _passwordIsValid["success"]:
            return render_template("/mainSites/signup.html", data={"request": request, "signup_error_message": _passwordIsValid["message"], "form": request.form})
        else:
            # Create a new user and save to db, then redirect to home or send mail to the user's email
            print(repr(User(username, fullname, email)))
            return "{}"
