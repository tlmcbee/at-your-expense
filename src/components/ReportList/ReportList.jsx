import ReportListItem from "../ReportListItem/ReportListItem"

export default function ReportList({ reports, user }) {

  const allReports = reports.map((report, idx) => <ReportListItem report={report} key={idx} user={user} />)

  return (
    <>
    <p>Report List</p>
    <ul>{allReports}</ul>
    </>
  )
}