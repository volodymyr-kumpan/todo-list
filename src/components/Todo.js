import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import { P, Checkbox } from '../ui';
import Colors from '../constants/Colors';

const Todo = ({ todo, onPress }) => (
  <View style={styles.container}>
    <View style={styles.container1}>
      <Checkbox />
    </View>
    <View style={styles.container2}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View>
          <P numberOfLines={1}>{todo.title}</P>
          <P numberOfLines={1} style={styles.description}>{todo.description}</P>
        </View>
      </TouchableWithoutFeedback>
    </View>
  </View>
);
export default Todo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: Colors.Primary,
  },
  container1: {
  },
  container2: {
    flex: 1,
    marginLeft: 10
  },
  description: {
    fontSize: 10,
    color: Colors.Secondary
  }
});

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  onPress: PropTypes.func.isRequired
};