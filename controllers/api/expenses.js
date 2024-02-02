const uploadFile = require('../../config/upload-file')
const Report = require('../../models/report')

module.exports = {
  getExpense,
  delete: deleteExpense,
  update
}

async function getExpense(req, res) {
  const report = await Report.findById(req.params.id)
  const expense = await report.expenses.findById(req.params.id)
  console.log(expense)
  res.json(expense)
}

async function deleteExpense(req, res) {
  try {
  const report = await Report.findOne({'expenses._id': req.params.expenseId})
  report.expenses.remove(req.params.expenseId)
  await report.save()
  res.json(report)
  } catch(err) {
    console.log(err)
    res.status(400).json(err)
  }
}

async function update(req, res) {
  try {
    const report = await Report.findOne({'expenses._id': req.params.expenseId})
    const expenseSubDoc = report.expenses.id(req.params.expenseId)
    if(req.file) {
      const expenseRefFile = await uploadFile(req.file)
      expenseSubDoc.title = req.body.title
      expenseSubDoc.date = req.body.date
      expenseSubDoc.expenseType = req.body.expenseType
      expenseSubDoc.description = req.body.description
      expenseSubDoc.amount = req.body.amount
      expenseSubDoc.refFile = expenseRefFile
    } else {
      expenseSubDoc.title = req.body.title
      expenseSubDoc.date = req.body.date
      expenseSubDoc.expenseType = req.body.expenseType
      expenseSubDoc.description = req.body.description
      expenseSubDoc.amount = req.body.amount
    }
    await report.save()
    res.json(report)
  } catch(err) {
    console.log(err)
    res.status(400).json(err)
  }
}