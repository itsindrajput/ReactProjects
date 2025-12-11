import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import BottomNavigation from "./components/BottomNavigation";
import FetchData from "./components/FetchData";
import Contact from "./components/Contact";
import Profile from "./components/Profile";

const App = () => {
  return (
    <Router>
      <div>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<FetchData />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <BottomNavigation />
      </div>
    </Router>
  );
};
export default App;
