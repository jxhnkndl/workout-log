// Import Express
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

// Init Express
const app = express();

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

// Routes
require('./routes/api-routes.js')(app);

// Start listening
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
