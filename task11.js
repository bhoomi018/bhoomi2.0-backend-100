// 11-searchISBN.js

const express = require('express');
const app = express();
const port = 3010;

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

// Function to search book by ISBN using Promises
const searchBookByISBN = (isbn) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const book = books[isbn];
            if (book) {
                resolve(book);
            } else {
                reject({ message: "Book not found" });
            }
        }, 1000);
    });
};

// Route to search book by ISBN
app.get('/books/:isbn', async (req, res) => {
    const isbn = req.params.isbn;

    try {
        const book = await searchBookByISBN(isbn);
        res.status(200).json({ book });
    } catch (error) {
        res.status(404).json(error);
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
