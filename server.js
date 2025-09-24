const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 8080;

app.use(express.json());

const users = [];

app.post('/api/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username and password are required.' });
    }

    const userExists = users.find(user => user.username === username);
    if (userExists) {
        return res.status(409).json({ success: false, message: 'Username already taken.' });
    }

    const newUser = { username, password };
    users.push(newUser);
    
    console.log('Users:', users);

    res.status(201).json({ success: true, message: 'Registration successful! Please login.' });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username and password are required.' });
    }

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.status(200).json({ success: true, message: 'Login successful!' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid username or password.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running successfully on http://localhost:${PORT}`);
});