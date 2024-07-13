const express = require('express');
const path = require('path');
const questions = require('./index.js'); // Import questions from index.js
const app = express();
const port = process.env.PORT || 3004;


// Middleware to serve static files
app.use(express.static(path.join(__dirname)));

// Endpoint to get random AWS questions
app.get('/api/random-aws-questions', (req, res) => {
    try {
        if (!questions || !Array.isArray(questions)) {
            throw new Error('Questions data is not an array or is undefined.');
        }
        const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
        const randomQuestions = shuffledQuestions.slice(0, 20);
        res.json(randomQuestions);
    } catch (error) {
        console.error('Error getting random questions:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});