import sqlite3

def initDB():
    """
    Initialize the SQLite database connection and cursor.

    Returns:
        dict: A dictionary containing the database cursor and connection objects.
    """
    connection = sqlite3.connect("./backendResources/databases/instagramClone.sql")
    cursor = connection.cursor()
    
    return {"cursor": cursor, "connection": connection}
