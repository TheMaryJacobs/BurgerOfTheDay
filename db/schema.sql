-- Write SQL queries that do the following:
--   * Create the `burgers_db`.
--   * Switch to or use the `burgers_db`.
--   * Create a `burgers` table with these fields:
--     * **id**: an auto incrementing int that serves as the primary key.
--     * **burger_name**: a string.
--     * **devoured**: a boolean.



DROP DATABASE IF EXISTS burgers_db;
-- Creates the burgers_db --
CREATE DATABASE burgers_db;

-- Causes all following code to use the burgers_db --
USE burgers_db;

-- Create the hamberders table in the burgers_db --
CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL ,
    devoured BOOLEAN DEFAULT false NOT NULL,
    createdAt DATETIME DEFAULT now() NOT NULL,
    updatedAt DATETIME DEFAULT now() NOT NULL,
    PRIMARY KEY(id)
)