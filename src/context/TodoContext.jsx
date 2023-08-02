import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TodoContext = createContext({});

const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useLocalStorage("todo", []);

    return (
        <TodoContext.Provider value={{ todoList }}>{children}</TodoContext.Provider>
    );
};

export default TodoProvider;
