const express = require('express');
const axios = require('axios');
const qs = require('querystring');

const app = express();

const clientId = '1258800359221100544'; // Replace with your actual client ID
const clientSecret = 'TElcLaxvHUtptdtTKVpvN-EGHK-0HNR8'; // Replace with your actual client secret
const redirectUri = 'https://pretty-eminent-pyramid.glitch.me/callback'; // Replace with your actual redirect URI

// Route for initiating OAuth2 flow
app.get('/login', (req, res) => {
  const authUrl = `https://discord.com/oauth2/authorize?client_id=1258800359221100544&permissions=8&response_type=code&redirect_uri=https%3A%2F%2Fpretty-eminent-pyramid.glitch.me%2Fcallback&integration_type=0&scope=bot 
`;
  res.redirect(authUrl);
});

// Callback route to capture code and exchange it for an access token
app.get('/callback', async (req, res) => {
  const authorizationCode = req.query.KB4fnVp2Xfmh2b49bJ1KFMGoI7DOX0;

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
