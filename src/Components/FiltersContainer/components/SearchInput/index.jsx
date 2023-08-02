import React from "react";
import "./styles.css";

const SearchInput = ({ searchField, onSearchChange }) => {
  return (
    <div className="input-group w-50">
      <input
        className="form-control"
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
