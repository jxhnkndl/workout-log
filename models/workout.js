module.exports = (sequelize, DataTypes) => {
  const Workout = sequelize.define("Workout", {
    workout_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    category: DataTypes.STRING,
    distance: DataTypes.DECIMAL(10, 2),
    duration: DataTypes.INTEGER,
    details: DataTypes.TEXT,
  });

  return Workout;
};