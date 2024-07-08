import re
import os
from dotenv import load_dotenv
from .classes import GMAIL

load_dotenv()  # Load environment variables from .env file

# Initialize GMAIL instance with credentials from environment variables
myMail = GMAIL(os.environ.get('Google_Mail'), os.environ.get('Google_Mail_Password'))
myMail.login()  # Log into the email account

def getCurrentSite(req):
    """
    Get the current site name based on the request path.

    Args:
        req: The request object containing the path.

    Returns:
        str: The name of the site corresponding to the path, or "None" if not found.
    """
    routesAndTheirNames = {
        "/": "home",
        "/explore": "explore",
        "/reels": "reels",
        "/messages": "messages"
    }

    return routesAndTheirNames.get(req.path.lower(), "None")

def usernameValid(username):
    """
    Validate the given username.

    Args:
        username (str): The username to validate.

    Returns:
        dict: A dictionary with a success flag and a message if validation fails.
    """
    usernameNotAllowedCharsRegex = r'[^a-zA-Z0-9\-_]'
    
    if len(username) <= 2 or len(username) > 30:
        return {
            "success": False,
            "message": "Username's length must be between 3-30 characters."
        }
    elif re.search(usernameNotAllowedCharsRegex, username):
        return {
            "success": False,
            "message": "Username can only contain letters (A-Z), numbers (0-9), hyphens (-), and underscores (_)."
        }
    else:
        return {"success": True}

def passwordValid(password):
    """
    Validate the given password.

    Args:
        password (str): The password to validate.

    Returns:
        dict: A dictionary with a success flag and a message if validation fails.
    """
    passwordNotCharsRegex = r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$'

    if len(password) < 8:
        return {
            "success": False,
            "message": "Password's length must be more than 7 characters."
        }
    elif re.match(passwordNotCharsRegex, password) is None:
        return {
            "success": False,
            "message": "Password must include at least 1 capital letter, 1 small letter, and 1 number."
        }
    else:
        return {"success": True}

def fullnameValid(fullname):
    """
    Validate the given full name.

    Args:
        fullname (str): The full name to validate.

    Returns:
        dict: A dictionary with a success flag and a message if validation fails.
    """
    fullNameRegex = r"^[A-Za-z]+(?:\s[A-Za-z]+)*$"

    if len(fullname) <= 0:
        return {
            "success": False,
            "message": "Full Name's length must be more than 0 characters."
        }
    elif re.match(fullNameRegex, fullname) is None:
        return {
            "success": False,
            "message": "Full name is not valid."
        }
    else:
        return {"success": True}

def emailValid(email):
    """
    Validate the given email address.

    Args:
        email (str): The email address to validate.

    Returns:
        dict: A dictionary with a success flag and a message if validation fails.
    """
    emailRegex = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"

    if len(email) <= 0:
        return {
            "success": False,
            "message": "Email can't be empty."
        }
    elif re.match(emailRegex, email) is None:
        return {
            "success": False,
            "message": "Email is not valid."
        }
    else:
        return {"success": True}

def usernameIsTaken(username):
    """
    Check if the given username is already taken.

    Args:
        username (str): The username to check.

    Returns:
        bool: False, as this is a placeholder function. Will update this when working on the account creation parts of the project.
    """
    return False  # Placeholder function, always returns False, will update this when I begin working on the account creation parts of this project.
