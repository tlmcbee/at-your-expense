import { Link } from 'react-router-dom'
export default function ReportListItem({ report, user }) {
  console.log(report.user)
  return (
    <>
      <Link to={`/reports/${report._id}`}>
        <li>{report.title}</li>
      </Link>
    </>
  )
}