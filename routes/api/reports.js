const express = require('express');
const router = express.Router();
const reportsCtrl = require('../../controllers/api/reports')

router.get('/', reportsCtrl.index)
router.get('/:id', reportsCtrl.getReport)
router.post('/new', reportsCtrl.new)
router.post('/:id/expenses', reportsCtrl.addToReport)

module.exports = router