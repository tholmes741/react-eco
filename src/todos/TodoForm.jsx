import React , { useState } from 'react';
import './TodoForm.css'

const TodoForm = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="todo-form">
            <input 
                className="todo-input"
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Type your new todo here!"/>
            <button className="todo-button">Create Todo</button>
        </div>
    )
}

export default TodoForm;