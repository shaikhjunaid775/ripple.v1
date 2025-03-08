import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Onboard from "./pages/Onboard";
import Dashboard from "./pages/Dashboard";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
