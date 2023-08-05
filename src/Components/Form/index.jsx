import React, { useContext, useState } from "react";
import Joi from "joi";

import FormInput from "../FormInput";
import { TodoContext } from "../../context/TodoContext";

import "./styles.css";

const DEFAULT_STATE = {
  task: "",
  assignee: "",
};

const formSchema = Joi.object({
  task: Joi.string().min(3).max(32).required(),
  assignee: Joi.string().min(5).max(32).required(),
});

const FormContainer = ({ tasks = [], setTasks }) => {
  const { handleCreate } = useContext(TodoContext);

  const [inputFields, setInputFields] = useState(DEFAULT_STATE);
  const [errors, setErrors] = useState({});


  const validateInput = (input, inputSchema) => {
    return inputSchema.validate(input);
  };

  const isFormInvalid = (errors) => {
    return Object.keys(errors).length !== 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    const validation = validateInput(value, formSchema.extract(name));
    if (validation.error) {
      setErrors({ ...errors, [name]: validation.error.details[0].message });
    } else {
      const { [name]: _, ...errs } = errors;
      setErrors({ ...errs });
    }

    setInputFields({ ...inputFields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormInvalid(errors)) return;

    handleCreate(inputFields);

    setInputFields(DEFAULT_STATE);
  };

  return (
    <form action="#" method="post" id="todoListForm" onSubmit={handleSubmit}>
      <h1>Todo List</h1>
      <div className="todoListInputs">
        <FormInput
          key="task"
          id="task"
          name="task"
          type="text"
          value={inputFields.task}
          onChange={handleChange}
          error={errors.task}
        />
        <FormInput
          key="assignee"
          id="assignee"
          name="assignee"
          type="text"
          value={inputFields.assignee}
          onChange={handleChange}
          error={errors.assignee}
        />
      </div>
      <button type="submit" id="addTask" disabled={isFormInvalid(errors)}>
        Add Task
      </button>
    </form>
  );
};

export default FormContainer;
