import { string, bool } from 'prop-types';
import styled from 'styled-components';
import { space, fontSize } from 'styled-system';

import borders from './system';

const Input = styled.input(
  props => ({
    appearance: 'none',
    display: 'block',
    width: '100%',
    fontFamily: 'inherit',
    fontSize: props.theme.fontSizes[2],
    lineHeight: '23px',
    color: props.theme.colors.gray4,
    backgroundColor: 'transparent',
    borderRadius: props.theme.radius,
    borderWidth: '1px',
    borderStyle: 'solid',
    paddingTop: '11px',
    paddingBottom: '11px',
    paddingLeft: '14px',
    paddingRight: '12px',
    margin: '0',

    '::placeholder': {
      color: props.theme.colors.gray3,
    },

    '::-ms-clear': {
      display: 'none',
    },
  }),
  borders,
  space,
  fontSize,
);

Input.displayName = 'Input';

Input.isField = true;

Input.propTypes = {
  id: string.isRequired,
  color: string,
  error: bool,
  ...borders.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
};

Input.defaultProps = {
  error: false,
};

export default Input;
