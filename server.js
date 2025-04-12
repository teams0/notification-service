const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

app.post('/notifications', (req, res) => {
  console.log('🔔 Notification:', req.body.message);
  res.send('Notification logged');
});

mongoose.connect('mongodb+srv://Matheesha:math123@weddingplanner.crwciem.mongodb.net')
  .then(() => app.listen(5003, () => console.log('Category Service on 5003')))
  .catch(console.error);
