import ExpenseLineItem from "../ExpenseLineItem/ExpenseLineItem"

export default function ExpensesList ({ expenses }) {
  const allExpenses = expenses.map(
    (exp, idx) => (<ExpenseLineItem key={idx} expense={exp} />)
  )
  
return <ul>{allExpenses}</ul>
}