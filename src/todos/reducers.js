import { CREATE_TODO, REMOVE_TODO } from './actions';

export const todos = (state = [], action) => {
    const { type, parload } = action;

    switch (type) {
        case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
                text,
                isCompleted: false
            };
            return state.concat(newTodo);

        }
        case REMOVE_TODO: {
            const { text } = payload;
            return state.filter(todo => todo.text !== text);
        }
        defualt: 
            return state;
    }

}