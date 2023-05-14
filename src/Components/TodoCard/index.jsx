import React from "react";
import "./styles.css";

const TodoCard = ({ task, index, onToggle, onDelete }) => {
  return (
    <div
      className={`taskCard ${task.status === "finished" ? "completed" : ""}`}
      aria-rowindex={index}
    >
      <div className="taskCardContent">
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
      </div>
      <div className="taskCardButtons">
        <i
          className="fa-solid fa-trash"
          style={{ color: "#FF1E00" }}
          aria-label="Delete task"
          onClick={() => onDelete(task.id)}
        ></i>
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
      </div>
    </div>
  );
};

export default TodoCard;
