import React from 'react';
import { TextInput } from 'react-native';

import Font from '../constants/Font';

const BaseTextInput = props => (
  <TextInput {...props} style={[props.style, {
    //fontFamily: Font.FontFamily
  }]} />
);

export default BaseTextInput;