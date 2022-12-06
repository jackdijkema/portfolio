import ProjectAdmin from "../ProjectAdmin/ProjectAdmin";
import ProfileAdmin from "../ProfileAdmin/ProfileAdmin";
import "./Dashboard.css";


function Dashboard() {
  return (
 <div>
    <h1 className="dashboard_title">Admin Dashboard</h1>
    <ProfileAdmin />
    <ProjectAdmin />
   
 </div>
  );
}

export default Dashboard;