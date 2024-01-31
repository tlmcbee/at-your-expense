const Report = require('../../models/report')

module.exports = {
  getExpense,
}

async function getExpense(req, res) {
  const report = await Report.findById(req.params.id)
  const expense = await report.expenses.findById(req.params.id)
  console.log(expense)
  res.json(expense)
}