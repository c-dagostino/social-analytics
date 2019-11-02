import React from 'react';
import { node } from 'prop-types';
import { Tooltip, Box } from '../../atoms';

const propTypes = {
  children: node,
};

const defaultProps = {
  children: null,
};

const ShareSaveCallout = ({ children }) => {
  // Collapse down to "Share" on mobile.
  const title = (
    <>
      <Box display={['block', 'none']}>Share</Box>
      <Box display={['none', 'block']}>Share & Save</Box>
    </>
  );

  return (
    <Tooltip open title={title} placement="left-start">
      <div>{children}</div>
    </Tooltip>
  );
};

ShareSaveCallout.propTypes = propTypes;
ShareSaveCallout.defaultProps = defaultProps;

export default ShareSaveCallout;
