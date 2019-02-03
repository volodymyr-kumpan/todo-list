import React from 'react';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/Colors';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false
    };
  }

  onChangeValueHandler = () => {
    this.setState(previousState => (
      { value: !previousState.value }
    ));
  }

  render() {
    let icon = 'md-square-outline';
    if (this.state.value) {
      icon = 'md-checkbox-outline';
    }
    return (
      <TouchableWithoutFeedback onPress={this.onChangeValueHandler}>
        <View style={styles.checkbox}>
          <Icon name={icon} size={24} color={Colors.Secondary} />
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