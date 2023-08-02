import React from "react";
import "./styles.css";

const FormInput = ({ type, name, id, error, value, onChange }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={`Enter ${name}`}
        value={value}
        onChange={onChange}
        required
      />
      <label htmlFor={id}>{name}</label>
      {error && <p className="alert alert-danger full-width">{error}</p>}
    </div>
  );
};

export default FormInput;
