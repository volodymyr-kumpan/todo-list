import React from 'react';

import P from './P';

const B = props => (
  <P {...props} style={[props.style, { fontWeight: 'bold' }]} />
);

export default B;