import React from "react";
import "./styles.css";
import TodoCard from "../TodoCard";
import EmptyListCard from "../EmptyListCard";

const ListContainer = ({
  tasks = [],
  onToggleDone,
  onDeleteCard,
}) => {
  return (
    <section className="TodoListContainer">
      {tasks.length ? (
        tasks.map((task, index) => {
          return (
            <TodoCard
              index={index}
              task={task}
              onToggle={onToggleDone}
              onDelete={onDeleteCard}
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
