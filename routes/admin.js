const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

// router.get('/get-cricket/:name', adminController.getCricket);
router.post('/insert-user', adminController.insertUser);
// router.put('/update-cricket/:id',adminController.updateCricket);


module.exports = router;