import React from 'react';
import { Text } from 'react-native';

import Font from '../constants/Font';
import Colors from '../constants/Colors';

const BaseText = props => (
  <Text {...props} style={[
    {
      color: Colors.Dark
    },
    props.style,
    {
      fontFamily: Font.FontFamily
    }
  ]} />
);

export default BaseText;