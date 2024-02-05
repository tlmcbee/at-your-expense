const Report = require('../../models/report')

module.exports = {
  index
}

async function index(req, res) {
  const allReports = await Report.find({})
  res.json(allReports)
}