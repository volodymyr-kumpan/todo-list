import { CREATE_TODO, READ_TODO, UPDATE_TODO, DELETE_TODO } from './actionTypes';

export const createTodo = (todo) => {
    return {
        type: CREATE_TODO,
        todo
    };
};

export const readTodo = (id) => {
    return {
        type: READ_TODO,
        id
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