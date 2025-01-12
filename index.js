const express = require('express');
const app = express();  
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}.`);
});

// Get / books -> return all the books
// Get / books /: id -> return a single book
// Post / books -> add a new book
// Put / books /: id -> update a book
// Delete / books /: id -> delete a book



