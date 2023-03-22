CREATE TABLE IF NOT EXISTS contacts (
    user_id int,
    type varchar(80),
    message varchar(500),
    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
)