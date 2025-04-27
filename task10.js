// 10-getallbooks.js

const express = require('express');
const app = express();
const port = 3009;

app.use(express.json());

// Dummy books database
const books = {
    "9783161484100": {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald"
    },
    "9780439139601": {
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling"
    },
    "9780439139595": {
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "J.K. Rowling"
    }
};

// Async callback function to get all books
const getAllBooks = async (callback) => {
    try {
        // Simulate async operation
        setTimeout(() => {
            callback(null, books);  // Returning the books database
        }, 1000);
    } catch (error) {
        callback(error, null);
    }
};

// Route to get all books
app.get('/books', async (req, res) => {
    getAllBooks((err, data) => {
        if (err) {
            res.status(500).json({ message: "Error fetching books", error: err });
        } else {
            res.status(200).json({ books: data });
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
