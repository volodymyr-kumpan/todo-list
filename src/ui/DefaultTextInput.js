import React from 'react';
import { StyleSheet } from 'react-native';

import BaseTextInput from './BaseTextInput';
import Font from '../constants/Font';
import Colors from '../constants/Colors';

const DefaultTextInput = props => (
  <BaseTextInput {...props} style={[props.style, styles.input]} />
);

export default DefaultTextInput;

const styles = StyleSheet.create({
  input: {
    fontSize: Font.FontSize,
    height: 35,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.Secondary,
    marginBottom: 12
  }
});