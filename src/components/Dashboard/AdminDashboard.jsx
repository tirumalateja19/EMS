import React from "react";
import Header from "../SmallComponents/Header";
import AdminForm from "../SmallComponents/AdminForm";
import AssignedTask from "../SmallComponents/AssignedTask";

const AdminDashboard = ({ data, onLogout }) => {
  console.log(data);
  return (
    <div className="p-8">
      <Header data={data} onLogout={onLogout} />
      <AdminForm />
      <AssignedTask />
    </div>
  );
};

export default AdminDashboard;
