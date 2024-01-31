import ExpenseLineItem from "../ExpenseLineItem/ExpenseLineItem"

export default function ExpensesList ({ expenses }) {
  const allExpenses = expenses.map(
    (exp) => (<ExpenseLineItem key={exp} expense={exp} />)
  )
  
return <ul>{allExpenses}</ul>
}