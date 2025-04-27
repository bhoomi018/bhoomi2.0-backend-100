// 5-getbookreview.js

const express = require('express');
const app = express();
const port = 3004;

// Dummy books database
const books = {
    "9783161484100": {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        reviews: {
            "user1": "Amazing classic!",
            "user2": "Loved the storytelling."
        }
    },
    "9780439139601": {
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        reviews: {
            "user3": "Magical and thrilling."
        }
    },
    "9780061120084": {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        reviews: {
            "user4": "Very touching story."
        }
    }
};

// Route to get book reviews by ISBN
app.get('/books/review/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const book = books[isbn];

    if (book) {
        res.status(200).json(book.reviews);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
