DROP TABLE IF EXISTS places;
DROP TABLE IF EXISTS cities;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE cities (
  id SERIAL PRIMARY KEY NOT NULL,
  city VARCHAR(255),
  lat VARCHAR(255),
  lng VARCHAR(255),
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE places (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  address VARCHAR(255),
  lat VARCHAR(255),
  lng VARCHAR(255),
  rating VARCHAR(255),
  picture VARCHAR(1000),
  placeId VARCHAR(255),
  city_id INTEGER REFERENCES cities(id) ON DELETE CASCADE
);