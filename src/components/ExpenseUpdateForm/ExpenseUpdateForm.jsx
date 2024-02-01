import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as expensesAPI from '../../utilities/expenses-api'

export default function ExpenseUpdateForm ({expense, setDisplayUpdateForm, updateReport}) {
  const [formData, setFormData] = useState({
    title: `${expense.title}`,
    date: `${expense.date}`,
    expenseType: `${expense.expenseType}`,
    description: `${expense.description}`,
    amount: `${expense.amount}`
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
    const expenseId = expense._id
    const updatedExpense = await expensesAPI.editExpense(expenseId, formData)
    updateReport(updatedExpense)
    setDisplayUpdateForm(false)
  }

  return  (
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
      <button type="submit">Edit Expense</button>
    </form>
  </>
  )
}