import { Link } from 'react-router-dom'

export default function ExpenseLineItem({ expense, handleSwitchComponent }) {
  return (
    <Link>
      <li onClick={handleSwitchComponent}>
        {expense.title}
        {expense.date}
        {expense.amount}
      </li>
    </Link>
  )
}