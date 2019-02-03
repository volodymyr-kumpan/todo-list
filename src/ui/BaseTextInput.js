import React from 'react';
import { TextInput } from 'react-native';

import Font from '../constants/Font';
import Colors from '../constants/Colors';

const BaseTextInput = props => (
  <TextInput {...props} style={[
    {
      color: Colors.Dark
    },
    props.style,
    {
      //fontFamily: Font.FontFamily
    }
  ]} />
);

export default BaseTextInput;