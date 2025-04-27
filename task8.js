// 8-reviewadded.js

const express = require('express');
const app = express();
const port = 3007;

app.use(express.json());

// Dummy books database
const books = {
    "9783161484100": {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        reviews: {
            "user1": "Amazing classic!"
        }
    },
    "9780439139601": {
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        reviews: {}
    }
};

// Route to add or modify book review
app.put('/books/review/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const { username, review } = req.body;

    const book = books[isbn];

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    // Add or modify review
    book.reviews[username] = review;

    res.status(200).json({ message: "Review added/modified successfully", reviews: book.reviews });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
