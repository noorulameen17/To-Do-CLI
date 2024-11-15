'use strict';

// Importing the 'fs' module for file system operations
const fs = require('fs');

// Importing the 'path' module for handling and transforming file paths
const path = require('path');

// Importing Sequelize ORM for database operations
const Sequelize = require('sequelize');

// Importing the 'process' module to access environment variables
const process = require('process');

// Getting the base name of the current file
const basename = path.basename(__filename);

// Setting the environment variable for the application
const env = process.env.NODE_ENV || 'development';

// Importing the configuration for the current environment
const config = require(path.join(__dirname, '/../config/config.json'))[env];

// Initializing an empty object to store database models
const db = {};

// Initializing Sequelize instance based on environment configuration
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Reading all files in the current directory and importing them as Sequelize models
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Setting up associations between models if defined
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Adding Sequelize instance and Sequelize library to the db object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Exporting the db object containing all models and Sequelize instance
module.exports = db;