const uploadFile = require('../../config/upload-file')
const Report = require('../../models/report')

module.exports = {
  index,
  getReport,
  new: newReport,
  addToReport,
  delete: deleteReport,
  submitReport,
  editReport,
  approved,
  denied
}

async function index(req, res) {
  const reports = await Report.find({user: req.user._id})
  res.json(reports)
}

async function getReport(req, res) {
  const report = await Report.getReport(req.user._id)
  res.json(report)
}

async function newReport(req, res) {
  req.body.user = req.user._id
  try {
    console.log(req.body)
    const report = await Report.create(req.body)
    res.json(report)
  } catch(err) {
    res.status(400).json(err)
  }
}

async function addToReport(req, res) {
  const report = await Report.findById(req.params.id)
  try {
    if(req.file) {
      const expenseRefFile = await uploadFile(req.file)
      report.expenses.push({
        title: req.body.title,
        date: req.body.date,
        expenseType: req.body.expenseType,
        description: req.body.description,
        amount: req.body.amount,
        refFile: expenseRefFile
    })
  } else {
    report.expenses.push(req.body)
  }
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

async function submitReport(req, res) {
  try {
  const report = await Report.findById(req.params.id)
  report.isPending = true
  await report.save()
  res.json(report)
  } catch(err) {
    console.log(err)
    res.status(400).json(err)
  }
}

async function editReport(req, res) {
  try {
  const report = await Report.findById(req.params.id)
  report.isPending = false
  await report.save()
  res.json(report)
  } catch(err) {
    console.log(err)
    res.status(400).json(err)
  }
}

async function approved(req, res) {
  try {
    const report = await Report.findById(req.params.id)
    report.isApproved = true
    await report.save()
    res.json(report)
  } catch(err) {
    res.status(400).json(err)
  }
}

async function denied(req, res) {
  try {
    const report = await Report.findById(req.params.id)
    report.isPending = false
    await report.save()
    res.json(report)
  } catch(err) {
    res.status(400).json(err)
  }
}