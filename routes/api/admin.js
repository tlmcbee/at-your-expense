const express = require('express');
const router = express.Router();
const ensureAdmin = require('../../config/ensureAdmin')
const adminCtrl = require('../../controllers/api/admin')

router.get('/admin', ensureAdmin, adminCtrl.index)

module.exports = router