import { useState } from 'react'
import * as reportsAPI from '../../utilities/reports-api'

export default function NewReportForm() {
  const [formData, setFormData] = useState({
    title: '',
    expenses: [],
    isPending: false,
    isComplete: false,
  })


  function handleChange(evt) {
    const newFormData = {
      ...formData,
      [evt.target.name]: evt.target.value
    }
    setFormData(newFormData)
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    const reportFormData = reportsAPI.createReport(formData)
    setFormData(reportFormData)
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