const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route for adding two numbers (GET request)
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send('Invalid parameters');
        return;
    }

    const result = num1 + num2;
    res.send(`The result of ${num1} + ${num2} is ${result}`);
});

// Route for subtracting two numbers (POST request)
app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send('Invalid parameters');
        return;
    }

    const result = num1 - num2;
    res.send(`The result of ${num1} - ${num2} is ${result}`);
});

// Route for multiplication (POST request)
app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send('Invalid parameters');
        return;
    }

    const result = num1 * num2;
    res.send(`The result of ${num1} * ${num2} is ${result}`);
});

// Route for division (POST request)
app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body;

    if (isNaN(num1) || isNaN(num2) || num2 === 0) {
        res.status(400).send('Invalid parameters');
        return;
    }

    const result = num1 / num2;
    res.send(`The result of ${num1} / ${num2} is ${result}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
