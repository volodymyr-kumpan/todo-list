import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { updateTodo } from '../store/actions';
import { P, Checkbox } from '../ui';
import Colors from '../constants/Colors';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.props.onPress;
    this.onUpdateTodo = this.props.onUpdateTodo;
  }

  onChangeValueHandler = (value) => {
    this.onUpdateTodo({
      ...this.props.todo,
      isCompleated: value
    });
  }

  render() {
    let title = null;
    if (this.props.todo.title) {
      title = (
        <P numberOfLines={1}
          style={{ textDecorationLine: this.props.todo.isCompleated ? 'line-through' : 'none' }}
        >{this.props.todo.title}</P>
      );
    }
    let description = null;
    if (this.props.todo.description) {
      description = (
        <P numberOfLines={1} style={styles.description}>{this.props.todo.description}</P>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          <Checkbox value={this.props.todo.isCompleated} onChangeValue={this.onChangeValueHandler} />
        </View>
        <View style={styles.container2}>
          <TouchableWithoutFeedback onPress={this.onPress}>
            <View>
              {title}
              {description}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  onUpdateTodo: (todo) => dispatch(updateTodo(todo))
});

export default connect(
  null,
  mapDispatchToProps
)(Todo);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: Colors.Primary,
    height: 50
  },
  container1: {
    width: 36,
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    marginLeft: 6
  },
  description: {
    fontSize: 12,
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