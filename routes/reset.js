const express = require('express');

const router = express.Router();

const resetController = require('../controllers/reset');
const userauthentication = require('../middleware/auth');

router.post('/forgotpassword', resetController.forgotpassword);

module.exports = router;