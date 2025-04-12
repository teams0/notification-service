exports.sendNotification = (req, res) => {
    console.log('🔔 Notification:', req.body.message);
    res.send('Notification logged');
  };
  