import { Link } from 'react-router-dom'

export default function ReportListItem({ report, user }) {
  return (
    <>
      {user.isAdmin && report.isPending ? 
        <Link to={`/reports/${report._id}`}>
          <li style={{listStyle: 'none'}}>{report.title}</li>
        </Link>
        :
        !user.isAdmin ? 
          <Link to={`/reports/${report._id}`}>
            <li style={{listStyle: 'none'}}>{report.title}</li>
          </Link>
          : 
          null
      }
    </>
  )
}