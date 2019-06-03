import React from 'react';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/Colors';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  onChangeValueHandler = () => {
    this.setState(previousState => (
      { value: !previousState.value }
    ), () => {
      if (this.props.onChangeValue) {
        this.props.onChangeValue(this.state.value);
      }
    });
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  render() {
    let icon = 'md-square-outline';
    if (this.state.value) {
      icon = 'md-checkbox';
    }
    return (
      <TouchableWithoutFeedback onPress={this.onChangeValueHandler}>
        <View style={styles.checkbox}>
          <Icon name={icon} size={24} color={Colors.Primary} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

const styles = StyleSheet.create({
  checkbox: {
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Checkbox;