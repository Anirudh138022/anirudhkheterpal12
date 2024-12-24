const { Client, GatewayIntentBits } = require('discord.js'); // Import Discord.js
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent, // Ensure message content access
  ] 
});

// Your bot's token (replace with your bot's actual token)
const botToken = 'MTI1ODgwMDM1OTIyMTEwMDU0NA.Glcx_I.Lf-Kpmhn8AhmCAcUaPN6fMoFiWtTtJKU5fjYpM';

// Ready event - bot is successfully logged in and ready
client.once('ready', () => {
  console.log('Bot is logged in and ready!');
});

// Message event - when a message is sent in a server
client.on('messageCreate', (message) => {
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
  // You can add more commands here
});

// Login the bot using its token
client.login(botToken);
