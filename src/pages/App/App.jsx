import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from '../../utilities/users-services';
import * as reportsAPI from '../../utilities/reports-api'
import NewReportPage from "../NewReportPage/NewReportPage";
import AuthPage from "../AuthPage/AuthPage";
import ReportDetailPage from '../ReportDetailPage/ReportDetailPage'
import NavBar from "../../components/NavBar/NavBar";

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

  return (
    <main className="App">
      {user ? 
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/reports" element={<NewReportPage reports={reports}/>} />
          <Route path="/reports/:reportId" element={<ReportDetailPage reports={reports} />} />
        </Routes>
      </>
      :
      <AuthPage setUser={setUser}/>}
    </main>
  );
}

export default App;
