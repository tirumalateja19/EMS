import React from "react";
import Header from "../SmallComponents/Header";
import TaskBody from "../SmallComponents/TaskBody";
import TasksList from "../SmallComponents/TasksList";

const EmployeeDashboard = ({ data }) => {
  console.log(data);
  return (
    <div className="bg-[#1c1c1c] h-screen p-10">
      <Header data={data} />
      <TaskBody data={data} />
      <TasksList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
