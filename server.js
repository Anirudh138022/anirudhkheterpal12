const axios = require('axios');
const qs = require('querystring');  // To properly format the body of the request

app.get('/callback', async (req, res) => {
  const authorizationCode = req.query.code; // The code from the URL query parameter

  if (!authorizationCode) {
    return res.status(400).send('Authorization code not found.');
  }

  try {
    // Exchange the authorization code for an access token
    const tokenResponse = await axios.post(
      'https://discord.com/api/v10/oauth2/token', // Discord API endpoint to exchange code for token
      qs.stringify({
        client_id: '1258800359221100544',            // Your Discord bot's client ID
        client_secret: 'YOUR_CLIENT_SECRET',    // Your Discord bot's client secret
        code: authorizationCode,                // The authorization code you received
        grant_type: 'authorization_code',       // Always use 'authorization_code' grant type
        redirect_uri: 'https://pretty-eminent-pyramid.glitch.me/callback',      // The same redirect URI used in the Discord Developer Portal
        scope: 'identify',                      // Specify the scope, for example 'identify' to get user info
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',  // Required for POST requests with URL-encoded data
        },
      }
    );

    // The access token is returned in the response
    const accessToken = tokenResponse.data.access_token;

    // Send the access token as a response (or use it for further actions)
    res.send(`Access token received: ${accessToken}`);

    console.log('Access Token:', accessToken);

    // Now you can use the access token to interact with the Discord API, for example:
    // You can use it to get the user info or perform actions on their behalf.

  } catch (error) {
    console.error('Error exchanging authorization code for access token:', error);
    res.status(500).send('Error exchanging code for access token.');
  }
});
