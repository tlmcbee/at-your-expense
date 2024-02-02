export default function ExpenseDetailView({expense}) {
  return (
    <>
    
    {expense.title}
    {expense.date}
    {expense.expenseType}
    {expense.description}
    {expense.amount}
    <img src={expense.refFile} alt=''/>
    </>

  )
}