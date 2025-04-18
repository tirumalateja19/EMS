import React from "react";
import Header from "../SmallComponents/Header";
import TaskBody from "../SmallComponents/TaskBody";
import TasksList from "../TaskList/TasksList";

const EmployeeDashboard = ({ data, onLogout }) => {
  // console.log(data);
  return (
    <div className="bg-[#1c1c1c] h-screen p-7">
      <Header data={data} onLogout={onLogout} />
      <TaskBody data={data} />
      <TasksList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
