import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from '../../utilities/users-services';
import * as reportsAPI from '../../utilities/reports-api'
import NewReportPage from "../NewReportPage/NewReportPage";
import AuthPage from "../AuthPage/AuthPage";
import ReportDetailPage from '../ReportDetailPage/ReportDetailPage'
import NavBar from "../../components/NavBar/NavBar";
import ExpenseDetailPage from "../ExpenseDetailPage/ExpenseDetailPage";
import ReportList from "../../components/ReportList/ReportList";

function App() {
  const [user, setUser] = useState(getUser())
  const [reports, setReports] = useState([])
  useEffect(function() {
    async function getAllReports() {
      const allReports = await reportsAPI.getAllReports()
      setReports(allReports)
    }
  
    getAllReports()
  }, [])

  function getReportFromExpense(expenseId) {
    return reports.find(report => report.expenses.some(expense => expense._id === expenseId))
  }

  function getReport(reportId) {
    return reports.find(report => report._id === reportId)
  }

  function addReport(report) {
    setReports([...reports, report])
  }

  function deleteReport(reportId) {
    setReports(reports.filter(report => report._id !== reportId))
  }

  function updateReport(newReport) {
    const reportsCopy = [...reports]
    const repIdx = reportsCopy.findIndex(rep => rep._id === newReport._id)
    reportsCopy[repIdx] = newReport
    setReports(reportsCopy)
  }
  
  return (
    <main className="App">
      {user ? 
      <>
        <NavBar user={user} setUser={setUser} />

        {user._id === user || user.isAdmin ?
        <aside>
          <ReportList reports={reports} />
        </aside> :
        null}
        <Routes>
          <Route path="/reports" element={<NewReportPage addReport={addReport} />} />
          <Route path="/reports/:reportId" element={<ReportDetailPage getReport={getReport} deleteReport={deleteReport} updateReport={updateReport}/>} />
          <Route path="/expenses/:expenseId" element={<ExpenseDetailPage  getReportFromExpense={getReportFromExpense} updateReport={updateReport} />} />
        </Routes>
      </>
      :
      <AuthPage setUser={setUser}/>}
    </main>
  );
}

export default App;
