const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config(); // Loads environment variables from .env file

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

const TOKEN = process.env.BOT_TOKEN; // Your bot token stored in .env file

// Event: Bot is ready
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Event: Message create
client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content === '!ping') {
    message.reply('Pong!');
  }
});

// Log in to Discord
client.login(TOKEN);
