import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const BaseButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[props.style, styles.button]}>
        {props.children}
      </View>
    </TouchableOpacity>
  )
};

export default BaseButton;

const styles = StyleSheet.create({
  button: {
    height: 36
  }
});

BaseButton.propTypes = {
  onPress: PropTypes.func.isRequired
};