const express = require('express');
const axios = require('axios');  // We'll use axios to make HTTP requests
const app = express();

// Handle the /callback route for Discord OAuth2 flow
app.get('/callback', async (req, res) => {
  const code = req.query.code;  // Capture the authorization code from the query string
  
  // Prepare the data to send in the POST request to exchange the code for an access token
  const data = new URLSearchParams();
  data.append('client_id', '1258800359221100544');
  data.append('client_secret', '4Sje1kW-pU_W4wC3gRkGdQ_hjo80XrVq');
  data.append('code', code);
  data.append('grant_type', 'xX45HEt2PJ53K88gQsfdaRaKGBmsOY');
  data.append('redirect_uri', 'https://pretty-eminent-pyramid.glitch.me/callback');
  
  try {
    // Send the POST request to Discord's token endpoint
    const response = await axios.post('https://discord.com/api/oauth2/token', data, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    // The response contains the access token
    const { access_token, refresh_token, expires_in, token_type } = response.data;

    // You can now use the access token to make authorized API requests
    res.send(`Access token received: ${access_token}`);

    // You may also want to store the access token in a database or session for later use

  } catch (error) {
    console.error('Error exchanging authorization code for access token:', error);
    res.status(500).send('Error exchanging authorization code');
  }
});

// Handle the root route
app.get('/', (req, res) => {
  res.send('Bot is running!');
});

// Set the port to listen on
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
