// Import path
const path = require('path');

// Export HTML router
module.exports = (app) => {
  // Index route
  app.get('/', (req, res) => {
    res.render('add_workout');
  });
}