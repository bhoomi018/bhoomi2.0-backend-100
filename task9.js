// 9-deletereview.js

const express = require('express');
const app = express();
const port = 3008;

app.use(express.json());

// Dummy books database
const books = {
    "9783161484100": {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        reviews: {
            "user1": "Amazing classic!",
            "user2": "Loved the storytelling!"
        }
    },
    "9780439139601": {
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        reviews: {}
    }
};

// Route to delete book review by a specific user
app.delete('/books/review/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const { username } = req.body;

    const book = books[isbn];

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    if (!book.reviews[username]) {
        return res.status(404).json({ message: "Review not found" });
    }

    // Delete the review
    delete book.reviews[username];

    res.status(200).json({ message: "Review deleted successfully", reviews: book.reviews });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
