// Importing the necessary libraries
const { Client, GatewayIntentBits } = require('discord.js');  // For Discord bot
const express = require('express');  // For keeping the bot alive
const app = express();  // Create an Express app

// Create a new Discord client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,  // Allows the bot to access guilds
        GatewayIntentBits.GuildMessages,  // Allows the bot to access messages
        GatewayIntentBits.MessageContent,  // Allows the bot to read message content
    ]
});

// When the bot is ready, log a message
client.once('ready', () => {
    console.log('Bot is online!');
});

// Log in to Discord using your bot's token
client.login('MTI1ODgwMDM1OTIyMTEwMDU0NA.GQm-mQ.tAnfaklHsSPEfhA2bWIy-5vmYpSxu6b3IW58As');  // Replace with your actual bot token

// Set up the Express server
app.get('/', (req, res) => {
    res.send('Bot is running!');  // Respond with this message when the URL is accessed
});

// Set the port to either the one provided by Glitch or 3000
const PORT = process.env.PORT || 3000;

// Start the Express server to keep the bot alive
app.listen(PORT, () => {
    console.log(`Web server is running on port ${PORT}`);
});
