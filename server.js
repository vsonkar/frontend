const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle form submission
app.post('/submit', async (req, res) => {
    const { name, age } = req.body;
    try {
        const response = await axios.post('http://backend:5000/submit', { name, age });
        res.send(`<h2>${response.data}</h2>`);
    } catch (error) {
        res.status(500).send('Error: Unable to reach backend service.');
    }
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Frontend listening on port ${PORT}`);
});
