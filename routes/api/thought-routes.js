const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtsById,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  createReaction,
  deleteReaction
} = require('../../controllers/thought-controller');

// GET and POST APIs for thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThoughts);

// GET, PUT and DELETE APIs for thoughts by id
router
  .route('/:id')
  .get(getThoughtsById)
  .put(updateThoughts)
  .delete(deleteThoughts);

  // POST API for reaction by id
router
    .route('/:thoughtId/reactions')
    .post(createReaction);


// DELETE API for reaction by id
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;