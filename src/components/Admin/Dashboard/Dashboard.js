import ProjectAdmin from "../ProjectAdmin/ProjectAdmin";
import ProfileAdmin from "../ProfileAdmin/ProfileAdmin";
import "./Dashboard.css";
import EducationAdmin from "../EducationAdmin/EducationAdmin";


function Dashboard() {
  return (
 <div>
    <h1 className="dashboard_title">Admin Dashboard</h1>
    <ProfileAdmin />
    <EducationAdmin />
    <ProjectAdmin />
 </div>
  );
}

export default Dashboard;