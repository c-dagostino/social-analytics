import React from 'react';
import styled from 'styled-components';

import { MSG } from '../../containers/constants';

const ErrorWrapper = styled('div')({
  ul: {
    marginTop: '3px',
  },
  li: {
    marginLeft: '16px',
  },
  'ul, li': {
    listStyleType: 'disc',
  },
});

const PasswordErrorMessage = () => {
  return (
    <ErrorWrapper>
      {MSG.MSG_PASSWORD_STRENGTH_HEADER}
      <ul>
        <li>{MSG.MSG_PASSWORD_STRENGTH_A}</li>
        <li>{MSG.MSG_PASSWORD_STRENGTH_B}</li>
        <li>
          {MSG.MSG_PASSWORD_STRENGTH_C}
        </li>
      </ul>
    </ErrorWrapper>
  );
};

export default PasswordErrorMessage;
