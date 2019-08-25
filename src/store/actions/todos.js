import { LOAD_TODOS, CREATE_TODO, UPDATE_TODO, DELETE_TODO } from './actionTypes';
import { uiStartLoading, uiStopLoading, getToken } from './index';
import AppSettings from '../../constants/AppSettings';

export const loadTodos = () => {
    return dispatch => {
        dispatch(uiStartLoading());
        getToken()
        .then(token => {
            return fetch(AppSettings.ApiEndpoint + '/' + token.userId + '/todos.json?auth=' + token.token);
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
        .then(parsedResponse => {
            const todos = [];
            for (let key in parsedResponse) {
                todos.push({
                    ...parsedResponse[key],
                    id: key
                });
            }
            dispatch({
                type: LOAD_TODOS,
                todos: todos
            });
            dispatch(uiStopLoading());
        })
        .catch(error => {
            dispatch(uiStopLoading());
            alert(error);
        });
    }
};

export const createTodo = (todo) => {
    return dispatch => {
        dispatch(uiStartLoading());
        const newTodo = {
            ...todo,
            isCompleated: false,
            dateCreated: new Date().toLocaleString()
        };
        getToken()
        .then(token => {
            return fetch(AppSettings.ApiEndpoint + '/' + token.userId + '/todos.json?auth=' + token.token, {
                method: "POST",
                body: JSON.stringify(newTodo)
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error();
            }
        })
        .then(parsedResponse => {
            dispatch({
                type: CREATE_TODO,
                todo: {
                    ...newTodo,
                    id: parsedResponse.name
                }
            });
            dispatch(uiStopLoading());
        })
        .catch(error => {
            dispatch(uiStopLoading());
            alert(error);
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
        getToken()
        .then(token => {
            return fetch(AppSettings.ApiEndpoint + '/' + token.userId + '/todos/' + updatedTodo.id + '.json?auth=' + token.token, {
                method: "PATCH",
                body: JSON.stringify(updatedTodo)
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error();
            }
        })
        .then(parsedResponse => {
        })
        .catch(error => {
            alert(error);
            //dispatch out of sync -> reload app
        });
    };
};

export const deleteTodo = (id) => {
    return dispatch => {
        dispatch({
            type: DELETE_TODO,
            id
        });
        getToken()
        .then(token => {
            return fetch(AppSettings.ApiEndpoint + '/' + token.userId + '/todos/' + id + '.json?auth=' + token.token, {
                method: "DELETE"
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error();
            }
        })
        .then(parsedResponse => {
        })
        .catch(error => {
            alert(error);
            //dispatch out of sync -> reload app
        });
    };
};