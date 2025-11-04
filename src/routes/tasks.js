const express = require('express');
const router = express.Router();

// sample tasks data
const tasks = [
  { id: 1, title: 'Learn Node.js', completed: false, priority: 'high', createdAt: new Date() },
  { id: 2, title: 'Build REST API', completed: false, priority: 'medium', createdAt: new Date() },
  { id: 3, title: 'Test with Postman', completed: true, priority: 'low', createdAt: new Date() },
  { id: 4, title: 'Document API', completed: false, priority: 'medium', createdAt: new Date() },
  { id: 5, title: 'Push to GitHub', completed: false, priority: 'high', createdAt: new Date() }
];

// GET /tasks - all tasks
router.get('/tasks', (req, res) => {
  res.json(tasks);
});

// GET /task/:id - single task
router.get('/task/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json(task);
});

module.exports = router;
