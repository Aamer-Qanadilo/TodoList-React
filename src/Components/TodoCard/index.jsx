import React from "react";
import "./styles.css";
import TaskName from "./TaskName";
import AssigneeName from "./AssigneeName";
import TaskDeleteButton from "./TaskDeleteButton";
import TaskToggleButton from "./TaskToggleButton";

const TodoCard = ({ task, index, onToggle, onDelete }) => {
  return (
    <div
      className={`taskCard ${task.status === "finished" ? "completed" : ""}`}
      aria-rowindex={index}
    >
      <div className="taskCardContent">
        <TaskName task={task} />
        <AssigneeName task={task} />
      </div>
      <div className="taskCardButtons">
        <TaskDeleteButton onDelete={onDelete} task={task} />
        <TaskToggleButton onToggle={onToggle} task={task} />
      </div>
    </div>
  );
};

export default TodoCard;
