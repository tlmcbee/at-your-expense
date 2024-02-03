const Report = require('../../models/report')

module.exports = {
  index
}

async function index(req, res) {
  const allReports = await Report.find({})
  console.log('is this working')
  res.json(allReports)
}