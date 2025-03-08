import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Onboard from "./pages/Onboard";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
    </Router>
  );
}

export default App;
