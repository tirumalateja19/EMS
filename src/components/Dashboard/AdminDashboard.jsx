import React from "react";
import Header from "../SmallComponents/Header";
import AdminForm from "../SmallComponents/AdminForm";
import AssignedTask from "../SmallComponents/AssignedTask";

const AdminDashboard = () => {
  return (
    <div className="p-8">
      <Header />
      <AdminForm />
      <AssignedTask />
    </div>
  );
};

export default AdminDashboard;
