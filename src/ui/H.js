import React from 'react';

import BaseText from './BaseText';
import Font from '../constants/Font';

export const H1 = props => (
  <BaseText {...props} style={[props.style, { fontSize: Font.FontSize*2, marginVertical: Font.MarginVertical, fontWeight: 'bold' }]} />
);

export const H2 = props => (
  <BaseText {...props} style={[props.style, { fontSize: Font.FontSize*1.5, marginVertical: Font.MarginVertical, fontWeight: 'bold' }]} />
);

export const H3 = props => (
  <BaseText {...props} style={[props.style, { fontSize: Font.FontSize*1.17, marginVertical: Font.MarginVertical, fontWeight: 'bold' }]} />
);

export const H4 = props => (
  <BaseText {...props} style={[props.style, { fontSize: Font.FontSize, marginVertical: Font.MarginVertical, fontWeight: 'bold' }]} />
);

export const H5 = props => (
  <BaseText {...props} style={[props.style, { fontSize: Font.FontSize*0.83, marginVertical: Font.MarginVertical, fontWeight: 'bold' }]} />
);

export const H6 = props => (
  <BaseText {...props} style={[props.style, { fontSize: Font.FontSize*0.67, marginVertical: Font.MarginVertical, fontWeight: 'bold' }]} />
);