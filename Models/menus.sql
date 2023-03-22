CREATE TABLE IF NOT EXISTS menus (
    menu_id serial PRIMARY KEY,
    type varchar(256) NOT NULL,
    title varchar(256) NOT NULL,
    description varchar(256) NOT NULL,
    price float NOT NULL
)