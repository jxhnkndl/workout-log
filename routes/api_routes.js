// Import models
const db = require("../models");

// Import paths
const path = require("path");

// Export API router
module.exports = (app) => {
  // Get all workouts
  app.get("/api/workouts", async (req, res) => {
    try {
      const result = await db.Workout.findAll({ raw: true });
      res.status(200).json({ success: false, data: result });
    } catch {
      res.status(500).json({ success: false });
    }
  });

  // Add new workout
  app.post("/api/workouts", async (req, res) => {
    try {
      const result = await db.Workout.create(req.body);
      res.status(201).json({
        success: true,
        data: result.dataValues,
      });
    } catch {
      res.status(500).json({ success: false });
    }
  });

  // Delete workout
  app.delete("/api/workouts/", async (req, res) => {
    try {
      const result = await db.Workout.destroy({
        where: {
          id: req.body.id,
        },
      });
      res.json({ success: true });
    } catch {
      res.status(500).json({ success: false });
    }
  });

  // Update workout's completed status
  app.put("/api/workouts/", async (req, res) => {
    try {
      const result = await db.Workout.update(
        { completed: req.body.completed },
        { where: { id: req.body.id } }
      );
      res.status(200).json({ success: true });
    } catch {
      res.status(500).json({ success: false });
    }
  });
};
