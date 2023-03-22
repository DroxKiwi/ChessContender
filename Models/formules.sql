CREATE TABLE IF NOT EXISTS formules (
    formule_id serial PRIMARY KEY,
    title varchar(256) NOT NULL,
    period varchar(256) NOT NULL,
    description varchar(256) NOT NULL,
    price float NOT NULL
)