// 6-register.js

const express = require('express');
const app = express();
const port = 3005;

app.use(express.json());

// Dummy user database
let users = [];

// Route to register a new user
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Check if username already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
    }

    // Add new user
    users.push({ username, password });
    res.status(201).json({ message: "User registered successfully" });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
