import React from "react";

const AssigneeName = ({ task }) => {
  return (
    <p
      className={
        task.status === "finished"
          ? "opacity-50 text-decoration-line-through"
          : ""
      }
      aria-label="assignee"
    >
      {task.assignee}
    </p>
  );
};

export default AssigneeName;
