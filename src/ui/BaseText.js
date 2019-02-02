import React from 'react';
import { Text } from 'react-native';

import Font from '../constants/Font';

const BaseText = props => (
  <Text {...props} style={[props.style, {
    //fontFamily: Font.FontFamily
  }]} />
);

export default BaseText;