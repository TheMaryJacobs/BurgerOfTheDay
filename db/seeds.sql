-- write queries to populate the burgers table with at least three entries

--  Run the `schema.sql` and `seeds.sql` files into the mysql server from the command line
USE burgers_db;
INSERT INTO burgers (burger_name, devoured, createdAt, updatedAt)
VALUES ("You Feta Believe It", false, now(), now());

INSERT INTO burgers (burger_name, devoured, createdAt, updatedAt)
VALUES ("Pepper Don't Preach", false, now(), now());

INSERT INTO burgers (burger_name, devoured, createdAt, updatedAt)
VALUES ("Poblano Picasso", false, now(), now());