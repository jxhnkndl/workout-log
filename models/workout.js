// Define Workout model
module.exports = (sequelize, DataTypes) => {
  const Workout = sequelize.define('Workout', {
    workout_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    category: DataTypes.STRING,
    distance: DataTypes.STRING,
    duration: DataTypes.STRING,
    details: DataTypes.TEXT,
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  return Workout;
};