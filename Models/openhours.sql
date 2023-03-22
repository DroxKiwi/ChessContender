CREATE TABLE IF NOT EXISTS openhours (
    openhour_id serial PRIMARY KEY,
    day varchar(15) NOT NULL,
    state varchar(15) NOT NULL,
    maxguests int NOT NULL,
    openhour int NOT NULL,
    closehour int NOT NULL
)