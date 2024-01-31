import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-services"

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut()
    setUser(null)
  }

  return (
    <nav>
      Welcome {user.name.toUpperCase()}!
      &nbsp; | &nbsp;
      <Link to="/reports">My Reports</Link>
      &nbsp; | &nbsp;
      <Link to="#" onClick={handleLogOut}>Log Out</Link>

    </nav>
  )
}