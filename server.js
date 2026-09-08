const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// In-memory database array for demo
let tasks = [
    { id: 1, text: "Complete GitHub setup" }
];

// Route 1: Get all tasks
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

// Route 2: Add a new task
app.post('/api/tasks', (req, res) => {
    const newTask = {
        id: Date.now(),
        text: req.body.text
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});