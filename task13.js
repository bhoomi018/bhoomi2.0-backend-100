// 13-searchByTitle.js

const express = require('express');
const app = express();
const port = 3012;

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

// Function to search books by Title
const searchBooksByTitle = (title) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const booksByTitle = Object.values(books).filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
            if (booksByTitle.length > 0) {
                resolve(booksByTitle);
            } else {
                reject({ message: "No books found with this title" });
            }
        }, 1000);
    });
};

// Route to search books by Title
app.get('/books/title/:title', async (req, res) => {
    const title = req.params.title;

    try {
        const booksByTitle = await searchBooksByTitle(title);
        res.status(200).json({ books: booksByTitle });
    } catch (error) {
        res.status(404).json(error);
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
