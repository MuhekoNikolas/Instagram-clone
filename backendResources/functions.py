

import re, os
from dotenv import load_dotenv
from .classes import GMAIL

load_dotenv()

myMail = GMAIL(os.environ.get('Google_Mail'), os.environ.get('Google_Mail_Password'))
myMail.login()

#myMail.send('13nikmuh@gmail.com', 'Email Verification', f'Your verification code is: {200}')






def getCurrentSite(req):
    routesAndTheirNames = {
        "/": "home",
        "/explore": "explore",
        "/reels": "reels",
        "/messages": "messages"
    }

    if (req.path).lower() in routesAndTheirNames:
        return routesAndTheirNames[req.path]
    else:
        return "None"
    

def usernameValid(username):
    print(username + " ffj")
    usernameNotAllowedCharsRegex = r'[^a-zA-Z0-9\-_]'
    if len(username) <= 2 or len(username) > 30:
        return {
            "success":False,
            "message": "Username's length must be between 3-30 characters."
        }

    elif re.search(usernameNotAllowedCharsRegex, username):
        return {
            "success":False,
            "message": "Username can only contain letters (A-Z), number (0-9), hyphens (-) and dashes (_)."
        }

    
    else:
        return {
            "success":True,
        }


def passwordValid(password):
    passwordNotCharsRegex = r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$'

    if len(password) < 8:
        return {
            "success":False,
            "message": "Password's length must be more than 7 characters."
        }
    
    elif re.match(passwordNotCharsRegex, password) is None:
        return {
            "success":False,
            "message": "Password must include atleast 1 capital letter, 1 small letter, and 1 number."
        }
    
    else:
        return {
            "success":True
        }
        


def fullnameValid(fullname):

    fullNameRegex = r"^[A-Za-z]+(?:\s[A-Za-z]+)*$"

    if len(fullname) <= 0:
        return {
            "success":False,
            "message": "Full Name's length must be more than 0 characters."
        }
    
    elif re.match(fullNameRegex, fullname) is None:
        return {
            "success":False,
            "message": "Full name is not valid."
        }
    
    else: 
        return {
            "success":True
        }


def emailValid(email):
    emailRegex = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"

    if len(email) <= 0:
        return {
            "success":False,
            "message": "Email cant be empty."
        }
    
    elif re.match(emailRegex, email) is None:
        return {
            "success":False,
            "message": "Email is not valid."
        }
    
    else: 
        return {
            "success":True
        }


def usernameIsTaken(username):
    return False