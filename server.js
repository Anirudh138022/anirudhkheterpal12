const express = require('express');
const app = express();

// Root endpoint
app.get('/', (req, res) => {
  res.send('Bot is alive!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
