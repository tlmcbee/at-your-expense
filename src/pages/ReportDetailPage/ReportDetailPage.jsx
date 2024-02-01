import { useParams, useNavigate } from 'react-router-dom'
import * as reportsAPI from '../../utilities/reports-api'
import NewExpenseForm from '../../components/NewExpenseForm/NewExpenseForm'
import ExpensesList from '../../components/ExpensesList/ExpensesList'


export default function ReportDetailPage({ getReport, deleteReport, updateReport }) {
  let { reportId } = useParams()
  let report = getReport(reportId)
  const navigate = useNavigate()
  if(!report) return null


  async function removeReport() {

    await reportsAPI.removeReport(report._id)
    deleteReport(report._id)
    navigate('/reports')
  }

  return (
    <>
    <main>
      <h1>{report.title}</h1>
      <button onClick={removeReport}>Delete Report</button>
      <ExpensesList expenses={report.expenses} />
      <NewExpenseForm report={report} updateReport={updateReport} /> 
    </main>
    </>
  )
}