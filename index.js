var express = require('express');
var app = express();

// Respond with a styled HTML page for requests that hit our root
app.get('/', function (req, res) {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome!</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f8ff;
          color: #333;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          text-align: center;
        }
        h1 {
          font-size: 3rem;
          color: #4CAF50;
        }
        p {
          font-size: 1.5rem;
          color: #555;
        }
        .message {
          background-color: #ffffff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
      </style>
    </head>
    <body>
      <div class="message">
        <h1>Welcome to the Express App!</h1>
        <p>jhal kahi tari</p>
      </div>
    </body>
    </html>
  `);
});

// Listen to port 3000 by default
app.listen(process.env.PORT || 3000, function () {
  console.log('App is running on port 3000');
});

module.exports = app;
