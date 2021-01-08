import React, { useEffect }from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import TodoForm from './TodoForm'
import { loadTodos , removeTodoRequest, markTodoAsCompletedRequest } from './thunks'
import { completeTodo } from './actions';
import { getTodos, getTodosLoading, getCompletedTodos, getIncompleteTodos } from './selectors';
import './TodoList.css';

const TodoList = ({ completedTodos, incompleteTodos, onRemovePressed, onCompletePressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos()
    }, []);

    const loading = (<div>Loading Todos...</div>);
    const content = (
        <div className="list-wrapper">
            <TodoForm />
            <h3>Incomplete:</h3>
            {incompleteTodos.map(todo => <TodoListItem 
                key={todo.text}
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletePressed={onCompletePressed}/>)}
            <h3>Completed:</h3>
            {completedTodos.map(todo => <TodoListItem 
                key={todo.text}
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletePressed={onCompletePressed}/>)}
        </div>
    );
    return isLoading ? loading : content;
}

const mapStateToProps = state => ({
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
    isLoading: getTodosLoading(state)
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: id => dispatch(markTodoAsCompletedRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);