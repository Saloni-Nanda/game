const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;

// API endpoint that returns 404 error
app.get('/api/not-found', (req, res) => {
    res.status(404).json({
        error: 'Not Found',
        message: 'The requested resource was not found',
        status: 404
    });
});

// Another example: catch-all that returns 404 for unknown routes
app.use((req, res) => {
    res.status(404).json({
        error: 'Not Found',
        message: 'API endpoint not found',
        status: 404
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
