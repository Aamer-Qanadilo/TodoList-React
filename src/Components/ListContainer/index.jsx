import React from "react";
import "./styles.css";
import TodoCard from "../TodoCard";
import EmptyListCard from "../EmptyListCard";

const ListContainer = ({
  tasks = [],
  filter = "",
  searchField = "",
  handleToggleDone,
  handleDeleteCard,
}) => {
  return (
    <section className="TodoListContainer">
      {tasks.length ? (
        tasks.map((task, index) => {
          return (
            <TodoCard
              index={index}
              task={task}
              onToggle={handleToggleDone}
              onDelete={handleDeleteCard}
              key={task.id}
            />
          );
        })
      ) : (
        <EmptyListCard />
      )}
    </section>
  );
};

export default ListContainer;
