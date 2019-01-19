import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet } from 'react-native';

import Todo from './Todo';

const TodoList = ({ todos, onDeleteTodo }) => (
  <FlatList
    style={ styles.container }
    data={ todos }
    keyExtractor={ (item, index) => item.id.toString() }
    renderItem={ ({ item }) => (
      <Todo
        todo={ item }
        onDelete={ () => onDeleteTodo(item.id) }
      />
    ) }
  />
);

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onDeleteTodo: PropTypes.func.isRequired
};