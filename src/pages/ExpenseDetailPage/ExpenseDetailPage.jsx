import { useParams, useNavigate } from 'react-router-dom'
import ReportList from "../../components/ReportList/ReportList"
import ExpensesList from "../../components/ExpensesList/ExpensesList"
import ExpenseDetailView from "../../components/ExpenseDetailView/ExpenseDetailView"
import * as expensesAPI from '../../utilities/expenses-api'

export default function ExpenseDetailPage({getReportFromExpense, deleteExpense}) {
  let { expenseId } = useParams()
  const report = getReportFromExpense(expenseId)
  const navigate = useNavigate()
  if(!report) return null
  const expense = report.expenses.find(exp => exp._id === expenseId)

  function showExpenseForm() {
    navigate(`/reports/${report._id}`)
  }

  async function removeExpense(){
    const updatedReport = await expensesAPI.removeExpense(expense._id)
    deleteExpense(updatedReport)
    navigate(`/reports/${updatedReport._id}`)
  }

  return (
    <>
    <main>
      <h1>{report.title}</h1>
      <ExpensesList expenses={report.expenses}/>
      <button onClick={showExpenseForm}>Add Expense</button>
      <ExpenseDetailView expense={expense} />
      <button>Update Expense</button>
    <button onClick={removeExpense}>Delete Expense</button>
    </main>
    </>
  )
}