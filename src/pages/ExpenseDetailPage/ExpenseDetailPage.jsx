import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ExpensesList from "../../components/ExpensesList/ExpensesList"
import ExpenseDetailView from "../../components/ExpenseDetailView/ExpenseDetailView"
import ExpenseUpdateForm from '../../components/ExpenseUpdateForm/ExpenseUpdateForm'
import * as expensesAPI from '../../utilities/expenses-api'

export default function ExpenseDetailPage({getReportFromExpense, updateReport, }) {
  let { expenseId } = useParams()
  const report = getReportFromExpense(expenseId)
  const [displayUpdateForm, setDisplayUpdateForm] = useState(false)
  const navigate = useNavigate()
  if(!report) return null
  const expense = report.expenses.find(exp => exp._id === expenseId)

  function showExpenseForm() {
    navigate(`/reports/${report._id}`)
  }

  async function removeExpense(){
    const updatedReport = await expensesAPI.removeExpense(expense._id)
    updateReport(updatedReport)
    navigate(`/reports/${updatedReport._id}`)
  }

  function showUpdateForm() {
    setDisplayUpdateForm(true)
  }

  return (
    <>
      <main>
        <h1>{report.title}</h1>
        <ExpensesList expenses={report.expenses}/>
        {report.isPending ? null : <button onClick={showExpenseForm}>Back to Report</button>}
        {displayUpdateForm ? 
          <ExpenseUpdateForm expense={expense} setDisplayUpdateForm={setDisplayUpdateForm} updateReport={updateReport}/>
          :
          <ExpenseDetailView expense={expense} />}
        {report.isPending || displayUpdateForm  ? 
          null 
          :
          <button onClick={showUpdateForm}>Update Expense</button>
        }
        {report.isPending || displayUpdateForm ? 
          null 
          :
          <button onClick={removeExpense}>Delete Expense</button>
        }
      </main>
    </>
  )
}