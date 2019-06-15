import { LOAD_TODOS, CREATE_TODO, UPDATE_TODO, DELETE_TODO } from './actionTypes';
import { uiStartLoading, uiStopLoading } from './index'

export const loadTodos = () => {
    return dispatch => {
        dispatch(uiStartLoading());
        fetch("https://todo-list-efb85.firebaseio.com/todos.json")
        .catch(err => {
            dispatch(uiStopLoading());
            console.log(err);
        })
        .then(res => res.json())
        .then(parseRes => {
            console.log(parseRes);
            const todos = [];
            for (let key in parseRes){
                todos.push({
                    ...parseRes[key],
                    id: key
                });
            }
            dispatch({
                type: LOAD_TODOS,
                todos: todos
            });
            dispatch(uiStopLoading());
        })
    }
};

export const createTodo = (todo) => {
    return dispatch => {
        const newTodo = {
            ...todo,
            isCompleated: false,
            dateCreated: new Date().toLocaleString()
        };
        fetch("https://todo-list-efb85.firebaseio.com/todos.json", {
            method: "POST",
            body: JSON.stringify(newTodo)
        })
        .catch(err => console.log(err))
        .then(res => res.json())
        .then(parseRes => {
            console.log(parseRes);
            dispatch({
                type: CREATE_TODO,
                todo: {
                    ...newTodo,
                    id: parseRes.name
                }
            });
        });
    }
};

export const updateTodo = (todo) => {
    return dispatch => {
        let updatedTodo = {
            ...todo,
            dateCompleated: todo.isCompleated ? new Date().toLocaleString() : null
        };
        dispatch({
            type: UPDATE_TODO,
            todo: updatedTodo
        });
        fetch("https://todo-list-efb85.firebaseio.com/todos/" + updatedTodo.id + ".json", {
            method: "PATCH",
            body: JSON.stringify(updatedTodo)
        })
        .catch(err => console.log(err))
        .then(res => res.json())
        .then(parseRes => {
            console.log(parseRes);
        });
    };
};

export const deleteTodo = (id) => {
    return dispatch => {
        dispatch({
            type: DELETE_TODO,
            id
        });
        fetch("https://todo-list-efb85.firebaseio.com/todos/" + id + ".json", {
            method: "DELETE"
        })
        .catch(err => console.log(err))
        .then(res => res.json())
        .then(parseRes => {
            console.log(parseRes);
        });
    };
};