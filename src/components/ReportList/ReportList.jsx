import ReportListItem from "../ReportListItem/ReportListItem"

export default function ReportList({ reports, user }) {
  const allReports = reports.map((report, idx) => <ReportListItem report={report} key={idx} user={user} />)

  return (
    <div className="flex-col flex-ctr-ctr" style={{gap: "5px"}}> 
      <p>Report List</p>
      <ul style={{paddingLeft: '0'}}>
        {allReports}
      </ul>
      <img 
      src="AYE-Logo.png" 
      alt="" 
      style={{ 
        height: '100px',
         width: '100px', 
         border: '1px solid var(--primary)',
         boxShadow: "12px 6px 16px -1px rgba(0,0,0,0.75)",
        }}
      />
    </div>
  )
}