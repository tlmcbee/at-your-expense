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

  async function handleSubmitReport() {
    const updatedReport = await reportsAPI.submitReport(report._id)
    updateReport(updatedReport)
  }

  async function handleEditReport() {
    const updatedReport = await reportsAPI.editReport(report._id)
    updateReport(updatedReport)
  }

  

  return (
    <>
    <main>
      <h1>{report.title}</h1>
      <button onClick={removeReport}>Delete Report</button>
      <ExpensesList expenses={report.expenses} />
      <label>Total:</label>
      ${report.expenseTotal}
      {report.isPending ? 
      <button onClick={handleEditReport}>Edit Report</button> :
      <button onClick={handleSubmitReport}>Submit Report</button>}
       {report.isPending ? null : <NewExpenseForm report={report} updateReport={updateReport} /> }
    </main>
    </>
  )
}