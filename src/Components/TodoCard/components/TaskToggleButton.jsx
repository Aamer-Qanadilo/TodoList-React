import React from "react";

const TaskToggleButton = ({ task, onToggle }) => {
  return (
    <i
      className={
        task.status === "finished"
          ? "fa-solid fa-circle-xmark"
          : "fa-solid fa-circle-check"
      }
      style={{
        color: `${task.status === "finished" ? "#df0c0c" : "#207e44"}`,
      }}
      aria-label="Toggle Task Completed"
      onClick={() => onToggle(task.id)}
    ></i>
  );
};

export default TaskToggleButton;
