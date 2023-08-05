import React from "react";
import "./styles.css";

const FormInput = ({ type, name, id, error, value, onChange }) => {
  return (
    <div className="form__input-container">
      <div className="form__input-field">
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          required
        />
        <label htmlFor={id}>{name}</label>
      </div>

      {error && <p className="alert alert-danger full-width">{error}</p>}
    </div>
  );
};

export default FormInput;
