// Import models
const db = require("../models");

// Import paths
const path = require("path");

// Export API router function
module.exports = (app) => {
  // API -> Get all workouts from db
  app.get("/api/workouts", async (req, res) => {
    try {
      const result = await db.Workout.findAll({ raw: true });
      res.status(200).json({ success: false, data: result });
    } catch {
      res.status(500).json({ success: false });
    }
  });

  // API -> Add new workout to db
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

  // API -> Delete workout from db
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

  // API -> Update workout's completed status in db
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
