import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  const LoggedinUser = (email, password) => {
    if (email == "admin@me.com" && password == "12345") {
      setUser("admin");
    } else if (email == "user@me.com" && password == "12345") {
      setUser('user');
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="bg-black">
      {!user ? <Login LoginUser={LoggedinUser} /> : null}
      {user == "admin" ? <EmployeeDashboard /> : <AdminDashboard />}
    </div>
  );
};
export default App;
