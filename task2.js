// 2-getdetailsISBN.js

const express = require('express');
const app = express();
const port = 3001;

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

// Route to get book based on ISBN
app.get('/books/isbn/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const book = books[isbn];

    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
