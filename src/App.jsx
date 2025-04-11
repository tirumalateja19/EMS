import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useContext, useState } from "react";
import { AuthContext } from "./context/ContextAPI";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedPersonInfo, setLoggedPersonInfo] = useState(null);

  const Authdata = useContext(AuthContext);
  // console.log(Authdata.admin);

  const LoggedinUser = (email, password) => {
    if (email == "admin@me.com" && password == "12345") {
      setUser("admin");
    } else if (Authdata) {
      const employee = Authdata.employees.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedPersonInfo(employee);
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="bg-black">
      {!user ? <Login LoginUser={LoggedinUser} /> : null}

      {user == "admin" ? (
        <AdminDashboard />
      ) : user == "employee" ? (
        <EmployeeDashboard data={loggedPersonInfo} />
      ) : null}
    </div>
  );
};
export default App;
