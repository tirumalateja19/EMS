import React from "react";

const TaskBody = () => {
  return (
    <div className="flex gap-5 mt-10">
      <div className="bg-red-300 h-[10rem] w-[45%] flex items-center flex-col justify-center text-xl">
        <h1 className="text-3xl">0</h1>
        <h1>New Task</h1>
      </div>
      <div className="bg-green-500 h-[10rem] w-[45%] flex items-center flex-col justify-center text-xl">
        <h1 className="text-3xl">0</h1> <h1>Completed</h1>
      </div>
      <div className="bg-blue-500  h-[10rem] w-[45%] flex items-center flex-col justify-center text-xl">
        <h1 className="text-3xl">0</h1> <h1>Accepted</h1>
      </div>
      <div className="bg-orange-500 h-[10rem] w-[45%] flex items-center flex-col justify-center text-xl">
        <h1 className="text-3xl">0</h1> <h1>Failed</h1>
      </div>
    </div>
  );
};

export default TaskBody;
