-- Set up database
DROP DATABASE IF EXISTS workouts_db;
CREATE DATABASE workouts_db;
USE workouts_db;

-- Create workouts table
CREATE TABLE workouts (
  id INT NOT NULL AUTO_INCREMENT,
  workout_date DATE NOT NULL,
  category VARCHAR(50),
  distance VARCHAR(50),
  duration VARCHAR(50),
  details TEXT,
  completed BOOLEAN DEFAULT 0,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);