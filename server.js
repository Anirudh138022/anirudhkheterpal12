const express = require('express');
const app = express();

// Handle the root route
app.get('/', (req, res) => {
  res.send('Bot is running!');  // A simple message to confirm the bot is running
});

// Handle the /callback route for Discord OAuth2 flow
app.get('/callback', (req, res) => {
  const code = req.query.code;  // Capture the authorization code from the query string

  // You will typically exchange the code for an access token here
  res.send(`Authorization code received: ${code}`);
});

// Set the port to listen on
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
