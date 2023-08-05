import { createContext } from "react";
import { v4 as uuid } from "uuid";

import { useLocalStorage } from "../hooks/useLocalStorage";

export const TodoContext = createContext({});

const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useLocalStorage("todo", []);

    const handleCreate = (inputs) => {
        let newID = uuid();

        const newTask = { ...inputs, status: "started", id: newID };

        setTodoList([...todoList, newTask]);
    }

    const handleUpdate = (key, value) => {

    }

    const handleDelete = (id) => {
        const tasksHolder = todoList.filter((task) => task.id !== id);

        setTodoList(tasksHolder);
    }

    const handleToggleDone = (id) => {
        const tasksHolder = todoList.map((task, index) => {
            if (task.id === id) {
                const tempTask = { ...task };
                tempTask.status =
                    tempTask.status === "started" ? "finished" : "started";
                return tempTask;
            } else {
                return task;
            }
        });

        setTodoList(tasksHolder);
    };

    return (
        <TodoContext.Provider value={{ todoList, handleCreate, handleUpdate, handleDelete, handleToggleDone }}>{children}</TodoContext.Provider>
    );
};

export default TodoProvider;
