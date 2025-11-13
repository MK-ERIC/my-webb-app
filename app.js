const express = require('express');
const app = express();

// Existing routes...

// Homepage route
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

module.exports = app;
