const express = require('express');
const notificationRoutes = require('./routes/notificationRoutes');
const app = express();

app.use(express.json());
app.use('/api', notificationRoutes);

app.listen(5003, () => console.log('Notification Service on 5003'));
