import { useState } from 'react'
import NewReportForm from '../../components/NewReportForm/NewReportForm'
import './NewReportPage.css'

export default function NewReportPage({ addReport, user }) {
  const [showForm, setShowForm] = useState(false)

  function handleClick() {
    setShowForm(!showForm)
  }

  return (
    <main className='placement'>
      {user.isAdmin?
        <div className='splash-msg'>
          Pending Reports are in the list to the left
        </div>
        :
        showForm ? 
        <NewReportForm addReport={addReport} user={user} setShowForm={setShowForm}/>  :
        <div className='splash-msg'>
        <h3 style={{margin: '0'}}>Welcome to <span>AT YOUR EXPENSE</span>! </h3> 
        <h6 style={{marginTop: '0', marginBottom: '10px'}}>An expense reporting application</h6>
        <div>Get startred now by clicking </div>
        <div>
        <button type="button" onClick={handleClick}>Create new Report</button>
        </div>
        </div>

      }
  </main>
  )
}