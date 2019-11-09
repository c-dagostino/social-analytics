import React from 'react';
import { func, node, string } from 'prop-types';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const propTypes = {
  className: string,
  children: node,
  onClose: func,
};

const defaultProps = {
  className: '',
  children: null,
  onClose: null,
};

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: gray;
  opacity: 0.6;

  ${props => props.onClick && 'cursor: pointer;'}
`;

const ModalContainer = styled.div`
  font-family: var(--sb-font-family);
  position: fixed;
  width: 500px;
  height: 300px;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  display: block;
`;

const Modal = ({ children, onClose, className }) => {
  const portal = (
    <div>
      <StyledOverlay onClick={onClose} />
      <ModalContainer className={className}>{children}</ModalContainer>
    </div>
  );

  return createPortal(portal, document.body);
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
