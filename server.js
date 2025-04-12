const express = require('express');
const app = express();

app.use(express.json());

app.post('/notifications', (req, res) => {
  console.log('🔔 Notification:', req.body.message);
  res.send('Notification logged');
});

app.listen(5003, () => console.log('Notification Service on 5003'));
