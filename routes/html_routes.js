// Import modules
const path = require("path");
const db = require("../models");

// Export HTML router
module.exports = (app) => {
  // Index route
  app.get("/", (req, res) => {
    res.status(200).render("add_workout");
  });

  // Add workout page
  app.get("/add_workout", (req, res) => {
    res.status(200).render("add_workout");
  });

  // View workouts page
  app.get("/view_workouts", async (req, res) => {
    try {
      const data = await db.Workout.findAll({ raw: true });
      // Format data for passing into Handlebars
      const workouts = {
        workouts: data,
      };
      res.render("view_workouts", workouts);
    } catch {
      res.status(500).json({ success: false });
    }
  });
};
