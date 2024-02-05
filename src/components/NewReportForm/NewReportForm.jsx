import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as reportsAPI from '../../utilities/reports-api'
import './NewReportForm.css'

export default function NewReportForm({ addReport, setShowForm }) {
  const [formData, setFormData] = useState({
    title: '',
    expenses: [],
    isPending: false,
    isComplete: false,
    user: {}
  })
  const navigate = useNavigate()


  function handleChange(evt) {
    const newFormData = {
      ...formData,
      [evt.target.name]: evt.target.value
    }
    setFormData(newFormData)
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    const newReport = await reportsAPI.createReport(formData)
    addReport(newReport)
    setShowForm(false)
    navigate(`/reports/${newReport._id}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='NewReportForm'>
        Report Title:
        <input type="text" name="title" placeholder="Enter Title Name" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}