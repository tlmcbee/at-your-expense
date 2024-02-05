import { useState } from 'react'
import * as expensesAPI from '../../utilities/expenses-api'

export default function ExpenseUpdateForm ({expense, setDisplayUpdateForm, updateReport}) {
  const [formData, setFormData] = useState({
    title: `${expense.title}`,
    date: `${expense.date}`,
    expenseType: `${expense.expenseType}`,
    description: `${expense.description}`,
    amount: `${expense.amount}`,
    file: `${expense.refFile}`
  })

  function handleFileChange(evt) {
    setFormData({...formData, file: evt.target.files[0]})
  }

  function handleChange(evt) {
    const newFormData = {
      ...formData,
      [evt.target.name]: evt.target.value
    }
    setFormData(newFormData)
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    const expenseId = expense._id

    const payload = new FormData()
    payload.append('title', formData.title)
    payload.append('date', formData.date)
    payload.append('expenseType', formData.expenseType)
    payload.append('description', formData.description)
    payload.append('amount', formData.amount)
    payload.append('file', formData.file)

    const updatedExpense = await expensesAPI.editExpense(expenseId, payload)
    updateReport(updatedExpense)
    setDisplayUpdateForm(false)
  }

  return  (
    <>
    <form 
      onSubmit={handleSubmit}  
      encType='multipart/form-data' 
      className='form-container'
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
        <option value="transportation">Transportation</option>
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
        onChange={handleChange}>
      </textarea>
      <label>Amount:</label>
      <input 
        type="number" 
        name="amount" 
        value={formData.amount}
        onChange={handleChange}
      />
      <label>Upload File:</label>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Edit Expense</button>
    </form>
  </>
  )
}