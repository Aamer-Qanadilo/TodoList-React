import { useEffect, useState } from "react";
import "./App.css";
import FormContainer from "./Components/Form";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    updateLocalStorage();
    console.log(tasks);
  }, [tasks]);

  const updateLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  return (
    <div className="body-container">
      <FormContainer tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
