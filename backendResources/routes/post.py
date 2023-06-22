

from flask import render_template, redirect, request
import os
from ..functions import getCurrentSite, usernameValid, fullnameValid, emailValid, passwordValid, usernameIsTaken
from ..classes import *

def initPostRoutes(app, DB):

    #Home
    @app.post("/")
    def mainPost():
        return "me"

    #Home
    @app.post("/signup")
    def signupPost():
        email = request.form.get("email")
        fullname = request.form.get("fullname")
        username = request.form.get("username")
        password = request.form.get("password")

        _emailIsValid = emailValid(email)
        _fullnameIsValid = fullnameValid(fullname)
        _usernameIsValid = usernameValid(username)
        _passwordIsValid = passwordValid(password)

        if _emailIsValid["success"] != True:
            return render_template("/mainSites/signup.html", data={"request": request, "signup_error_message": _emailIsValid["message"], "form":request.form})
        else: 
            if _fullnameIsValid["success"] != True:
                return render_template("/mainSites/signup.html", data={"request": request, "signup_error_message": _fullnameIsValid["message"], "form":request.form})
            else:
                if _usernameIsValid["success"] != True:
                    return render_template("/mainSites/signup.html", data={"request": request, "signup_error_message": _usernameIsValid["message"], "form":request.form})
                
                else:
                    if usernameIsTaken(username):
                        return render_template("/mainSites/signup.html", data={"request": request, "signup_error_message": "Username is taken.", "form":request.form})
                    
                    if _passwordIsValid["success"] != True:
                        return render_template("/mainSites/signup.html", data={"request": request, "signup_error_message": _passwordIsValid["message"], "form":request.form})
                    else: 
                        #Create a new user and save to db, then redirect to home or send mail to the user's email
                        print( repr(User(username, fullname, email)) )
                        return "{}"
