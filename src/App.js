import { useEffect, useState } from "react";
import "./App.css";
import FormContainer from "./Components/Form";
import SearchInput from "./Components/SearchInput";
import FilterInput from "./Components/FilterInput";
import SectionSeperator from "./Components/common/SectionSeperator";
import ListContainer from "./Components/ListContainer";
import Swal from "sweetalert2";

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

  const handleToggleDone = (index) => {
    const task = { ...tasks[index] };

    task.status = task.status === "started" ? "finished" : "started";

    const tasksHolder = tasks.slice();

    tasksHolder.splice(index, 1, task);

    setTasks(tasksHolder);
  };

  const handleDeleteCard = (index) => {
    const tasksHolder = tasks.slice();

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
        tasksHolder.splice(index, 1);

        setTasks(tasksHolder);

        Swal.fire("Deleted!", "Task has been deleted.", "success");
      }
    });
  };

  return (
    <div className="body-container">
      <FormContainer tasks={tasks} setTasks={setTasks} />
      <SectionSeperator />
      <SearchInput
        searchField={searchField}
        onSearchChange={handleSearchChange}
      />
      <FilterInput filter={filter} onFilterChange={handleFilterChange} />
      <ListContainer
        tasks={tasks}
        handleDeleteCard={handleDeleteCard}
        handleToggleDone={handleToggleDone}
      />
    </div>
  );
}

export default App;
