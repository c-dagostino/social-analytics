import { createElement } from 'react';
import { oneOf, string, node } from 'prop-types';
import styled from 'styled-components';

import colors from './colors';

const propTypes = {
  color: oneOf(Object.keys(colors)),
  className: string,
  children: node,
  as: string,
  title: string,
};

const defaultProps = {
  color: 'white',
  className: '',
  children: null,
  title: '',
  as: 'div',
};

const Panel = ({ as, children, className, ...otherProps }) =>
  createElement(as, { className, ...otherProps }, children);

const StyledPanel = styled(Panel)`
  border: 1px solid
    ${props =>
      colors[props.color]
        ? colors[props.color].border
        : colors.blue.border} !important;
  border-radius: 16px;
  background: ${props =>
    colors[props.color] ? colors[props.color].bg : colors.blue.bg};
`;

Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;

export default StyledPanel;
