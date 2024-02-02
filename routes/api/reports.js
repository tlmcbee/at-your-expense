const express = require('express');
const router = express.Router();
const upload = require('multer')()
const reportsCtrl = require('../../controllers/api/reports')

router.get('/', reportsCtrl.index)
router.get('/:id', reportsCtrl.getReport)
router.post('/new', reportsCtrl.new)
router.post('/:id/expenses', upload.single('file'), reportsCtrl.addToReport)
router.delete('/:id', reportsCtrl.delete)
router.post('/:id/submit-report', reportsCtrl.submitReport)
router.post('/:id/edit-report', reportsCtrl.editReport)
router.post('/:id/approve-report', reportsCtrl.approved)
router.post('/:id/deny-report', reportsCtrl.denied)

module.exports = router