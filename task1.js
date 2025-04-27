// 1-getallbooks.js

const express = require('express');
const app = express();
const port = 3000;

// Dummy books database
const books = {
    "9783161484100": {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        reviews: {}
    },
    "9780439139601": {
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        reviews: {}
    },
    "9780061120084": {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        reviews: {}
    }
};

// Route to get all books
app.get('/books', (req, res) => {
    res.status(200).json(books);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
