import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <main>
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          {!isLoggedIn && <Route path="/admin" element={<Admin />} />}
          {isLoggedIn && <Route path="/dashboard" element={<Dashboard />} />}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </main>
  );
}
export default App;
