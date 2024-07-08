import yagmail
import random
import uuid
import json

class GMAIL:
    """
    A class to handle Gmail operations using yagmail.
    """

    def __init__(self, email, password):
        """
        Initialize the GMAIL object with email and password.

        Args:
            email (str): The Gmail address.
            password (str): The Gmail account password.
        """
        self.email = email 
        self.password = password 
        self.isLoggedIn = False  # Track login status

    def login(self):
        """
        Log in to the Gmail account using yagmail.
        """
        if self.isLoggedIn:
            return
        self.yag = yagmail.SMTP(self.email, self.password)  # Initialize yagmail SMTP
        self.isLoggedIn = True  # Set login status to True

    def send(self, to, body, subject):
        """
        Send an email using the logged-in Gmail account.

        Args:
            to (str): The recipient's email address.
            body (str): The body of the email.
            subject (str): The subject of the email.
        """
        self.yag.send(to=to, subject=subject, contents=body)  # Send an email

class User:
    """
    A class to represent a user.
    """

    def __init__(self, username, fullName, email, pfp="/static/images/pfp.png"):
        """
        Initialize the User object.

        Args:
            username (str): The user's username.
            fullName (str): The user's full name.
            email (str): The user's email address.
            pfp (str, optional): The path to the user's profile picture. Defaults to "/static/images/pfp.png".
        """
        self.user_id = str(uuid.uuid4())  # Generate a unique user ID
        self.username = username
        self.displayName = fullName or username.capitalize()  # Set display name
        self.email = email
        self.pfp = pfp  # Profile picture path
        self.posts = []  # Initialize empty list for posts
        self.followers = []  # Initialize empty list for followers
        self.following = []  # Initialize empty list for following
        self.badges = []  # Initialize empty list for badges
        self.verified = False  # Verification status
        self.email_verified = False  # Email verification status

    def __repr__(self):
        """
        Return a JSON representation of the User object.

        Returns:
            str: JSON representation of the user's attributes.
        """
        return json.dumps(self.__dict__)  # Return JSON representation of the user

class Secret:
    """
    A class to represent a secret, such as a password hash.
    """

    def __init__(self, password_hash):
        """
        Initialize the Secret object.

        Args:
            password_hash (str): The hashed password.
        """
        self.password_hash = password_hash  # Store password hash
