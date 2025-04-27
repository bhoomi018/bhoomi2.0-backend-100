// 7-login.js

const express = require('express');
const app = express();
const port = 3006;

app.use(express.json());

// Dummy user database
let users = [
    { username: "bhoomi", password: "mypassword" }  
];

// Route to login user
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.status(200).json({ message: "Login successful" });
    } else {
        res.status(401).json({ message: "Invalid username or password" });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
