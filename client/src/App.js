import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./partials/admin pages/Dashboard";
// import About from "./partials/user pages/About";
// import Dashboard from "./partials/admin pages/Dashboard";
import UserTasks from "./partials/user pages/UserTasks";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/Tasks" element={<UserTasks />} /> */}
          <Route path="/" element={<UserTasks />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
