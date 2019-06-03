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
            dateCreated: Date.now()
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
        dispatch({
            type: UPDATE_TODO,
            todo
        });
        fetch("https://todo-list-efb85.firebaseio.com/todos/" + todo.id + ".json", {
            method: "PATCH",
            body: JSON.stringify(todo)
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