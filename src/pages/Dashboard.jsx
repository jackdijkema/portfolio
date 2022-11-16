import Dashboard from "../components/Admin/Dashboard/Dashboard";
import Navbar from "../components/UI/Navbar/Navbar";
import AdminLogin from "../components/Admin/AdminLogin/AdminLogin"
import React, { useState } from "react";

function Admin() {
  const [token, setToken] = useState();
  if (!token) {
    return (<><Navbar /><AdminLogin setToken={setToken} /></>); 
  }
  return (
    <div>
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default Admin;
