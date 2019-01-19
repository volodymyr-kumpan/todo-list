import { connect } from 'react-redux';

import CreateTodo from '../components/CreateTodo';

import { createTodo } from '../store/actions';

const mapDispatchToProps = dispatch => ({
  onCreateTodo: (todo) => dispatch(createTodo(todo))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateTodo);