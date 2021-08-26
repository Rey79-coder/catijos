// easier-to-read code  // 

const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    createFriend,
    deleteFriend
  } = require('../../controllers/user-controller');

// /api/users   /  ALL USERS  
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// /api/users/:id   /  PER ID
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);


// /api/users/:userId/friends/:friendId  /  PER ID
router
.route('/users/friends/:id')
.post(createFriend)
.delete(deleteFriend);

module.exports = router;