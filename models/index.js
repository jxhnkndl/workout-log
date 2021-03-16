// Import modules
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

// Define configuration variables used to initialize Sequelize
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];
const db = {};
let sequelize;

// Determine which environment the application is running in
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
    {
      timestamps: false,
    },
  );
}

// Add each model from the models directory to the db object
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

// Establish any associations that exist between models
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Add Sequelize constructor and sequelize instance to models object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Export the models object
module.exports = db;
