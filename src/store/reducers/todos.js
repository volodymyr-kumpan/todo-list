import { CREATE_TODO, UPDATE_TODO, DELETE_TODO, CLOSE_TODO } from '../actions/actionTypes';

const initialState = {
  todos: []
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Math.random(),
            title: action.todo.title
          }
        ]
      }
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.todo.id) {
            return {
              ...todo,
              title: action.todo.title
            }
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
    case CLOSE_TODO:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default todos;