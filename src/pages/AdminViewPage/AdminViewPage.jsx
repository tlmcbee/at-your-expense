import * as adminAPI from '../../utilities/admin-api'

export default function AdminViewPage({setReports}) {

  async function getAllReports() {
    const allReports = await adminAPI.getAllReports()
    setReports(allReports)
  }
  return (
    <button onClick={getAllReports}>View Available Reports</button>
  )
}