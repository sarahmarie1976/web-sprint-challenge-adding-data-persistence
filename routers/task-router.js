const express = require('express');
const router = express.Router();
const tasks = require('./task-model');

router.get('/', (req, res) => {
    tasks.getTask()
    .then(task => {
        res.status(201).json(task);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    tasks.findById(id)
    .then(task => {
      if (task) {
        res.json(task);
      } else {
        res.status(404).json({ message: 'Could not find a task with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get task' });
    });
  });

router.post('/', (req, res) => {
    tasks.addTask(req.body)
    .then(newTask => {
        res.status(201).json(newTask);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    tasks.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find task with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete task' });
    });
  });

module.exports = router;