const express = require('express');

const router = express.Router();

const premiumController = require('../controllers/premium');
const userauthentication = require('../middleware/auth');


router.get('/get-leaderboard', premiumController.getleaderboard);
router.get('/yearlyreport',userauthentication.authenticate, premiumController.getyearlyreport);
router.get('/monthlyreport',userauthentication.authenticate, premiumController.getmonthlyreport);



module.exports = router;