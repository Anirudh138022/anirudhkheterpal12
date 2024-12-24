const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Ready event: this is where you confirm that the bot has logged in successfully
client.once('ready', () => {
  console.log('Bot is online!');
});

// Log in with your bot token
client.login('MTI1ODgwMDM1OTIyMTEwMDU0NA.Glcx_I.Lf-Kpmhn8AhmCAcUaPN6fMoFiWtTtJKU5fjYpM');  // Replace with your actual bot token
