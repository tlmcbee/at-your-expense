import { useParams } from 'react-router-dom'
import ReportList from "../../components/ReportList/ReportList"
import ExpensesList from "../../components/ExpensesList/ExpensesList"
import ExpenseDetailView from "../../components/ExpenseDetailView/ExpenseDetailView"
import * as expensesAPI from '../../utilities/expenses-api'

export default function ExpenseDetailPage({getReportFromExpense}) {
  let { expenseId } = useParams()
  const report = getReportFromExpense(expenseId)
  if(!report) return null
  const expense = report.expenses.find(exp => exp._id === expenseId)
  console.log(expense)



  return (
    <>
    <main>
      <h1>{report.title}</h1>
      <ExpensesList expenses={report.expenses}/>
      <ExpenseDetailView expense={expense} />
    </main>
    </>
  )
}