

def getCurrentSite(req):
    routesAndTheirNames = {
        "/": "home",
        "/search": "search",
        "/explore": "explore",
        "/reels": "reels",
        "/messages": "messages",
        "/notifications": "notifications",
        "/create": "create"
    }

    if (req.path).lower() in routesAndTheirNames:
        return routesAndTheirNames[req.path]
    else:
        return "None"