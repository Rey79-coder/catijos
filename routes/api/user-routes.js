// easier-to-read code  // 

const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
  } = require('../../controllers/user-controller');

// /api/users   /  ALL USERS  
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// /api/users/:id   /   PER ID
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

module.exports = router;