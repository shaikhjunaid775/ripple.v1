import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Onboard from "./pages/Onboard";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import WelcomeLetter from "./pages/WelcomeLetter";
import ProtectedRoute from "./middleware/ProtectedRoute";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/welcomeLetter"
          element={
            <ProtectedRoute>
              <WelcomeLetter />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
