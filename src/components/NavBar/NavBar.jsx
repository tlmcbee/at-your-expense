import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-services"
import './NavBar.css'

export default function NavBar({ user, setUser}) {  
  function handleLogOut() {
    userService.logOut()
    setUser(null)
  }

  return (
    <nav className="NavBar flex-j-end">
      Welcome {user.name.toUpperCase()}!
      &nbsp; | &nbsp;
      <Link to="/reports">
        {user.isAdmin ? 
          <div>View Pending Reports</div> 
          :
          <div>My Reports</div>
        }
        </Link>
      &nbsp; | &nbsp;
      <Link to="/reports" onClick={handleLogOut}>Log Out</Link>
    </nav>
  )
}