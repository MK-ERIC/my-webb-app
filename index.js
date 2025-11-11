const express = require('express');
const app = express();

// Existing routes
app.get('/', (req, res) => {
  res.send('Home Page');
});

// New /about route
app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(3000, () => console.log('Server running on port 3000'));
