import { useState } from 'react'
import NewReportForm from '../../components/NewReportForm/NewReportForm'

export default function NewReportPage({ reports, addReport, user }) {
  const [showForm, setShowForm] = useState(false)

  function handleClick() {
    setShowForm(!showForm)
  }

  return (
    <main>
      <h1>New Report Page</h1>
      <form>
      <button type="button" onClick={handleClick}>Create new Report</button>
      </form>
       {showForm ? <NewReportForm addReport={addReport} user={user} /> : null }
  </main>
  )
}