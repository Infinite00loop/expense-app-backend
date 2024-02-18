const express = require('express');

const router = express.Router();

const expenseController = require('../controllers/expense');
const userauthentication = require('../middleware/auth');

router.get('/get-expense',userauthentication.authenticate, expenseController.getExpense);
router.post('/insert-expense',userauthentication.authenticate, expenseController.insertExpense);
router.delete('/delete-expense/:id',userauthentication.authenticate, expenseController.deleteExpense);

module.exports = router;