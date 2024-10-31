import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
const App = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default App;
