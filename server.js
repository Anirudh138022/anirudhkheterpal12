const express = require('express');
const app = express();

// Keep the bot alive and respond to requests
app.get('/', (req, res) => {
  res.send('Bot is running!');
});

// Ensure you're using the dynamic port
const port = process.env.PORT || 3000;  // Use Glitch's dynamic port or fallback to 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
