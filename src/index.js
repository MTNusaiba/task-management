const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasks'); // import router

app.use(express.json());

// main route
app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});

// use router
app.use('/', tasksRouter);

// health route
app.get('/health', (req, res) => {
  res.json({ status: "healthy", uptime: process.uptime() });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
