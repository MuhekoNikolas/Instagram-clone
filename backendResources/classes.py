

import yagmail
import random
import uuid
import json

class GMAIL:
    def __init__(self, email, password):
        self.email = email 
        self.password = password 

        self.isLoggedIn = False

    def login(self):
        if self.isLoggedIn == True:
            return
        self.yag = yagmail.SMTP(self.email, self.password)
        self.isLoggedIn = True


    def send(self, to, body, subject):
        self.yag.send(to=to, subject=subject, contents=body)


class User:
    def __init__(self, username, fullName, email, pfp="/static/images/pfp.png"):
        self.user_id = str(uuid.uuid4())
        self.username = username
        self.displayName = fullName or username.capitalize()
        self.email = email
        self.pfp = pfp
        self.posts = []
        self.followers = []
        self.following = []
        self.badges = []
        self.verified = False
        self.email_verified = False

    def __repr__(self):
        return json.dumps(self.__dict__)

class Secret:
    def __init__(self, password_hash):
        self.password_hash = password_hash