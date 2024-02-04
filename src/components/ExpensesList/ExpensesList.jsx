import ExpenseLineItem from "../ExpenseLineItem/ExpenseLineItem"
import './ExpensesList.css'

export default function ExpensesList ({ expenses }) {
  const allExpenses = expenses.map(
    (exp, idx) => (<ExpenseLineItem key={idx} expense={exp} />)
  )
  
return (
<ul className="ExpenesesList">{allExpenses}</ul>
)
}