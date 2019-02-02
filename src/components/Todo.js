import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import { P } from '../ui';
import Colors from '../constants/Colors';

const Todo = ({ todo, onPress }) => (
  <View style={styles.container}>
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <P numberOfLines={1}>{todo.title}</P>
        <P numberOfLines={1}>{todo.description}</P>
      </View>
    </TouchableWithoutFeedback>
  </View>
);
export default Todo;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: Colors.Primary,
  }
});

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  onPress: PropTypes.func.isRequired
};