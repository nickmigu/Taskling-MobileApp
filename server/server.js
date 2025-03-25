const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Mock user data
const users = [
  { id: 1, name: 'User 1', email: 'user1@example.com' },
  { id: 2, name: 'User 2', email: 'user2@example.com' },
];

// Mock posts data
const posts = [
  { id: 1, title: 'Post 1', body: 'This is the first post.' },
  { id: 2, title: 'Post 2', body: 'This is the second post.' },
];

// Define routes
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
