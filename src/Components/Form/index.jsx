import React, { useState } from "react";
import "./styles.css";
import FormInput from "../FormInput";
import Joi from "joi";

const DEFAULT_STATE = {
  task: "",
  assignee: "",
};

const FormContainer = ({ tasks, setTasks }) => {
  const [inputFields, setInputFields] = useState(DEFAULT_STATE);

  const [errors, setErrors] = useState({});

  const formSchema = Joi.object({
    task: Joi.string().min(3).max(32).required(),
    assignee: Joi.string().min(5).max(32).required(),
  });

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
      const errs = { ...errors };
      delete errs[name];
      setErrors({ ...errs });
    }

    setInputFields({ ...inputFields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormInvalid(errors)) return;

    const newTask = { ...inputFields };

    setTasks([...tasks, newTask]);

    setInputFields(DEFAULT_STATE);
    // clearForm(inputFields, setInputFields);
  };

  return (
    <form action="#" method="post" id="todoListForm" onSubmit={handleSubmit}>
      <h1>Todo List</h1>
      <div className="todoListInputs">
        <FormInput
          id="task"
          name="task"
          type="text"
          value={inputFields.task}
          onChange={handleChange}
          error={errors.task}
        />
        <FormInput
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
