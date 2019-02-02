import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import BaseButton from './BaseButton';
import Colors from '../constants/Colors';

const IconButton = props => {
  let color = Colors.Primary;
  if (props.color){
    color = props.color;
  }
  return (
    <BaseButton onPress={props.onPress} style={[props.style, styles.button, {borderColor: color}]}>
      <Icon name={props.icon} size={32} color={color} />
    </BaseButton>
  )
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    width: 36,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 4
  }
});

IconButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired
};