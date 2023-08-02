import React from "react";
import "./styles.css";
import TaskName from "./components/TaskName";
import AssigneeName from "./components/AssigneeName";
import TaskDeleteButton from "./components/TaskDeleteButton";
import TaskToggleButton from "./components/TaskToggleButton";

const TodoCard = ({ task, index, onToggle, onDelete }) => {
  return (
    <div
      className={`taskCard ${task.status === "finished" ? "completed" : ""}`}
      aria-rowindex={index}
      draggable
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
