// Import models
const db = require('../models');

// Import paths
const path = require("path");

// API routes
module.exports = (app) => {
  // TEST JSON
  app.get('/api/workouts', (req, res) => {
    db.Workout.findAll({}).then((dbWorkout) => res.json(dbWorkout));
  });

  // TEST HTML
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
};