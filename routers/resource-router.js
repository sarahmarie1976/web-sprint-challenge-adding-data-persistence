const express = require('express');
const router = express.Router();
const Resources = require('./resource-model');

router.get('/', (req, res) => {
    Resources.getResource()
    .then(resource => {
        res.status(201).json(resource);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Resources.findById(id)
    .then(Resource => {
      if (Resource) {
        res.json(Resource);
      } else {
        res.status(404).json({ message: 'Could not find a Resource with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get Resource' });
    });
  });

router.post('/', (req, res) => {
    Resources.addResource(req.body)
    .then(newResource => {
        res.status(201).json(newResource);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Resources.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find Resource with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete Resource' });
    });
  });

module.exports = router;