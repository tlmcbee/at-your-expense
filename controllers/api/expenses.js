const Report = require('../../models/report')

module.exports = {
  getExpense,
  delete: deleteExpense
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