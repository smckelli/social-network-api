const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/user-controller');

// GET and POST APIs for user
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// GET, PUT and DELETE APIs for user by id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// POST and DELETE APIs for user by id
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;