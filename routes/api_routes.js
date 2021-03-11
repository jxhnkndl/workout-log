// Import models
const db = require('../models');

// Import paths
const path = require('path');

// Export API router
module.exports = (app) => {
  // Get all workouts
  app.get('/api/workouts', (req, res) => {
    db.Workout.findAll({}).then((dbWorkout) => res.json(dbWorkout));
  });

  // Add new workout
  app.post('/api/workouts', (req, res) => {
    const { date, category, distance, duration, details } = req.body;

    db.Workout.create(req.body, (result) => {
      res.status(201).json({
        success: true,
        id: result.insertId
      });
    });
  });
};
