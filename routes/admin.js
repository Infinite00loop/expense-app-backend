const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/get-user/:email', adminController.getUser);
router.post('/insert-user', adminController.insertUser);


module.exports = router;