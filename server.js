const express = require('express');
const axios = require('axios');
const qs = require('querystring');

const app = express();

const clientId = 'YOUR_CLIENT_ID'; // Replace with your actual client ID
const clientSecret = 'YOUR_CLIENT_SECRET'; // Replace with your actual client secret
const redirectUri = 'http://localhost:3000/callback'; // Replace with your actual redirect URI

// Route for initiating OAuth2 flow
app.get('/login', (req, res) => {
  const authUrl = `https://discord.com/oauth2/authorize?client_id=${clientId}&scope=bot+identify&response_type=code&redirect_uri=${https://pretty-eminent-pyramid.glitch.me/callback} 
`;
  res.redirect(authUrl);
});

// Callback route to capture code and exchange it for an access token
app.get('/callback', async (req, res) => {
  const authorizationCode = req.query.code;

  if (!authorizationCode) {
    return res.status(400).send('Authorization code not found.');
  }

  try {
    const tokenResponse = await axios.post(
      'https://discord.com/api/v10/oauth2/token',
      qs.stringify({
        client_id: clientId,
        client_secret: clientSecret,  // Ensure this is the correct client secret
        code: authorizationCode,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
        scope: 'identify',  // You can adjust scopes as needed
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const accessToken = tokenResponse.data.access_token;
    console.log('Access Token:', accessToken);
    res.send(`Access token received: ${accessToken}`);

  } catch (error) {
    console.error('Error exchanging authorization code for access token:', error);
    res.status(500).send('Error exchanging code for access token.');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
