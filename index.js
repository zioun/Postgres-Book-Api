const express = require('express');
const app = express();  
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

// Get / books -> return all the books
app.get('/books', async (req, res) => {
    try {
        res.status(200).json({ message: 'All books returned' });
    } catch (error) {
        res.send({ error: error.message });
    }
});
// Get / books /: id -> return a single book
app.get('/books/:id', async (req, res) => {
    try {
        const { id } = req.params;
        res.status(200).json({ message: `Specific book is returned with id ${id}`, id });
    } catch (error) {
        res.send({ error: error.message });
    }
});
// Post / books -> add a new book
// Put / books /: id -> update a book
// Delete / books /: id -> delete a book
