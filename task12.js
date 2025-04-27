// 12-searchByAuthor.js

const express = require('express');
const app = express();
const port = 3011;

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

// Function to search books by Author
const searchBooksByAuthor = (author) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const booksByAuthor = Object.values(books).filter(book => book.author.toLowerCase() === author.toLowerCase());
            if (booksByAuthor.length > 0) {
                resolve(booksByAuthor);
            } else {
                reject({ message: "No books found by this author" });
            }
        }, 1000);
    });
};

// Route to search books by Author
app.get('/books/author/:author', async (req, res) => {
    const author = req.params.author;

    try {
        const booksByAuthor = await searchBooksByAuthor(author);
        res.status(200).json({ books: booksByAuthor });
    } catch (error) {
        res.status(404).json(error);
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
