import { useState } from 'react'
import * as reportsAPI from '../../utilities/reports-api'
import './NewExpenseForm.css'

export default function NewExpenseForm({ report, updateReport }){
  const [formData, setFormData] = useState({
    title: '',
    date: new Date().toISOString().split('T')[0],
    expenseType: 'transportation',
    description: '',
    amount: '',
    file: null
  })

  function handleChange(evt) {
    const newFormData = {
      ...formData,
      [evt.target.name]: evt.target.value
    }
    setFormData(newFormData)
  }
  
  function handleFileChange(evt) {
    setFormData({...formData, file: evt.target.files[0]})
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    const reportId = report._id

    const payload = new FormData()
    payload.append('title', formData.title)
    payload.append('date', formData.date)
    payload.append('expenseType', formData.expenseType)
    payload.append('description', formData.description)
    payload.append('amount', formData.amount)
    payload.append('file', formData.file)

    const updatedReport = await reportsAPI.addToReport(reportId, payload)
    setFormData({
      title: '',
      date: new Date().toISOString().split('T')[0],
      expenseType: '',
      description: '',
      amount: '',
      file: null
    })
    updateReport(updatedReport)
  }


  return(
    <>
      <form
        onSubmit={handleSubmit} 
        encType='multipart/form-data' 
        className='NewExpenseForm form-container light-text'
       >
        <label>Title:</label>
        <input 
          name="title" 
          placeholder="Title" 
          value={formData.title}
          onChange={handleChange}
        />
        <label>Date:</label>
        <input 
          type="date"
          name="date"
          value={formData.date} 
          onChange={handleChange}
        />
        <label>Type: </label>
        <select name="expenseType" value={formData.expenseType} onChange={handleChange}>
          <option value="transportation" >Transportation</option>
          <option value="fuel">Fuel</option>
          <option value="dining">Dining</option>
          <option value="lodging">Lodging</option>
          <option value="food">Food</option>
          <option value="office-supplies">Office Supplies</option>
          <option value="misc">Miscellaneous</option>
        </select>
        <label name="description">Description: </label>
        <textarea 
          name="description" 
          cols="20" 
          rows="10" 
          placeholder="Enter Description" 
          value={formData.description}
          onChange={handleChange} />
        <label>Amount:</label>
        <input 
          type="number" 
          name="amount" 
          value={formData.amount}
          onChange={handleChange}
        />
        <label>Upload File:</label>
        <input type="file" onChange={handleFileChange} />
        <button type="submit" style={{color: 'black'}}>Add Expense</button>
      </form>
    </>
  ) 
}