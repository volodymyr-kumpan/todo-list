import { CREATE_TODO, UPDATE_TODO, DELETE_TODO } from '../actions/actionTypes';

const initialState = {
  todos: [
    {
      id: Math.random(),
      title: 'Title',
      description: 'Description',
      isCompleated: false,
      dateCreated: Date.now()
    },
    {
      id: Math.random(),
      title: 'Very very very very very very very very veryvery very very very very veryvery very very very very veryvery very very very very very very very very very very looong title',
      description: 'And very very very very very very very very very very very very looong description',
      isCompleated: true,
      dateCreated: Date.now()
    }
  ]
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            ...action.todo,
            id: Math.random(),
            isCompleated: false,
            dateCreated: Date.now()
          }
        ]
      }
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