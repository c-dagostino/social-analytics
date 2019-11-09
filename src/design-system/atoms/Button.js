import styled from 'styled-components';
import { typography, layout } from 'styled-system';
import Box from './Box';

const getBgColor = ({ theme: { colors }, bg, disabled, secondary }) => {
  let backgroundColor = colors.blue1;

  if (secondary) {
    backgroundColor = colors.white;
  }

  if (bg) {
    backgroundColor = colors[bg];
  }

  if (disabled) {
    backgroundColor = colors.gray1;
  }

  return {
    backgroundColor,
  };
};

const getColor = ({
  theme: { colors },
  color: colorProp,
  secondary,
  disabled,
}) => {
  let color = colors.white;

  if (colorProp) {
    color = colorProp;
  }

  if (secondary) {
    color = colors.blue1;

    if (disabled) {
      color = colors.gray3;
    }
  }

  return { color };
};

const getBorder = ({
  theme: { colors },
  secondary,
  border: borderProp,
  disabled,
}) => {
  let borderWidth = 0;
  let borderColor = colors.blue1;

  if (secondary) {
    borderWidth = 1;

    if (disabled) {
      borderColor = colors.gray2;
    }
  }

  return (
    borderProp || {
      borderWidth,
      borderColor,
      borderRadius: '8px',
    }
  );
};

const Button = styled.button(
  props => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '45px',
    paddingRight: '45px',
    height: '48px',
    textTransform: 'uppercase',
    fontWeight: '800',
    fontSize: props.theme.fontSizes[1],
  }),
  getColor,
  getBgColor,
  getBorder,
  layout,
  typography,
);

Button.box = Button.withComponent(Box);

export default Button;
