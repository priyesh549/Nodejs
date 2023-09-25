const express = require('express');
const cookieParser = require('cookie-parser'); // Import the cookie-parser middleware
const app = express();

// Set up a simple in-memory storage for chat messages
const chatMessages = [];

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Use the cookie-parser middleware

// Serve the login page
app.get("/login", (req, res) => {
  res.send('<form action="/chat" method="POST"><input id="username" type="text" name="username" placeholder="Enter your username"><button type="submit">Login</button></form>');
});

// Handle login and redirect to the chat page
app.post("/chat", (req, res) => {
  const username = req.body.username;
  // Store the username in a cookie for future requests
  res.cookie('username', username);
  res.redirect('/chat');
});

// Serve the chat page
app.get("/chat", (req, res) => {
  // Retrieve the username from the cookie
  const username = req.cookies.username;

  // Display the chat form and messages
  const chatForm = `
    <form action="/send" method="POST">
      <input type="text" name="message" placeholder="Type your message here">
      <button type="submit">Send</button>
    </form>
  `;

  const messagesList = chatMessages.map((message) => `<p>${message.sender}: ${message.text}</p>`).join('');

  res.send(`<h1>Welcome, ${username}!</h1>${chatForm}<div>${messagesList}</div>`);
});

// Handle sending chat messages
app.post("/send", (req, res) => {
  const username = req.cookies.username;
  const message = req.body.message;

  // Add the message to the chatMessages array
  chatMessages.push({ sender: username, text: message });

  // Redirect back to the chat page
  res.redirect('/chat');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
