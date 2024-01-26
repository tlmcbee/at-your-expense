const express = require('express');
const router = express.Router();
const reportsCtrl = require('../../controllers/api/reports')

router.get('/', reportsCtrl.index)
router.post('/new', reportsCtrl.new)

module.exports = router