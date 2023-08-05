import { useEffect, useState } from "react";
import "./App.css";
import FormContainer from "./Components/Form";
import SectionSeperator from "./Components/common/SectionSeperator";
import ListContainer from "./Components/ListContainer";
import Swal from "sweetalert2";
import FiltersContainer from "./Components/FiltersContainer";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );
  const [searchField, setSearchField] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    updateLocalStorage();
  }, [tasks]);

  const handleFilterChange = (event) => {
    const { value } = event.target;
    setFilter(value);
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchField(value);
  };

  const updateLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const handleToggleDone = (id) => {
    const tasksHolder = tasks.map((task, index) => {
      if (task.id === id) {
        const tempTask = { ...task };
        tempTask.status =
          tempTask.status === "started" ? "finished" : "started";
        return tempTask;
      } else {
        return task;
      }
    });

    setTasks(tasksHolder);
  };

  const handleDeleteCard = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        const tasksHolder = tasks.filter((task) => task.id !== id);

        // tasksHolder.splice(index, 1);

        setTasks(tasksHolder);

        Swal.fire("Deleted!", "Task has been deleted.", "success");
      }
    });
  };

  return (
    <div className="body-container">
      <FormContainer tasks={tasks} setTasks={setTasks} />
      <SectionSeperator />
      <FiltersContainer
        filter={filter}
        searchField={searchField}
        handleFilterChange={handleFilterChange}
        handleSearchChange={handleSearchChange}
      />
      <ListContainer
        tasks={tasks.filter(
          (task) =>
            task.status.toLowerCase().includes(filter.toLowerCase()) &&
            task.task.toLowerCase().includes(searchField.toLowerCase()),
        )}
        handleDeleteCard={handleDeleteCard}
        handleToggleDone={handleToggleDone}
      />
    </div>
  );
}

export default App;
