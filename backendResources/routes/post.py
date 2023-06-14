



def initPostRoutes(app):

    #Home
    @app.post("/")
    def mainPost():
        return "me"
