import styled from 'styled-components';
import { bool } from 'prop-types';
import { space, fontSize, fontWeight, color, textStyle } from 'styled-system';

const nowrap = props =>
  props.nowrap
    ? {
        whiteSpace: 'nowrap',
      }
    : null;

const colorStyles = props => {
  const colorRule = {};

  if (props.error) {
    colorRule.color = props.theme.colors.errorRed;
  } else if (props.dimmed) {
    colorRule.color = props.theme.colors.gray3;
  }

  return colorRule;
};

const Label = styled.label(
  props => ({
    display: 'block',
    width: '100%',
    margin: 0,
    fontSize: props.theme.fontSizes[1],
  }),
  space,
  fontSize,
  fontWeight,
  textStyle,
  nowrap,
  color,
  colorStyles,
);

Label.displayName = 'Label';

Label.isLabel = true;

Label.propTypes = {
  error: bool,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...fontWeight.propTypes,
};

Label.defaultProps = {
  error: false,
};

export default Label;
