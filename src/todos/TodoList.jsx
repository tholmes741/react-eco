import React from 'react';
import TodoListItem from './TodoListItem';
import TodoForm from './TodoForm'
import './TodoList.css';

const TodoList = ({ todos = [{text: "Get Ro gloves"}] }) => (
    <div className="list-wrapper">
        <TodoForm />
        {todos.map(todo => <TodoListItem todo={todo}/>)}
    </div>
)

export default TodoList;