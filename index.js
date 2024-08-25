const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON requests

// POST method for /bfhl route
app.post('/bfhl', (req, res) => {
    const data = req.body.data;

    // Separate numbers and alphabets
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestLowercaseAlphabet = alphabets.filter(item => /[a-z]/.test(item)).sort().pop() || "";

    // Respond with the required format
    res.json({
        is_success: true,
        user_id: "aditya-guntupalli_01032004",
        email: "adityaguntupalli1978@gmail.com",
        roll_number: "21BCE7962",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    });
});

// GET method for /bfhl route
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
