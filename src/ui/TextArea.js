import React from 'react';
import { StyleSheet } from 'react-native';

import BaseTextInput from './BaseTextInput';
import Font from '../constants/Font';
import Colors from '../constants/Colors';

const TextArea = props => (
  <BaseTextInput
    {...props} 
    multiline={true}
    numberOfLines={4}
    style={[props.style, styles.input]} />
);

export default TextArea;

const styles = StyleSheet.create({
  input: {
    fontSize: Font.FontSize,
    textAlignVertical: 'top',
    height: 82,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.Secondary,
    marginBottom: 12
  }
});