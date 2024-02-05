import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ExpensesList from "../../components/ExpensesList/ExpensesList"
import ExpenseDetailView from "../../components/ExpenseDetailView/ExpenseDetailView"
import ExpenseUpdateForm from '../../components/ExpenseUpdateForm/ExpenseUpdateForm'
import * as expensesAPI from '../../utilities/expenses-api'
import './ExpenseDetailPage.css'

export default function ExpenseDetailPage({getReportFromExpense, updateReport, user }) {
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
      <main className='ExpenseDetailPage'>
        <div>
        <h2>{report.title}</h2>
        <ExpensesList expenses={report.expenses}/>
        <button onClick={showExpenseForm}>Back to Report</button>
        </div>
        <div className='span-right'>
          {displayUpdateForm ? 
            <ExpenseUpdateForm expense={expense} setDisplayUpdateForm={setDisplayUpdateForm} updateReport={updateReport}/>
            :
            <ExpenseDetailView expense={expense} />}
          {user.isAdmin ?
            null 
            :
            report.isPending || displayUpdateForm  ? 
              null 
              :
              <div>
                <button onClick={showUpdateForm}>Update Expense</button>
                <button onClick={removeExpense}>Delete Expense</button>
              </div>
          }
        </div>
      </main>
    </>
  )
}