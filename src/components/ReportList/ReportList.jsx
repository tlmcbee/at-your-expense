import ReportListItem from "../ReportListItem/ReportListItem"

export default function ReportList({ reports }) {

  const allReports = reports.map((report, idx) => <ReportListItem report={report} key={idx} />)

  return (
    <>
    <p>Report List</p>
    <ul>{allReports}</ul>
    </>
  )
}