const { Client, GatewayIntentBits } = require('discord.js');  // Import Discord.js
const express = require('express');  // Import Express
const app = express();  // Create an Express app

// Create a new Discord client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the bot is ready, log a message
client.once('ready', () => {
    console.log('Bot is online!');
});

// Log in to Discord using your bot token
client.login('MTI1ODgwMDM1OTIyMTEwMDU0NA.GQm-mQ.tAnfaklHsSPEfhA2bWIy-5vmYpSxu6b3IW58As');  // Replace with your bot's token

// Create a route for the Express web server
app.get('/', (req, res) => {
    res.send('Bot is running!');  // Respond with a message
});

// Make the web server listen on a port
const PORT = process.env.PORT || 3000;  // Use the port provided by Glitch or fallback to 3000
app.listen(PORT, () => {
    console.log(`Web server is running on port ${PORT}`);
});
