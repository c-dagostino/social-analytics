import React from 'react';
import { node, string } from 'prop-types';
import styled from 'styled-components';

import colors from './colors';

const propTypes = {
  children: node,
  className: string,
};

const defaultProps = {
  children: null,
  className: '',
};

const Header = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const StyledHeader = styled(Header)`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: ${props =>
    colors[props.color] ? colors[props.color].border : colors.blue.border};
  color: var(--sb-color-white);
  padding: var(--sb-padding-sm);
`;

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default StyledHeader;
