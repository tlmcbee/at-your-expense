import { useParams } from 'react-router-dom'
import ReportList from '../../components/ReportList/ReportList'
import NewExpenseForm from '../../components/NewExpenseForm/NewExpenseForm'
import ExpenseLineItem from '../../components/ExpenseLineItem/ExpenseLineItem'


export default function ReportDetailPage({ reports }) {
  let { reportId } = useParams()
  
  let report = reports.find((rep) => rep._id === reportId)

  
  function handleSwitchComponent() {
    console.log('clicked')
  }


  const allExpenses = report.expenses.map(
    (exp) => (<ExpenseLineItem key={exp} expense={exp} />)
  )

  return (
    <>
    <main>
      <aside>
        <ReportList reports={reports} />
      </aside>
      {report.title}
      <ul>{allExpenses}</ul>
      <NewExpenseForm report={report}/>
    </main>
    </>
  )
}