import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./context/ContextAPI";

const App = () => {
  useEffect(() => {
    const role = localStorage.getItem("userRole");
    const info = localStorage.getItem("userInfo");

    if (role && info) {
      setUser(role);
      setLoggedPersonInfo(JSON.parse(info));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userInfo");
    setUser(null);
    setLoggedPersonInfo(null);
  };

  const [user, setUser] = useState(null);
  const [loggedPersonInfo, setLoggedPersonInfo] = useState(null);

  const Authdata = useContext(AuthContext);
  // console.log(Authdata.admin);

  const LoggedinUser = (email, password) => {
    if (Authdata) {
      const admin = Authdata.admin.find(
        (e) => email === e.email && password === e.password
      );
      const employee = Authdata.employees.find(
        (e) => email === e.email && password === e.password
      );

      if (employee) {
        setUser("employee");
        setLoggedPersonInfo(employee);
        localStorage.setItem("userRole", "employee");
        localStorage.setItem("userInfo", JSON.stringify(employee));
      } else if (admin) {
        setUser("admin");
        setLoggedPersonInfo(admin);
        localStorage.setItem("userRole", "admin");
        localStorage.setItem("userInfo", JSON.stringify(admin));
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
        <AdminDashboard data={loggedPersonInfo} onLogout={handleLogout} />
      ) : user == "employee" ? (
        <EmployeeDashboard data={loggedPersonInfo} onLogout={handleLogout} />
      ) : null}
    </div>
  );
};
export default App;
