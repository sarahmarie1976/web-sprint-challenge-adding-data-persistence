const express = require('express');
const router = express.Router();
const Projects = require('./project-model');

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(project => {
        res.status(201).json(project);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Projects.findById(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: 'Could not find a project with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get project' });
    });
  });

router.post('/', (req, res) => {
    Projects.addProjects(req.body)
    .then(newProject => {
        res.status(201).json(newProject);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Projects.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find project with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete project' });
    });
  });

module.exports = router;