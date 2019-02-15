import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Todo from './Todo';

const TodoList = ({ todos, onPressTodo }) => {
  let todosSorted = todos.sort(function (a, b) {
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
            onPress={() => onPressTodo(item.id)}
          />
        )}
      />
    </View>
  );
};

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