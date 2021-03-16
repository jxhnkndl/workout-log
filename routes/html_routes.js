// Import modules
const path = require('path');
const db = require('../models');

// Export HTML router function
module.exports = (app) => {
  // Index route -> Render add_workout
  app.get('/', (req, res) => {
    res.status(200).render('add_workout');
  });

  // Add workout page -> Render add_workout
  app.get('/add_workout', (req, res) => {
    res.status(200).render('add_workout');
  });

  // View workouts page -> Render view_workouts with data from db
  app.get('/view_workouts', async (req, res) => {
    try {
      const data = await db.Workout.findAll({ raw: true });

      // Format returned data to pass into Handlebars
      const workouts = {
        workouts: data,
      };

      res.render('view_workouts', workouts);
    } catch {
      res.status(500).json({ success: false });
    }
  });
};
