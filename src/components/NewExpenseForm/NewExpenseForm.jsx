import { useState } from 'react'
import * as reportsAPI from '../../utilities/reports-api'

export default function NewExpenseForm({ report }){
  const [formData, setFormData] = useState({
    title: '',
    date: new Date(),
    expenseType: '',
    description: '',
    amount: ''
  })

  function handleChange(evt) {
    const newFormData = {
      ...formData,
      [evt.target.name]: evt.target.value
    }
    setFormData(newFormData)
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    const reportId = report._id
    await reportsAPI.addToReport(reportId, formData)
    setFormData({
      title: '',
      date: new Date(),
      expenseType: '',
      description: '',
      amount: ''
    })
  }

  return(
    <>
      <h1>NewExpenseForm</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:
        </label>
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
          <option value="transportation">Transportation</option>
          <option value="fuel">Fuel</option>
          <option value="lodging">Lodging</option>
          <option value="food">Food</option>
          <option value="office-supplies">Office-Supplies</option>
          <option value="misc">Miscellaneous</option>
        </select>
        <label name="description">Description: </label>
        <textarea 
          name="description" 
          cols="20" 
          rows="10" 
          placeholder="Enter Description" 
          value={formData.description}
          onChange={handleChange}>
        </textarea>
        <label>Amount:</label>
        <input 
          type="number" 
          name="amount" 
          value={formData.amount}
          onChange={handleChange}
        />
        <button type="submit">Add Expense</button>
      </form>
    </>
  ) 
}