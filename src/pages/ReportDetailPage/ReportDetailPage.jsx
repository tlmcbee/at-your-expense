import { useParams, useNavigate } from 'react-router-dom'
import * as reportsAPI from '../../utilities/reports-api'
import NewExpenseForm from '../../components/NewExpenseForm/NewExpenseForm'
import ExpensesList from '../../components/ExpensesList/ExpensesList'

export default function ReportDetailPage({ getReport, deleteReport, updateReport, user }) {
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

  async function approveReport() {
    const approvedReport = await reportsAPI.approveReport(report._id)
    updateReport(approvedReport)
 
  }
  async function denyReport() {
    const deniedReport = await reportsAPI.denyReport(report._id)
    updateReport(deniedReport)
  }

  return (
    <>
    <main>
      <h1>{report.title}</h1>
      {report.isApproved ?
        null 
        :
        <button onClick={removeReport}>Delete Report</button>
      }
      <ExpensesList expenses={report.expenses} />
      <label>Total:</label>
      ${report.expenseTotal}
      {report.isApproved ? 
        null
        :
        user.isAdmin ? 
          <div>
            <button onClick={approveReport}>Approve Report</button>
            <button onClick={denyReport}>Deny Report</button>
          </div>
          :
          <div>
            {report.isPending ? 
              <button onClick={handleEditReport}>Edit Report</button> 
              :
              <button onClick={handleSubmitReport}>Submit Report</button>
              }
            {report.isPending ? 
              null 
              : 
              <NewExpenseForm report={report} updateReport={updateReport} /> 
            }
          </div>
      }
    </main>
    </>
  )
}