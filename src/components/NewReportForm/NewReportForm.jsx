import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as reportsAPI from '../../utilities/reports-api'

export default function NewReportForm({ addReport }) {
  const [formData, setFormData] = useState({
    title: '',
    expenses: [],
    isPending: false,
    isComplete: false,
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
    navigate(`/reports/${newReport._id}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        Report Title:
        <input type="text" name="title" placeholder="Enter Title Name" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}