export default function ExpenseDetailView({expense}) {
  return (
    <>
    <div className="form-container">
    <div>
      <h3>{expense.title}</h3>
    </div>
    <div>
      <label>Date:</label>
      { new Date(expense.date).toLocaleDateString() }
    </div>
    <div>
      <label>Type:</label>
      {expense.expenseType}
    </div>
    <div>
      <label>Description</label>
      {expense.description}
    </div>
    <div>
      <label>Amount:</label>
      ${expense.amount}
    </div>
    <div>
      <img src={expense.refFile} alt=''/>
    </div>
    </div>
    </>

  )
}