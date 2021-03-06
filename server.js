// Import Express
const path = require("path");
const express = require("express");

// Init Express
const app = express();

// Config PORT
const PORT = process.env.PORT || 8080;

// Middleware for body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start listening
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});