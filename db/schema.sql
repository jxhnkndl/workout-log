-- Set up database
DROP DATABASE IF EXISTS workout_db;
CREATE DATABASE workout_db;
USE workout_db;

-- Workouts table
CREATE TABLE workouts (
  id INT NOT NULL AUTO_INCREMENT,
  workout_date DATE NOT NULL,
  category VARCHAR(50),
  distance DECIMAL(10,2),
  duration INT,
  details TEXT,
  PRIMARY KEY (id)
);