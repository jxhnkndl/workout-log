// Import models
const db = require('../models');

// API routes
module.exports = (app) => {
  // TEST JSON
  app.get('/api/workouts', (req, res) => {
    db.Workout.findAll({}).then((dbWorkout) => res.json(dbWorkout));
  });

  // TEST HTML
  app.get('/', (req, res) => {
    res.send('JOGLOGGER: COMING SOON');
  });
};