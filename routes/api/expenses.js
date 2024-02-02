const express = require('express');
const router = express.Router();
const upload = require('multer')()
const expensesCtrl = require('../../controllers/api/expenses')

router.get('/expenses/:expenseId', expensesCtrl.getExpense)
router.delete('/expenses/:expenseId', expensesCtrl.delete)
router.put('/expenses/:expenseId', upload.single('file'), expensesCtrl.update)

module.exports = router