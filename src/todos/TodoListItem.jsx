import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovePressed, onCompletePressed }) => (
    <div className="todo-item-container">
        <h3 className={todo.isCompleted ? 'strike' : null}>{todo.text}</h3>
        <div className="buttons-container">
            {todo.isCompleted ? null :
                <button 
                    onClick={() => onCompletePressed(todo.text)}
                    className="complete-button">Mark as complete</button>
            }
            <button 
                onClick={() => onRemovePressed(todo.text)}
                className="remove-button">Remove</button>
        </div>
    </div>
)

export default TodoListItem;