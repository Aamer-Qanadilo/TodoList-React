import React from "react";
import "./styles.css";
import TodoCard from "../TodoCard";

const ListContainer = ({
  tasks = [],
  filter = "",
  searchField = "",
  handleToggleDone,
  handleDeleteCard,
}) => {
  return (
    <section class="TodoListContainer">
      {tasks.map((task, index) => {
        return (
          <TodoCard
            index={index}
            task={task}
            onToggle={handleToggleDone}
            onDelete={handleDeleteCard}
          />
        );
      })}
    </section>
  );
};

export default ListContainer;
