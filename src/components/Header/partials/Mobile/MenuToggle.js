import React, { useRef } from 'react';
import { func, bool, shape } from 'prop-types';

import styled from 'styled-components';

import Popover from '../../../Popover';

import MenuItems from './Menu';

const propTypes = {
  onClickLogout: func.isRequired,
  open: bool,
  onToggle: func,
};

const defaultProps = {
  open: false,
  onToggle: () => {},
};

const StyledButton = styled.a`
  flex: 1;

  img {
    max-width: 23px;
    max-height: 23px;
    cursor: pointer;
  }
`;

const images = {
  open: '//members.sightbox.com/images/sb/sightbox-menu-open.svg',
  close: '//members.sightbox.com/images/sb/sightbox-menu-close.svg',
};

const Menu = ({ anchor, open, onToggle, onClickLogout }) => (
  <Popover open={open} anchor={anchor} closeOnClickOutside onClose={onToggle}>
    <MenuItems onClose={onToggle} onClickLogout={onClickLogout} />
  </Popover>
);

Menu.propTypes = {
  onClickLogout: func.isRequired,
  anchor: shape({}).isRequired,
  onToggle: func.isRequired,
  open: bool.isRequired,
};

const MenuToggle = ({ onToggle, open, onClickLogout }) => {
  const button = useRef();

  return (
    <>
      <StyledButton onClick={onToggle} ref={button}>
        <img alt="" src={open ? images.close : images.open} />
      </StyledButton>
      <Menu
        onClickLogout={onClickLogout}
        anchor={button}
        open={open}
        onToggle={onToggle}
      />
    </>
  );
};

MenuToggle.propTypes = propTypes;
MenuToggle.defaultProps = defaultProps;

export default MenuToggle;
