// import React from "react";
import { useState } from "react";
import "./Form.css"

const Form = ({ list, setList }) => {
    const [newTask, setNewTask] = useState("")

    const onChangeHandler = (e) => {
        setNewTask(e.target.value)
    }

    const addTask = () => {
        if (newTask.trim() !== " ") {
            const lastItemId = list[list.length - 1].id
            const newId = lastItemId + 1;
            const newTaskk = { id: newId, content: newTask, completed: false }
            setList((prevList) => [...prevList, newTaskk])
            setNewTask("")
        }
    }

    const onKeyDownHandler = (e) => {
        if (e.key === "Enter") {
            addTask();
        }
        return (
            <div className="form-container">
                <button className="check-task-button"></button>
                <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                <button onClick={onChangeHandler} className="add-task-button">Add Task</button>
            </div>
        )
    }
}

export default Form;








// const Form = ({ list, setList }) => {
//     const [inputValue, setInputValue] = useState("");

//     const addTask = () => {
//         // props.setList((prevValue) => {
//         //     console.log(prevValue);
//         //     return [...prevValue, inputValue]
//         // });
//         // props.setList([...list, inputValue]);
//         // setInputValue("");
//         setList([...list, { id: uuidv4(), title: inputValue, complete: false }]);
//         setInputValue("");
//         console.log(list);
//     };

//     return (
//         <div className="form-container">
//             <button className="check-task-button"></button>
//             <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
//             <button onClick={addTask} className="add-task-button">Add task</button>
//         </div>
//     );
// };

// export default Form;
