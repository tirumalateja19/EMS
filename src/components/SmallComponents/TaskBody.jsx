import React from "react";

const TaskBody = (props) => {
  const { data } = props;
  const { activeTasks, completedTasks, failedTasks, totalTasks, newTasks } =
    data;
  return (
    <div className="flex gap-5 mt-10">
      <div className="bg-red-300 h-[10rem] w-[45%] flex items-center flex-col justify-center text-xl">
        <h1 className="text-3xl">{activeTasks}</h1>
        <h1>Active Tasks</h1>
      </div>
      <div className="bg-yellow-300 h-[10rem] w-[45%] flex items-center flex-col justify-center text-xl">
        <h1 className="text-3xl">{newTasks}</h1>
        <h1>New Tasks</h1>
      </div>
      <div className="bg-green-500 h-[10rem] w-[45%] flex items-center flex-col justify-center text-xl">
        <h1 className="text-3xl">{completedTasks}</h1> <h1>Completed Tasks</h1>
      </div>
      <div className="bg-blue-500  h-[10rem] w-[45%] flex items-center flex-col justify-center text-xl">
        <h1 className="text-3xl">{totalTasks}</h1> <h1>Total Tasks</h1>
      </div>
      <div className="bg-orange-500 h-[10rem] w-[45%] flex items-center flex-col justify-center text-xl">
        <h1 className="text-3xl">{failedTasks}</h1> <h1>Failed Tasks</h1>
      </div>
    </div>
  );
};

export default TaskBody;
