import Dashboard from "../components/Admin/Dashboard/Dashboard";
import Navbar from "../components/UI/Navbar/Navbar";
import React, { useState } from "react";

function Admin() {
  return (
    <div>
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default Admin;
