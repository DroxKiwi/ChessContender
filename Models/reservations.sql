CREATE TABLE IF NOT EXISTS reservations (
    reservation_id serial PRIMARY KEY,
    email varchar(256) NOT NULL,
    guests int NOT NULL,
    dateres varchar(15) NOT NULL,
    hourres int NOT NULL,
    allergy varchar(256)
)