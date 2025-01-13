CREATE DATABASE bookDB;

-- create table book
CREATE TABLE book(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(20),
    description VARCHAR(255),
);

-- insert data
INSERT INTO book(id, name, description) VALUES('1', 'book1', 'book1 description');