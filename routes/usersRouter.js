const express = require('express');
const { usersGet } = require('../controllers/usersControllers');
const router = express.Router();


// get users
router.get('/', usersGet);





module.exports = router;
