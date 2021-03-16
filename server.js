// Import modules
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// Init Express
const app = express();

// Import models
const db = require('./models');

// Config PORT
const PORT = process.env.PORT || 8080;

// Serve public front-end assets to browser
app.use(express.static('public'));

// Middleware for body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Config Handlebars as application template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import HTML and API routes
require('./routes/html_routes.js')(app);
require('./routes/api_routes.js')(app);

// Sync database and start server
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}.`);
  });
});