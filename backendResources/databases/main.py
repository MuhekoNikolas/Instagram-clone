
import sqlite3 


def initDB():
    connection = sqlite3.connect("./backendResources/databases/instagramClone.sql")
    cursor = connection.cursor()
    
    return {"cursor":cursor, "connection":connection}