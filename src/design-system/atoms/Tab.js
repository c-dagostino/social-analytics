import React from 'react';
import { string, node, bool, func, oneOf } from 'prop-types';
import styled from 'styled-components';

import Box from './Box';

const propTypes = {
  onClick: func.isRequired,
  href: string,
  children: node,
  active: bool,
  size: oneOf(['small', 'large']),
};

const defaultProps = {
  href: '',
  children: null,
  active: false,
  size: 'large',
};

const getPadding = size => {
  let padding;

  if (size === 'large') {
    padding = '23px 30px';
  } else if (size === 'small') {
    padding = '8px 18px';
  }

  return padding;
};

const Wrapper = styled(Box)(props => {
  const { illustrationBlue } = props.theme.colors;
  return {
    padding: getPadding(props.size),
    fontFamily: props.theme.fonts.sofia,
    fontSize: '18px',
    borderBottomColor: props.active ? illustrationBlue : 'transparent',
    borderBottomStyle: 'solid',
    borderBottomWidth: '2px',
    '&:hover': {
      color: illustrationBlue,
    },
    ...props,
  };
});

const Tab = ({ children, onClick, href, ...rest }) => (
  <Wrapper onClick={onClick} role="button" tabIndex={0} {...rest}>
    {children}
  </Wrapper>
);

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

const StyledTab = styled(Tab)`
  cursor: pointer;
`;

export default StyledTab;
