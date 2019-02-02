import React from 'react';

import DefaultText from './DefaultText';
import Font from '../constants/Font';

const P = props => (
  <DefaultText {...props} style={[props.style, { marginVertical: Font.MarginVertical }]} />
);

export default P;