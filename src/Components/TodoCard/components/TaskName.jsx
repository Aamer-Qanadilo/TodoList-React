import React from "react";

const TaskName = ({ task }) => {
  return (
    <p
      className={
        task.status === "finished"
          ? "opacity-50 text-decoration-line-through"
          : ""
      }
      aria-label="task"
    >
      {task.task}
    </p>
  );
};

export default TaskName;
