const express = require('express');

const router = express.Router();

const premiumController = require('../controllers/premium');
const userauthentication = require('../middleware/auth');

router.get('/get-leaderboard', premiumController.getleaderboard);


module.exports = router;