const { Client, GatewayIntentBits } = require('discord.js');

// Create a new instance of the Discord client
const client = new Client({ 
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

// Token for your Discord bot
const token = 'MTI1ODgwMDM1OTIyMTEwMDU0NA.Glcx_I.Lf-Kpmhn8AhmCAcUaPN6fMoFiWtTtJKU5fjYpM'; // Replace this with your actual bot token

// When the bot is ready, log it
client.once('ready', () => {
  console.log('Bot is ready!');
});

// Handling messages from the server
client.on('messageCreate', (message) => {
  if (message.content === 'ping') {
    message.reply('Pong!');
  }
});

// Log the bot in using the token
client.login(token);


