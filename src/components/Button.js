import React from 'react';
import { oneOf, func, node, bool, string } from 'prop-types';

import styled from 'styled-components';

const propTypes = {
  type: oneOf(['button', 'submit', 'reset']),
  onClick: func,
  children: node,
  className: string,
  primary: bool,
  block: bool,
};

const defaultProps = {
  onClick: () => {},
  children: null,
  type: 'button',
  className: '',
  primary: false,
  block: false,
};

const Button = ({
  children,
  type,
  onClick,
  className,
  primary,
  block,
  ...rest
}) => (
  <button // eslint-disable-line react/button-has-type
    type={type}
    className={className}
    onClick={onClick}
    primary={primary.toString()}
    {...rest}
  >
    {children}
  </button>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

const StyledButton = styled(Button)`
  padding: var(--sb-padding-sm);
  border: 1px solid var(--sb-color-secondary);
  background: var(--sb-color-secondary);
  border-radius: var(--sb-border-radius-sm);
  color: var(--sb-color-white);
  font-weight: var(--sb-font-weight);
  font-size: var(--sb-font-size);
  cursor: pointer;

  ${({ block }) =>
    block &&
    `
    padding: 15px 40px;
    font-weight: bold;
    letter-spacing: 2px;
    font-family: 'Poppins';
    text-transform: uppercase;
    line-height: 20px;
  `}

  &:focus {
    // Remove Chrome focus outline
    outline: 0;
  }

  &[disabled] {
    background: var(--sb-color-gray-3);
    border: 1px solid var(--sb-color-gray-3);
    cursor: default;
  }
}`;

export default StyledButton;
