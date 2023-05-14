import React from "react";

const TaskDeleteButton = ({ onDelete, task }) => {
  return (
    <i
      className="fa-solid fa-trash"
      style={{ color: "#FF1E00" }}
      aria-label="Delete task"
      onClick={() => onDelete(task.id)}
    ></i>
  );
};

export default TaskDeleteButton;
