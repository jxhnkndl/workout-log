// Import path
const path = require('path');

// Export HTML router
module.exports = (app) => {
  // Index route
  app.get('/', (req, res) => {
    res.status(200).render('add_workout');
  });

  // Add workout page
  app.get('/add_workout', (req, res) => {
    res.status(200).render('add_workout');
  });

  // View workouts page
  app.get('/view_workouts', (req, res) => {
    res.status(200).render('view_workouts');
  });
}