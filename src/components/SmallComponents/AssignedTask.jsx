import React, { useEffect, useState } from "react";

const AssignedTask = ({ refresh }) => {
  const [AuthData, setAuthData] = useState([]);

  useEffect(() => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    setAuthData(employees);
  }, [refresh]);
  return (
    <div className="bg-[#1c1c1c] rounded-lg flex flex-col gap-3 h-67 p-3 mt-5 ">
      <div className="bg-red-300 w-full flex justify-between px-5 py-3 text-lg font-medium  rounded-sm">
        <h2 className="w-1/5">Employee Name</h2>
        <h2 className="w-1/5">New Tasks</h2>
        <h2 className="w-1/5">Active Tasks</h2>
        <h2 className="w-1/5">Completed</h2>
        <h2 className="w-1/5">Failed</h2>
      </div>
      <div id="AssignedTask" className="overflow-x-auto">
        {AuthData.map((elem) => {
          return (
            <div
              key={elem.empId}
              className="border-2 border-emerald-300 w-full flex justify-between px-5 py-2 mb-2 text-lg font-medium  rounded-sm"
            >
              <h2 className="w-1/5 text-white">{elem.name}</h2>
              <h2 className="w-1/5 text-blue-400">{elem.newTasks}</h2>
              <h2 className="w-1/5 text-green-400">{elem.activeTasks}</h2>
              <h2 className="w-1/5 text-yellow-300">{elem.completedTasks}</h2>
              <h2 className="w-1/5 text-red-600">{elem.failedTasks}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AssignedTask;
