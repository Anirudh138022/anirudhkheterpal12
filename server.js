const express = require('express');
const axios = require('axios');
const qs = require('querystring');

const app = express();

// Step 1: Your bot credentials (Replace with actual values)
const clientId = 'YOUR_CLIENT_ID';
const clientSecret = 'YOUR_CLIENT_SECRET';
const redirectUri = 'http://localhost:3000/callback';  // Your redirect URI (must match the one in Discord Developer Portal)

// Step 2: Login route to send users to Discord's authorization page
app.get('/login', (req, res) => {
  // This will redirect the user to Discord's authorization page
  const authUrl = `https://discord.com/oauth2/authorize?client_id=${clientId}&scope=bot+identify&response_type=code&redirect_uri=${redirectUri}`;
  res.redirect(authUrl);
});

// Step 3: Callback route to capture the authorization code and exchange it for an access token
app.get('/callback', async (req, res) => {
  const authorizationCode = req.query.code;  // Capture the 'code' from the URL query parameter

  if (!authorizationCode) {
    return res.status(400).send('Authorization code not found.');
  }

  try {
    // Step 4: Exchange authorization code for an access token
    const tokenResponse = await axios.post(
      'https://discord.com/api/v10/oauth2/token',
      qs.stringify({
        client_id: clientId,
        client_secret: TElcLaxvHUtptdtTKVpvN-EGHK-0HNR8,
        code: KB4fnVp2Xfmh2b49bJ1KFMGoI7DOX0,  // The code captured from the URL
        grant_type: 'authorization_code',
        redirect_uri: redirectUri, // Must match the one used in the OAuth2 URL
        scope: 'identify',  // Scopes you requested (here we're using 'identify' for user info)
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',  // Required for POST requests
        },
      }
    );

    // Step 5: Successful response, extract the access token
    const accessToken = tokenResponse.data.access_token;
    console.log('Access Token:', accessToken);

    // Send the access token as a response or use it to make API requests to Discord
    res.send(`Access token received: ${accessToken}`);

  } catch (error) {
    console.error('Error exchanging authorization code for access token:', error);
    res.status(500).send('Error exchanging code for access token.');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
