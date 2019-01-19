import { connect } from 'react-redux';

import TodoList from '../components/TodoList';

import { deleteTodo } from '../store/actions';

const mapStateToProps = state => ({
  todos: state.todos.todos
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: (id) => dispatch(deleteTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);