import React from 'react';
import styled from 'styled-components';
import { bool, func, string } from 'prop-types';

import Modal from '../Modal';
import Panel from '../Panel';
import Button from '../Button';

const propTypes = {
  onConfirm: func.isRequired,
  onCancel: func.isRequired,
  cancelText: string,
  confirmText: string,
  message: string,
  open: bool,
};

const defaultProps = {
  message: 'Are you sure?',
  confirmText: 'Yes',
  cancelText: 'No',
  open: false,
};

const StyledActions = styled.div`
  display: flex;
  text-align: center;
`;

const StyledModal = styled(Modal)`
  width: 300px;
`;

const StyledMessage = styled.h2`
  text-align: center;
  color: var(--sb-color-gray-2);
  margin: 30px;
`;

const StyledButton = styled(Button)`
  margin-left: 5px;
  margin-right: 5px;
  flex: 1;
`;

const ConfirmationModal = ({
  open,
  onConfirm,
  onCancel,
  message,
  confirmText,
  cancelText,
}) => {
  let jsx = null;

  if (open) {
    jsx = (
      <StyledModal>
        <Panel>
          <Panel.Content>
            <StyledMessage>{message}</StyledMessage>
            <StyledActions>
              <StyledButton onClick={onCancel}>{cancelText}</StyledButton>
              <StyledButton onClick={onConfirm}>{confirmText}</StyledButton>
            </StyledActions>
          </Panel.Content>
        </Panel>
      </StyledModal>
    );
  }

  return jsx;
};

ConfirmationModal.propTypes = propTypes;
ConfirmationModal.defaultProps = defaultProps;

export default ConfirmationModal;
