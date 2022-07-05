const express = require('express');
const { loginGet } = require('../controllers/loginController');
const router = express.Router();


// login page route
router.get('/', loginGet);




module.exports = router;
