import React, { useState } from "react";

const AdminForm = ({ onTaskAssigned }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskCategory, setTaskCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // Create new task object
    const newTask = {
      taskId: Date.now(), // Unique ID
      title: taskTitle,
      date: taskDate,
      description: taskDescription,
      category: taskCategory,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    // Get existing employee data from localStorage
    const existingData = JSON.parse(localStorage.getItem("employees")) || [];

    // Update the correct employee's tasks
    const updatedEmployees = existingData.map((employee) => {
      if (
        employee.name.trim().toLowerCase() === assignTo.trim().toLowerCase()
      ) {
        employee.tasks = [...(employee.tasks || []), newTask];
        employee.totalTasks = (employee.totalTasks || 0) + 1;
        employee.newTasks = (employee.newTasks || 0) + 1;
      }
      return employee;
    });

    // Save updated data to localStorage
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    // console.log(JSON.parse(localStorage.getItem("employees")));
    
    if (onTaskAssigned) {
      onTaskAssigned(); // tells parent to trigger refresh
    }
    // Reset form
    setTaskTitle("");
    setAssignTo("");
    setTaskCategory("");
    setTaskDate("");
    setTaskDescription("");

    alert("✅ Task assigned successfully!");
  };

  return (
    <div className="bg-[#1c1c1c] text-white p-3 mt-4 rounded-lg">
      <form
        className="flex"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div className="flex flex-col w-[50%] items-start justify-center ml-5">
          <h3 className="font-medium text-lg mb-2">Task Title : </h3>
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => {
              setTaskTitle(e.target.value);
            }}
            placeholder="Make a UI design"
            className="outline-none border-1 border-white rounded-sm p-2 w-9/12 mb-2 text-sm focus:border-emerald-400"
          />
          <h3 className="font-medium text-lg mb-2">Date : </h3>
          <input
            type="date"
            value={taskDate}
            onChange={(e) => {
              setTaskDate(e.target.value);
            }}
            className="outline-none border-1 border-white rounded-sm p-2 w-9/12 mb-2 text-sm focus:border-emerald-400"
          />
          <h3 className="font-medium text-lg mb-2">Assign to : </h3>
          <input
            type="text"
            required
            value={assignTo}
            onChange={(e) => {
              setAssignTo(e.target.value);
            }}
            placeholder="Employee Name"
            className="outline-none border-1 border-white rounded-sm p-2 w-9/12 mb-2 text-sm focus:border-emerald-400"
          />
          <h3 className="font-medium text-lg mb-2">Category : </h3>
          <input
            type="text"
            value={taskCategory}
            onChange={(e) => {
              setTaskCategory(e.target.value);
            }}
            placeholder="design,dev,etc"
            className="outline-none border-1 border-white rounded-sm p-2 w-9/12 mb-2 text-sm focus:border-emerald-400"
          />
        </div>
        <div className="flex flex-col w-[50%] items-center justify-center">
          <div>
            <h3 className="text-lg font-medium mb-3">Description</h3>
            <textarea
              name="desc"
              id="desc"
              rows={8}
              cols={64}
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
              className="outline-none border-1 border-white focus:border-emerald-400 p-2"
            ></textarea>
          </div>
          <div className="mt-5">
            <button className="bg-emerald-400 font-medium px-53 rounded-sm py-2 cursor-pointer ">
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminForm;
