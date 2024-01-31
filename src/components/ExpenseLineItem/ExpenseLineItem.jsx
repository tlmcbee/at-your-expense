import { Link } from 'react-router-dom'

export default function ExpenseLineItem({ report, expense }) {
  return (
    <Link to={`/expenses/${expense._id}`}>
      <li>
        {expense.title}
        {expense.date}
        {expense.amount}
      </li>
    </Link>
  )
}