const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Sample posts
const posts = [
  {id: 1, title: "First Post", date: "2025-10-17", content: "This is the content of the first post."},
  {id: 2, title: "Second Post", date: "2025-10-17", content: "This is the content of the second post."}
];

app.use('/public', express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});
app.get('/post/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'post.html'));
});
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
