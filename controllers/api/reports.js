const Report = require('../../models/report')

module.exports = {
  index,
  getReport,
  new: newReport,
  addToReport,
  delete: deleteReport
}

async function index(req, res) {
  const reports = await Report.find({})
  res.json(reports)
}

async function getReport(req, res) {
  const report = await Report.getReport(req.user._id)
  res.json(report)
}

async function newReport(req, res) {
  try {
    const report = await Report.create(req.body)
    res.json(report)
  } catch(err) {
    res.status(400).json(err)
  }
}

async function addToReport(req, res) {
  console.log(req.body)
  console.log(req.params.id)
  const report = await Report.findById(req.params.id)
  report.expenses.push(req.body)
  try {
    await report.save()
    res.json(report)
  } catch(err){
    console.log(err)
    res.status(400).json(err)
 }
}

async function deleteReport(req, res) {
  try{
  const report = await Report.findOneAndDelete({ _id: req.params.id, user: req.user.id})
  res.json(report)
 } catch(err){
  console.log(err)
  res.status(400).json(err)
 }
}