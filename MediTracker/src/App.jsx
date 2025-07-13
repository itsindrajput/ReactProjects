import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BookAppointment from "./pages/BookAppointment";
import Prescriptions from "./pages/Prescriptions";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointments" element={<BookAppointment />} />
        <Route path="/prescriptions" element={<Prescriptions />} />
      </Routes>
    </Router>
  );
};

export default App;
