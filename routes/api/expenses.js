const express = require('express');
const router = express.Router();
const expensesCtrl = require('../../controllers/api/expenses')

router.get('/expenses/:expenseId', expensesCtrl.getExpense)

module.exports = router