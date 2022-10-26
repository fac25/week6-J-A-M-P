BEGIN; 

CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    title TEXT,
    author TEXT, 
    genre TEXT,
    price INTEGER,
    blurb TEXT,
    src TEXT 
);

COMMIT; 