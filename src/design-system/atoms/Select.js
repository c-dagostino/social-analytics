import React from 'react';
import { string, bool } from 'prop-types';
import styled from 'styled-components';
import { space, fontSize } from 'styled-system';

import Box from './Box';
import Icon from './Icon';
import borders from './system';

const IconWrapper = styled(Box)({
  'pointer-events': 'none',
});

const SelectElement = styled.select(
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
    paddingRight: '32px',
    margin: '0',
  }),
  borders,
  space,
  fontSize,
);

const Select = props => (
  <Box display="flex">
    <SelectElement {...props} />
    <IconWrapper ml="-28px" mt="18px">
      <Icon size={14} name="ChevronDown" />
    </IconWrapper>
  </Box>
);

Select.displayName = 'Select';

Select.isField = true;

Select.propTypes = {
  id: string.isRequired,
  error: bool,
  ...borders.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
};

Select.defaultProps = {
  error: false,
};

export default Select;
