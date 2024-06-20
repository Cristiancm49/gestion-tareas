CREATE DATABASE tasksList;

CREATE TABLE task(
    id SERIAL PRIAMRY KEY,
    title VARCHAR(255) UNIQUE,
    descripcion VARCHAR(255)
);
