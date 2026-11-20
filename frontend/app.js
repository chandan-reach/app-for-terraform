const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const BACKEND_URL = process.env.BACKEND_URL || 'http://127.0.0.1:8000/process';

// Display the form
app.get('/', (req, res) => {
    res.render('index');
});

// Send form data to Flask
app.post('/submit', async (req, res) => {
    try {
        const response = await fetch(BACKEND_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });

        const result = await response.json();

        if (!response.ok) {
            return res.status(response.status).send(result);
        }

        res.render('index', { result });

    } catch (error) {
        console.error('Backend connection error:', error);
        res.status(500).send('Unable to connect to Flask backend.');
    }
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Frontend running on port 3000');
});
