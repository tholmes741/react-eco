import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import TodoForm from './TodoForm'
import { removeTodo, completeTodo } from './actions';
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onCompletePressed }) => (
    <div className="list-wrapper">
        <TodoForm />
        {todos.map(todo => <TodoListItem 
            key={todo.text}
            todo={todo}
            onRemovePressed={onRemovePressed}
            onCompletePressed={onCompletePressed}/>)}
    </div>
)

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletePressed: text => dispatch(completeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);