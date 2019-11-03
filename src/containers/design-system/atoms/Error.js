import styled from 'styled-components';
import { space, color, typography } from 'styled-system';

const colorAttr = props => ({ color: props.theme.colors.errorRed });

const Error = styled.div(
  props => ({
    fontFamily: props.theme.fonts.sofia,
    fontSize: '12px',
    fontWeight: 'normal',
    textTransform: 'initial',
    a: {
      color: props.theme.colors.errorRed,
      textDecoration: 'underline',
    },
  }),
  space,
  colorAttr,
  color,
  typography,
);

Error.propTypes = {
  ...space.propTypes,
  ...colorAttr.propTypes,
  ...color.propTypes,
  ...typography.propTypes,
};

export default Error;
