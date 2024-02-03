import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-services"
import * as adminAPI from '../../utilities/admin-api'

export default function NavBar({ user, setUser, setReports }) {
  function handleLogOut() {
    userService.logOut()
    setUser(null)
  }

  return (
    <nav>
      Welcome {user.name.toUpperCase()}!
      &nbsp; | &nbsp;
      {user.isAdmin ? 
      <Link to="/admin">View All Reports</Link>
      :
      <Link to="/reports">My Reports</Link>
}
      &nbsp; | &nbsp;
      <Link to="#" onClick={handleLogOut}>Log Out</Link>

    </nav>
  )
}