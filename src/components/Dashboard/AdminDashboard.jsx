import React, { useState } from "react";
import Header from "../SmallComponents/Header";
import AdminForm from "../SmallComponents/AdminForm";
import AssignedTask from "../SmallComponents/AssignedTask";

const AdminDashboard = ({ data, onLogout }) => {
  // console.log(data);
  const [refresh, setRefresh] = useState(false);

  const handleTaskAssigned = () => {
    setRefresh((prev) => !prev); // Toggle to force update
  };
  return (
    <div className="p-7">
      <Header data={data} onLogout={onLogout} />
      <AdminForm onTaskAssigned={handleTaskAssigned} />
      <AssignedTask refresh={refresh} />
    </div>
  );
};

export default AdminDashboard;
