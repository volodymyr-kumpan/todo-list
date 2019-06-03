import { LOAD_TODOS, CREATE_TODO, UPDATE_TODO, DELETE_TODO } from '../actions/actionTypes';

const initialState = {
  todos: []
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TODOS:
      return {
        ...state,
        todos: action.todos
      };      
    case CREATE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.todo
        ]
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.todo.id) {
            return action.todo;
          }
          return todo;
        })
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return todo.id !== action.id;
        })
      };
    default:
      return state;
  }
};

export default todos;