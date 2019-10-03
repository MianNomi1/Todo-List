import React from 'react';

const TodoList = (props) => {
    return (
        <div className="list-component">
            <ul>
                {props.item.map(item => (<li key={item.id} onClick={() => props.onClick(item)}>{item.text}</li>))}
            </ul>
        </div>
    );
}

export default TodoList;