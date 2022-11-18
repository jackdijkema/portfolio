import { useContext } from "react";
import AuthContext from "../../../store/auth-context";
import "./Dashboard.css";

function Dashboard() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
 <div>
    <h1>Admin Dashboard</h1>
 </div>
  );
}

export default Dashboard;