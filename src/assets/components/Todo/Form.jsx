import React, { useState } from "react";
import "./Form.css";

const Form = ({ list, setList }) => {
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
        <div className="form-container">
            <input
                type="text"
                value={inputValue}
                onChange={onChangeHandler}
                onKeyDown={onKeyDownHandler}
            />
            <button onClick={addTask} className="add-task-button">
                Add Task
            </button>
        </div>
    );
};

export default Form;
