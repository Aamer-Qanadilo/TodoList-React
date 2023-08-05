import { useContext, useState } from "react";
import "./App.css";
import FormContainer from "./Components/Form";
import SectionSeperator from "./Components/common/SectionSeperator";
import ListContainer from "./Components/ListContainer";
import Swal from "sweetalert2";
import FiltersContainer from "./Components/FiltersContainer";
import { TodoContext } from "./context/TodoContext";

function App() {
  const { todoList, handleToggleDone, handleDelete } = useContext(TodoContext);

  const [searchField, setSearchField] = useState("");
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    const { value } = event.target;
    setFilter(value);
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchField(value);
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
        handleDelete(id);

        Swal.fire("Deleted!", "Task has been deleted.", "success");
      }
    });
  };

  const filteredData = todoList.filter(
    (task) =>
      task.status.toLowerCase().includes(filter.toLowerCase()) &&
      task.task.toLowerCase().includes(searchField.toLowerCase()),
  );

  return (
    <div className="body-container">
      <FormContainer />
      <SectionSeperator />
      <FiltersContainer
        filter={filter}
        searchField={searchField}
        onFilterChange={handleFilterChange}
        onSearchChange={handleSearchChange}
      />
      <ListContainer
        tasks={filteredData}
        onDeleteCard={handleDeleteCard}
        onToggleDone={handleToggleDone}
      />
    </div>
  );
}

export default App;
