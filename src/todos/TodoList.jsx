import React, { useEffect }from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import TodoForm from './TodoForm'
import { loadTodos , removeTodoRequest } from './thunks'
import { completeTodo } from './actions';
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onCompletePressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos()
    }, []);

    const loading = (<div>Loading Todos...</div>);
    const content = (
        <div className="list-wrapper">
            <TodoForm />
            {todos.map(todo => <TodoListItem 
                key={todo.text}
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletePressed={onCompletePressed}/>)}
        </div>
    );
    return isLoading ? loading : content;
}

const mapStateToProps = state => ({
    todos: state.todos,
    isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: text => dispatch(completeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);