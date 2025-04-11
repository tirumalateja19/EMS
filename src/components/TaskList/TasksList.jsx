import React from "react";
import CompletedTask from "./CompletedTask";
import ActiveTask from "./ActiveTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";

const TasksList = ({ data }) => {
  // console.log(data);
  return (
    <div
      id="tasklist"
      className="flex mt-10 py-3 gap-5 flex-nowrap overflow-x-auto"
    >
      {data.tasks.map((elem) => {
        if (elem.active) {
          return <ActiveTask key={elem.taskId} task={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={elem.taskId} task={elem} />;
        }
        if (elem.completed) {
          return <CompletedTask key={elem.taskId} task={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={elem.taskId} task={elem} />;
        }
        return null;
      })}
    </div>
  );
};

export default TasksList;
