import React, { useState, useEffect } from "react";
import "./List.css"

const List = ({ list, setList }) => {
    const [filterr, setFilter] = useState(list)

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
        <ul>
            {filterr.map(todo => (
                <li key={todo.id} className={todo.completed ? "completed" : ""}>
                    {/* `${todo.completed ? "completed" : ""} ${theme === "dark" ? "list-fontColor-dark-mode" : ""}` */}
                    <button onClick={() => clickToggle(todo.id)}>{todo.completed ? <img src="./src/assets/images/icon-check.svg" className="checkImg" /> : ""}</button>
                    <span>{todo.content}</span>
                </li>
            ))
            }
            <div className="filters">
                <button onClick={allFilter}>All</button>
                <button onClick={activeFilter}>Active</button>
                <button onClick={completedFilter}>Completed</button>
            </div>
        </ul >
    )
};

export default List;