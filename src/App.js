import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Admin from "./pages/Admin";
import AdminForm from "./components/Admin/AdminLogin";
import Dashboard from "./pages/Dashboard";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <AdminForm setToken={setToken} />;
  }
  return (
    <main>
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </main>
  );
}
export default App;
