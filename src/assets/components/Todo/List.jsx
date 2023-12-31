import React, { useState, useEffect } from "react";
import "./List.css"

const List = ({ list, setList, theme }) => {
    const [filterr, setFilter] = useState(list)
    let itemsLeft = list.filter((todo) => !todo.completed)
    useEffect(() => {
        setFilter(list);
    }, [list]);

    const clickToggle = (id) => {
        setList((prevList) => {
            return prevList.map((todo) => {
                return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
            });
        });
    };


    const completedFilter = () => {
        setFilter(list.filter(todo => todo.completed));
    };

    const activeFilter = () => {
        setFilter(list.filter(todo => !todo.completed));
    };

    const allFilter = () => {
        setFilter(list)
    }

    return (
        <div className="task-container">
            <ul>
                {filterr.map(todo => (
                    <li key={todo.id} className={`${todo.completed ? "completed" : ""} ${theme === "dark" ? "dark-mode" : "light-mode"}`}>

                        <button onClick={() => clickToggle(todo.id)} className="task-item dark-mode check-button-dark-mode">{todo.completed ? <img src="./src/assets/images/icon-check.svg" className="checkImg" /> : ""}</button>
                        <span className={todo.completed ? "text-underline" : ""}>{todo.content}</span>
                    </li>
                ))
                }
                <div className={`filters ${theme === "dark" ? "dark-mode filters-dark-mode" : "light-mode filters-light-mode "}`}>
                    <span>{itemsLeft.length} Items Left</span>
                    <button onClick={allFilter}>All</button>
                    <button onClick={activeFilter}>Active</button>
                    <button onClick={completedFilter}>Completed</button>
                </div>
            </ul >
        </div >
    )
};

export default List;