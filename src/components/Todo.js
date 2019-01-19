import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Todo = ({ todo, onDelete }) => (
  <View style={ styles.container }>
    <Text style={ styles.title }>{ todo.title }</Text>
    <TouchableOpacity onPress={ onDelete }>
      <Icon size={ 30 } name='ios-trash' color='#dc3545' />
    </TouchableOpacity>
  </View>
);
export default Todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: '#28a745',
    margin: 10,
    marginBottom: 0,
    padding: 10,
    height:50
  },
  title: {
    fontSize: 16,
    color: '#fff',
  }
});

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired
};