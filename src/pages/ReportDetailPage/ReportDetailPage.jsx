import { useParams, useNavigate } from 'react-router-dom'
import * as reportsAPI from '../../utilities/reports-api'
import NewExpenseForm from '../../components/NewExpenseForm/NewExpenseForm'
import ExpensesList from '../../components/ExpensesList/ExpensesList'
import './ReportDetailPage.css'

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
    <main className='ReportDetailPage'>
      <div className={report.isPending || report.isApproved ? 'place-ctr':null} > 
    <h1>{report.title}</h1>
      <h4>Created on: {new Date(report.createdAt).toLocaleDateString()}</h4>
      <h6>Status: 
      {report.isPending ?
        <span style={{color: 'yellow'}}>Pending</span>
        :
        report.isApproved ?
        <span style={{color: 'green'}}>Approved</span>
        :
        <span>Waiting to Submit</span>
      }
      </h6>
      {user.isAdmin ?
      null
      :
        report.isApproved ?
          null 
          :
          <button onClick={removeReport}>Delete Report</button>
      }
      <ExpensesList expenses={report.expenses} />
      <div style={{display: 'flex'}} className='flex-spc-btw'>
      <label>Total:</label>
      ${report.expenseTotal.toFixed(2)}
      </div>
      </div>
      <div className='place-ctr'>            
        {user.isAdmin ? 
        null 
        :
        report.isPending ? 
          <button onClick={handleEditReport}>Edit Report</button> 
          :
          !report.isPending && report.isApproved ? 
            null
            :
            <button onClick={handleSubmitReport}>Submit Report</button>
          }
        </div>
      {report.isApproved ? 
        null
        :
        user.isAdmin ? 
          <div className='place-ctr'>
            <button onClick={approveReport}>Approve Report</button>
            <button onClick={denyReport}>Deny Report</button>
          </div>
          :
          <div className='span-right'>

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