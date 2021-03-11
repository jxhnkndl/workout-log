// Import models
const db = require('../models');

// Import paths
const path = require("path");

// Export API router
module.exports = (app) => {
  // TEST JSON
  app.get('/api/workouts', (req, res) => {
    db.Workout.findAll({}).then((dbWorkout) => res.json(dbWorkout));
  });
};