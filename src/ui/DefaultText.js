import React from 'react';

import BaseText from './BaseText';
import Font from '../constants/Font';

const DefaultText = props => (
  <BaseText {...props} style={[props.style, { fontSize: Font.FontSize }]} />
);

export default DefaultText;