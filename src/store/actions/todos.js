import { CREATE_TODO, UPDATE_TODO, DELETE_TODO } from './actionTypes';

export const createTodo = (todo) => {
    return {
        type: CREATE_TODO,
        todo
    };
};

export const updateTodo = (todo) => {
    return {
        type: UPDATE_TODO,
        todo
    };
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    };
};