import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Admin from "./pages/Admin";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </main>
  );
}
export default App;