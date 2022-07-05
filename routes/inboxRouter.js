const express = require('express');
const { inboxGet } = require('../controllers/inboxController');
const router = express.Router();


// inbox route
router.get('/', inboxGet);




module.exports = router;
