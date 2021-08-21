const router = require('express').Router();

const { 
//   getThought,
  addThought, 
//   deleteThought,
  addReaction,
  removeReaction
 } = require('../../controllers/thought-controller');

// /api/comments/<thoughtId>
router
.route('/:thoughtId')
// .get(getThought)
.post(addThought);
// .delete(deleteThought);

// /api/thoughts/:userId/:thoughtId
router
.route('/:userId/:thoughtId')
.post(addReaction)
.delete(removeReaction)

// /api/thoughts/:userId/:thoughtId/:reactionId
router
.route('/thoughts/:userId/:thoughtId/:reactionId')
.delete(removeReaction);


module.exports = router;