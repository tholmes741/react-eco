import React, { useEffect }from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import TodoForm from './TodoForm'
import { loadTodos , removeTodoRequest, markTodoAsCompletedRequest } from './thunks'
import { completeTodo } from './actions';
import { getTodos, getTodosLoading } from './selectors';
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
    todos: getTodos(state),
    isLoading: getTodosLoading(state)
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: id => dispatch(markTodoAsCompletedRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);