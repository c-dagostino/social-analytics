import React from 'react';
import { arrayOf, oneOfType, instanceOf, string } from 'prop-types';
import ReactTextMask from 'react-text-mask';

import Input from './Input';

const MaskedInput = ({ ...props }) => (
  <ReactTextMask
    guide={false}
    {...props}
    render={(ref, p) => <Input {...p} ref={ref} />}
  />
);

MaskedInput.propTypes = {
  name: string.isRequired,
  mask: arrayOf(oneOfType([instanceOf(RegExp), string])),
};

MaskedInput.defaultProps = {
  mask: [],
};

export default MaskedInput;
