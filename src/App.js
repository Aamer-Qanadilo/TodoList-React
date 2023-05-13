import { useEffect, useState } from "react";
import "./App.css";
import FormContainer from "./Components/Form";
import ListContainer from "./Components/ListContainer";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    updateLocalStorage();
  }, [tasks]);

  const updateLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const handleToggleDone = (index) => {
    const task = { ...tasks[index] };

    task.status = task.status === "started" ? "finished" : "started";

    const tasksHolder = tasks.slice();

    tasksHolder.splice(index, 1, task);

    setTasks(tasksHolder);
  };

  const handleDeleteCard = (index) => {
    const tasksHolder = tasks.slice();

    tasksHolder.splice(index, 1);

    setTasks(tasksHolder);
  };

  return (
    <div className="body-container">
      <FormContainer tasks={tasks} setTasks={setTasks} />
      <ListContainer
        tasks={tasks}
        handleDeleteCard={handleDeleteCard}
        handleToggleDone={handleToggleDone}
      />
    </div>
  );
}

export default App;
