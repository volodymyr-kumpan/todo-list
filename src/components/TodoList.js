import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Todo from './Todo';

const TodoList = ({ todos, onPressTodo }) => (
  <View
    style={styles.container}>
    <FlatList
      data={todos}
      keyExtractor={(item, index) => item.id.toString()}
      renderItem={({ item }) => (
        <Todo
          todo={item}
          onPress={() => onPressTodo(item.id)}
        />
      )}
    />
  </View>
);

const mapStateToProps = state => ({
  todos: state.todos.todos
});

export default connect(
  mapStateToProps,
  null
)(TodoList);

const styles = StyleSheet.create({
  container: {
  }
});

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onPressTodo: PropTypes.func.isRequired
};