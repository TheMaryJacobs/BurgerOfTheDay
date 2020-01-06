-- write queries to populate the burgers table with at least three entries

--  Run the `schema.sql` and `seeds.sql` files into the mysql server from the command line
USE burgers_db;
INSERT INTO burgers (burger_name)
VALUES ("You Feta Believe It");

INSERT INTO burgers (burger_name)
VALUES ("Pepper Don't Preach");

INSERT INTO burgers (burger_name)
VALUES ("Poblano Picasso");