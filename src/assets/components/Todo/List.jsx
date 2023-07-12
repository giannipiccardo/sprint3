import React, { useState, useEffect } from "react";
import "./List.css"

const List = ({ list, setList }) => {
    const [filterr, setFilter] = useState(list)

    const updateFilters = () => {
        setFilter(list)
    }

    useEffect(() => {
        updateFilters()
    }, [list])

    const clickToggle = (id) => {
        setList((prevList) => {
            prevList.map((todo) => {
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            })
        })
    }

    const completedFilter = () => {
        let itemsLeft = list.filter(todo => todo.completed)
        setFilter(itemsLeft)
    }

    const activeFilter = () => {
        let itemsLeft = list.filter(todo => !todo.completed)
        setFilter(itemsLeft)
    }

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