const express = require('express');
const { usersGet } = require('../controllers/usersControllers');
const avatarUpload = require('../middlewares/users/avatarUpload');
const router = express.Router();


// get users
router.get('/users', usersGet);
// post user data
router.post('/create-account', avatarUpload);




module.exports = router;
