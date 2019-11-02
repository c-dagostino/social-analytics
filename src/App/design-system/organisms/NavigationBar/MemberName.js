import React from 'react';
import { string } from 'prop-types';

import { Box } from '../../atoms';

const propTypes = {
  memberFirstName: string,
};

const defaultProps = {
  memberFirstName: null,
};

const loadingBox = (
  <Box height="28px" width="60px" borderRadius="2px" backgroundColor="shadow" />
);

const MemberName = ({ memberFirstName }) => (
  <Box fontSize="18px">{memberFirstName || loadingBox}</Box>
);

MemberName.propTypes = propTypes;
MemberName.defaultProps = defaultProps;

export default MemberName;
