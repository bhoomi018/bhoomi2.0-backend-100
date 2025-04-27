// 3-getbooksbyauthor.js

const express = require('express');
const app = express();
const port = 3002;

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
    },
    "9780747532743": {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        reviews: {}
    }
};

// Route to get all books by an author
app.get('/books/author/:author', (req, res) => {
    const author = req.params.author.toLowerCase();
    const matchingBooks = {};

    for (let isbn in books) {
        if (books[isbn].author.toLowerCase() === author) {
            matchingBooks[isbn] = books[isbn];
        }
    }

    if (Object.keys(matchingBooks).length > 0) {
        res.status(200).json(matchingBooks);
    } else {
        res.status(404).json({ message: "No books found for this author" });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
