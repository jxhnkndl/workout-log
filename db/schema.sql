-- Set up database
DROP DATABASE IF EXISTS workouts_db;
CREATE DATABASE workouts_db;
USE workouts_db;

-- Workouts table
CREATE TABLE workouts (
  id INT NOT NULL AUTO_INCREMENT,
  workout_date DATE NOT NULL,
  category VARCHAR(50),
  distance DECIMAL(10,2),
  duration INT,
  details TEXT,
  completed BOOLEAN,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);