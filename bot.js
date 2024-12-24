const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ 
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] 
});

const token = 'MTI1ODgwMDM1OTIyMTEwMDU0NA.Glcx_I.Lf-Kpmhn8AhmCAcUaPN6fMoFiWtTtJKU5fjYpM';  // Ensure this token is correct

client.login(token);
