import React from "react";
import "./styles.css";

const SearchInput = ({ searchField, onSearchChange }) => {
  return (
    <div class="search-container">
      <input
        type="search"
        name="search-field"
        id="search-field"
        placeholder="Search"
        value={searchField}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchInput;
