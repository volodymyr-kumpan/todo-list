import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadTodos } from '../store/actions';
import Todo from './Todo';



class TodoList extends React.Component {
  constructor(props) {
      super(props);
      this.onPressTodo = props.onPressTodo;
      this.onLoadTodos = props.onLoadTodos;
  }

  componentDidMount(){
    this.onLoadTodos();
  }
  
  render() {
    let todosSorted = this.props.todos.sort(function (a, b) {
      return new Date(b.dateCreated) - new Date(a.dateCreated);
    });
    return (
      <View
        style={styles.container}>
        <FlatList
          data={todosSorted}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({ item }) => (
            <Todo
              todo={item}
              onPress={() => this.onPressTodo(item.id)}
            />
          )}
        />
      </View>
    );
  };
};

const mapStateToProps = state => ({
  todos: state.todos.todos
});

const mapDispatchToProps = dispatch => ({
    onLoadTodos: (todo) => dispatch(loadTodos(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

const styles = StyleSheet.create({
  container: {
  }
});

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onPressTodo: PropTypes.func.isRequired
};