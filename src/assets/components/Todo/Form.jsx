import React, { useState } from "react";
import "./Form.css";

const Form = ({ list, setList, theme }) => {
    const [inputValue, setInputValue] = useState("");

    const onChangeHandler = (e) => {
        setInputValue(e.target.value);
    };

    const addTask = () => {
        if (inputValue.trim() !== "") {
            const lastItemId = list[list.length - 1].id;
            const newId = lastItemId + 1;
            const newTask = { id: newId, content: inputValue, completed: false };
            setList((prevList) => [...prevList, newTask]);
            setInputValue("");
        }
    };

    const onKeyDownHandler = (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    };

    return (
        <div className={`form-container ${theme === "dark" ? "dark-mode filters-dark-mode" : "light-mode"}`}>
            <input
                type="text"
                value={inputValue}
                onChange={onChangeHandler}
                onKeyDown={onKeyDownHandler}
                className={`add-task-button ${theme === "dark" ? "dark-mode filters-dark-mode border-dark-mode" : "light-mode border-light-mode"}`}
            />
            <button onClick={addTask} className={`add-task-button ${theme === "dark" ? "dark-mode filters-dark-mode border-dark-mode" : "light-mode border-light-mode"}`}>
                Add Task
            </button>
        </div>
    );
};

export default Form;
