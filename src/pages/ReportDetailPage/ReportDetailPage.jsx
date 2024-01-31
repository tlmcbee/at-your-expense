import { useState } from 'react'
import { useParams } from 'react-router-dom'
import * as reportsAPI from '../../utilities/reports-api'
import ReportList from '../../components/ReportList/ReportList'
import NewExpenseForm from '../../components/NewExpenseForm/NewExpenseForm'
import ExpensesList from '../../components/ExpensesList/ExpensesList'


export default function ReportDetailPage({ getReport}) {
  let { reportId } = useParams()
  let report = getReport(reportId)
  if(!report) return null


  return (
    <>
    <main>
      <h1>{report.title}</h1>
      <ExpensesList expenses={report.expenses} />
      <NewExpenseForm report={report}/> 
    </main>
    </>
  )
}