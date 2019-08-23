import { LOAD_TODOS, CREATE_TODO, UPDATE_TODO, DELETE_TODO } from './actionTypes';
import { uiStartLoading, uiStopLoading } from './index';
import AppSettings from '../../constants/AppSettings';

const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjI2OGNhNTBjZTY0YjQxYWIzNGZhMDM1NzIwMmQ5ZTk0ZTcyYmQ2ZWMiLCJ0eXAiOiJKV1QifQ.eyJwcm92aWRlcl9pZCI6ImFub255bW91cyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS90b2RvLWxpc3QtZWZiODUiLCJhdWQiOiJ0b2RvLWxpc3QtZWZiODUiLCJhdXRoX3RpbWUiOjE1NjYzNjQ4ODgsInVzZXJfaWQiOiJ6WmFxMGlSdkJPYnhnQnp2N21najh2WkIySlUyIiwic3ViIjoielphcTBpUnZCT2J4Z0J6djdtZ2o4dlpCMkpVMiIsImlhdCI6MTU2NjQ1MTg0MSwiZXhwIjoxNTY2NDU1NDQxLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7fSwic2lnbl9pbl9wcm92aWRlciI6ImFub255bW91cyJ9fQ.CxIzNRPo54YHepci2MNF4QG9RU_YYOvpKRLTH_WmmtukZ8ZgFQ3yaeIO9ke4kWXNyHML-DtJ7M9ZNR0sxW60wMPl_HXmx_KNw_wu55DMcFRsNL2ziWD1UbHJOSq-0hNusqKXCKoh6Yaz_-2CnBq-L3X8v1ApFJ3oXdR7eC3dygUqyodd9_RsUBTBRzv09Ohx47bk4sWC7IvDk0Noonf5fzbVyiSNSC4eh7bAY-LP_1e1eLVNRSsOOB-DsSC7xdk95KjmidaEzwrJU1Z0FoNx7xY57vDuHJ7JE1S9th0o46-KzhivmSG-eeuLM-BHq8Jg3ZoEOHecIYhmAKTK2hkzbw';
const uid = 'zZaq0iRvBObxgBzv7mgj8vZB2JU2';

export const loadTodos = () => {
    return dispatch => {
        dispatch(uiStartLoading());
        fetch(AppSettings.ApiEndpoint + '/' + uid + '/todos.json?auth=' + token)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error();
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
        fetch(AppSettings.ApiEndpoint + '/' + uid + '/todos.json?auth=' + token, {
            method: "POST",
            body: JSON.stringify(newTodo)
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
        fetch(AppSettings.ApiEndpoint + '/' + uid + '/todos/' + updatedTodo.id + '.json?auth=' + token, {
            method: "PATCH",
            body: JSON.stringify(updatedTodo)
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
        fetch(AppSettings.ApiEndpoint + '/' + uid + '/todos/' + id + '.json?auth=' + token, {
            method: "DELETE"
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