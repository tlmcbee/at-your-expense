import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-services"

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut()
    setUser(null)
  }

  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/reports">My Reports</Link>
      &nbsp; | &nbsp;
      Welcome {user.name.toUpperCase()}!
      &nbsp; | &nbsp;
      <Link to="#" onClick={handleLogOut}>Log Out</Link>

    </nav>
  )
}