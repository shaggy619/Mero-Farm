import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Error from "./Error";
import Farm from "./Farm";
import { useAppContext } from "../context/AppContext";
import Inventory from "./Inventory";
import EditProfile from "./EditProfile";
import CustomCalendar from "./CustomCalendar";
import Calendar from "./Calendar";
const Dashboard = () => {
  const { toogle } = useAppContext();
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          {toogle && (
            <div className="col-7 col-md-3 col-lg-2 min-vh-100 d-none d-md-block">
              <Sidebar />
            </div>
          )}

          <div className="col secondary-background min-vh-100">
            <Navbar />
            <Routes>
              <Route path="/dashboard" element={<Home />} />
              <Route path="/farm" element={<Farm />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/profile" element={<EditProfile />} />
              <Route path="/vaccination" element={<Calendar />} />

              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
