import { useEffect, useState } from "react";
import "./App.css";
import FormContainer from "./Components/Form";
import SearchInput from "./Components/SearchInput";
import FilterInput from "./Components/FilterInput";
import SectionSeperator from "./Components/common/SectionSeperator";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );
  const [searchField, setSearchField] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    updateLocalStorage();
    console.log(tasks);
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

  return (
    <div className="body-container">
      <FormContainer tasks={tasks} setTasks={setTasks} />
      <SectionSeperator />
      <SearchInput
        searchField={searchField}
        onSearchChange={handleSearchChange}
      />
      <FilterInput filter={filter} onFilterChange={handleFilterChange} />
    </div>
  );
}

export default App;
