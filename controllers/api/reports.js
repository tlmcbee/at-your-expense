const Report = require('../../models/report')

module.exports = {
  index,
  new: newReport
}

async function index(req, res) {
  const reports = await Report.find({})
  res.json(reports)
}

async function newReport(req, res) {
  try {
    const report = await Report.create(req.body)
    res.json(report)
  } catch(err) {
    res.status(400).json(err)
  }
}