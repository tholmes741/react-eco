import React from 'react';
import styled from 'styled-components';

const TodoItemContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;

const TodoItemContainerWarning = styled(TodoItemContainer)`
    border-bottom: ${props => (new Date(props.createdAt) > new Date(Date.now() - 8640000 * 5)
        ? 'none'
        : '2px solid red'
    )};
`;

const ButtonsContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`;

const Button = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
`;

const CompleteButton = styled(Button)`
    background-color: #22ee22;
`;

const RemoveButton = styled(Button)`
    background-color: #ee2222;
    margin-left: 8px;
`;

const TodoText = styled.h3`
    text-decoration: ${props => props.isCompleted ? 'line-through' : 'none'};
`;

const TodoListItem = ({ todo, onRemovePressed, onCompletePressed }) => {
    const Container = todo.isCompleted ? TodoItemContainer : TodoItemContainerWarning;
    return (
        <Container createdAt={todo.createdAt}>
            <TodoText isCompleted={todo.isCompleted}>{todo.text}</TodoText>
            <p>
                Created At:&nbsp;
                {(new Date(todo.createdAt).toLocaleDateString())}
            </p>
            <ButtonsContainer>
                {todo.isCompleted ? null :
                    <CompleteButton 
                        onClick={() => onCompletePressed(todo.id)}
                        >Mark as complete</CompleteButton>
                }
                <RemoveButton
                    onClick={() => onRemovePressed(todo.id)}
                    >Remove</RemoveButton>
            </ButtonsContainer>
        </Container>
    )
};

export default TodoListItem;