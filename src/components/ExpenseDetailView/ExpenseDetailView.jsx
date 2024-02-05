export default function ExpenseDetailView({expense}) {
  return (
    <>
      <div className="form-container light-text">
        <div>
          <h3>{expense.title}</h3>
        </div>
        <div>
          <label>Date:</label>
          { new Date(expense.date).toLocaleDateString() }
        </div>
        <div>
          <label>Type:</label>
          {expense.expenseType.toUpperCase()}
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
          {expense.refFile ? 
            <img 
            src={expense.refFile}
            alt='' 
            style={{
              height: '200px',
              width: '200px'
            }}/>
            :
            null
          }
        </div>
      </div>
    </>
  )
}