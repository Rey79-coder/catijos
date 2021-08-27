// easier-to-read code  // 

const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
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


// /api/users/:userId/:thougthId
router
.route('/:userId/friends/:userId')
.post(addFriend)
.delete(removeFriend)


module.exports = router;