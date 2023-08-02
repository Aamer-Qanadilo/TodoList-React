import React from "react";
import "./styles.css";

const FilterInput = ({ filter, onFilterChange }) => {
  return (

    <select
      class="form-select m-0 w-25"
      name="list-genres"
      id="list-genres"
      value={filter}
      onChange={onFilterChange}
    >
      <option value="">All Tasks</option>
      <option value="started">On Going Tasks</option>
      <option value="finished">Finished Tasks</option>
    </select>
  );
};

export default FilterInput;
