const express = require('express');
const app = express();  
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
        res.status(200).json({ message: `Specific book is returned with id : ${id}`, id });
    } catch (error) {
        res.send({ error: error.message });
    }
});
// Post / books -> add a new book
app.post('/books', async (req, res) => {
    try {
        const { name, description } = req.body;
        res.status(201).json({ message: `Book was created : ${name}, ${description}` });
    } catch (error) {
        res.send({ error: error.message });
    }
});
// Put / books /: id -> update a book
app.put('/books/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        res.status(200).json({ message: `Book was updated with id : ${id}, ${name}, ${description}` });
    } catch (error) {
        res.send({ error: error.message });
    }
});
// Delete / books /: id -> delete a book
app.delete('/books/:id', async (req, res) => {
    try {
        const { id } = req.params;
        res.status(200).json({ message: `Book was deleted with id : ${id}` });
    } catch (error) {
        res.send({ error: error.message });
    }
});
// CRUD -> Create, Read, Update, Delete
