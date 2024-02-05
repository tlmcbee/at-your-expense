import ExpenseLineItem from "../ExpenseLineItem/ExpenseLineItem"

export default function ExpensesList ({ expenses }) {
  const allExpenses = expenses.map(
    (exp, idx) => (<ExpenseLineItem key={idx} expense={exp} />)
  )
  
  return (
    <ul
      className="ExpenesesList scroll-y"
      style={{
      backgroundColor: 'var(--primary)',
      height: "100px",
      paddingLeft: "0",
      border: "1px solid var(--primary)",
      borderRadius: "5px"
      }}>
        {allExpenses}
    </ul>
  )
}