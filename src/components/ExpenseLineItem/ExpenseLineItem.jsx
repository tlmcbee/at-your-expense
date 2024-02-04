import { Link } from 'react-router-dom'
import './ExpenseLineItem.css'

export default function ExpenseLineItem({ report, expense }) {
  return (
    <Link to={`/expenses/${expense._id}`}>
      <li className='ExpenseLineItem flex-spc-btw'>
        <div>
        {expense.title}
        </div>
        <div>
        {expense.amount}
        </div>
      </li>
    </Link>
  )
}