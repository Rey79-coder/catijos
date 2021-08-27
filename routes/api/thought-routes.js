const router = require('express').Router();

const { 
  getAllThoughts,
  getThoughtById,
  createThought, 
  updateThought,
  deleteThought
 } = require('../../controllers/thought-controller');


// /api/thoughts/   /// CR  ALL THOUGHTS
router
.route('/')
.get(getAllThoughts)
.post(createThought);

// /api/thoughts/:id   ///  RUD THOUGHTS PER ID
router
.route('/:id')   
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

module.exports = router;