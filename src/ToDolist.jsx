import React from "react";

export default function ToDoList(props) {
    return (
        <>
            <li> <i className="fas fa-times-circle" onClick={(() => { props.onSelect(props.id) })}></i>{props.text}</li>
        </>
    )
}