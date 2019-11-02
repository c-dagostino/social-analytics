import React from 'react';
import { bool, number, string } from 'prop-types';
import styled from 'styled-components';
import Icon from './Icon';
import Box from './Box';

const CheckboxIcon = styled(Icon)(props => ({
  'pointer-events': 'none',
  fill: props.theme.colors.white,
}));

const StyledCheckBox = styled(Box)(props => ({
  cursor: 'pointer',
  lineHeight: 0,
  verticalAlign: 'middle',
  display: 'inline-block',
  'svg[data-name="checked"]': {
    display: 'none',
  },
  '> input:checked': {
    '& ~ svg[data-name="checked"]': {
      display: 'inline-block',
    },
    '& ~ svg[data-name="not-checked"]': {
      display: 'none',
    },
  },
  '> input:not(checked)': {
    '& ~ svg[data-name="unchecked-error"]': {
      '> rect': {
        stroke: props.theme.colors.errorRed,
      },
    },
  },
  '> input:focus': {
    '& ~ svg[data-name*="checked"]': {
      filter: `drop-shadow(0px 0px 2px ${props.theme.colors.blue1}50)`,
      '> rect': {
        stroke: props.theme.colors.blue1,
      },
    },
  },
}));

const HiddenCheckbox = styled.input({
  appearance: 'none',
  opacity: '0',
  position: 'absolute',
  zIndex: '0',
});

const Checkbox = ({ disabled, error, size, name, ...props }) => (
  <StyledCheckBox disabled={disabled}>
    <HiddenCheckbox
      disabled={disabled}
      type="checkbox"
      name={name}
      id={name}
      {...props}
    />
    {error ? (
      <CheckboxIcon data-name="unchecked-error" name="Box" size={size} />
    ) : (
      <>
        <CheckboxIcon data-name="not-checked" name="Box" size={size} />
        <CheckboxIcon data-name="checked" name="BoxChecked" size={size} />
      </>
    )}
  </StyledCheckBox>
);

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  disabled: bool,
  error: bool,
  size: number,
  name: string.isRequired,
};

Checkbox.defaultProps = {
  disabled: false,
  error: false,
  size: 28,
};

export default Checkbox;
