import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from '../../utilities/users-services';
import * as reportsAPI from '../../utilities/reports-api'
import * as adminAPI from '../../utilities/admin-api'
import NewReportPage from "../NewReportPage/NewReportPage";
import AuthPage from "../AuthPage/AuthPage";
import ReportDetailPage from '../ReportDetailPage/ReportDetailPage'
import NavBar from "../../components/NavBar/NavBar";
import ExpenseDetailPage from "../ExpenseDetailPage/ExpenseDetailPage";
import ReportList from "../../components/ReportList/ReportList";
import AdminViewPage from '../../pages/AdminViewPage/AdminViewPage'


function App() {
  const [user, setUser] = useState(getUser())
  const [reports, setReports] = useState([])
  useEffect(function() {
    async function getAllUserReports() {
      const allUserReports = await reportsAPI.getAllReports()
      setReports(allUserReports)
    }
    getAllUserReports()

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
        <NavBar user={user} setUser={setUser}  />
          <aside>
            <ReportList reports={reports} user={user} />
          </aside>

        <Routes>
          <Route path="/admin" element={<AdminViewPage reports={reports} setReports={setReports} updateReport={updateReport} getAllReports={adminAPI.getAllReports} />} />
          <Route path="/reports" element={<NewReportPage addReport={addReport} user={user}/>} />
          <Route path="/reports/:reportId" element={<ReportDetailPage getReport={getReport} deleteReport={deleteReport} updateReport={updateReport} user={user}/>} />
          <Route path="/expenses/:expenseId" element={<ExpenseDetailPage  getReportFromExpense={getReportFromExpense} updateReport={updateReport} user={user} />} />
        </Routes>
      </>
      :
      <AuthPage setUser={setUser} updateReport={updateReport}/>}
    </main>
  );
}

export default App;
