import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import BaseButton from './BaseButton';
import DefaultText from './DefaultText';
import Colors from '../constants/Colors';

const TextButton = props => {
  return (
    <BaseButton onPress={props.onPress} style={[props.style, styles.button]}>
      <DefaultText style={styles.text}>
        {props.text}
      </DefaultText>
    </BaseButton>
  )
};

export default TextButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.Primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: Colors.Primary,
    borderRadius: 4
  },
  text: {
    color: Colors.TextWhite,
  }
});

TextButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};