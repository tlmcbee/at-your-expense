import { useParams } from 'react-router-dom'
import * as reportsAPI from '../../utilities/reports-api'
import ReportList from '../../components/ReportList/ReportList'


export default function ReportDetailPage({ reports }) {
  let { reportId } = useParams()
  
  let report = reports.find((rep) => rep._id === reportId)

  return (
    <>
    <main>
      <aside>
        <ReportList reports={reports} />
      </aside>
      {report.title}

    </main>
    </>
  )
}