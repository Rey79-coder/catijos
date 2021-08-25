const router = require('express').Router();

const { 
  getAllThoughts,
  getThoughtById,
  createThought, 
  createReaction,
  removeReaction
 } = require('../../controllers/thought-controller');

// /api/thoughts/<thoughtId>
router
.route('/')
.get(getAllThoughts)
.post(createThought);

// /api/thoughts/:id
router
.route('/:thoughtId')
.get(getThoughtById);

// /api/thoughts/:userId/:thoughtId
router
.route('/:userId/:thoughtId')
.post(createReaction)
.delete(removeReaction)

module.exports = router;
