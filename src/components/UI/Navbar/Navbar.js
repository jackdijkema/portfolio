import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import AuthContext from "../../../store/auth-context";
import "./Navbar.css";

function Navbar() {
  const authCtx = useContext(AuthContext);
  // const isloggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
    toast.success("Logged out");
  };
  return (
    <nav className="headbar">
      <ul>
        {!authCtx.isLoggedIn && (
          <>
            <Link to="/">Home</Link>
            <Link to="#projects">Project</Link>
            <Link to="#contact">Contact</Link>
            <Link to="#about">About</Link>
          </>
        )}

        {authCtx.isLoggedIn && (
          <>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Admin panel</Link>
            <Link onClick={logoutHandler} to="/">
              Logout
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
