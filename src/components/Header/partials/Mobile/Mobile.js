import React, { useState } from 'react';
import styled from 'styled-components';
import { func, string } from 'prop-types';

import Logo from './Logo';
import MenuToggle from './MenuToggle';

const propTypes = {
  onClickLogout: func.isRequired,
  className: string,
};

const defaultProps = {
  className: '',
};

const Mobile = ({ className, onClickLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={className}>
      <MenuToggle
        open={menuOpen}
        onToggle={toggleMenu}
        onClickLogout={onClickLogout}
      />
      <Logo />
      <div style={{ flex: 1 }} />
    </div>
  );
};

const StyledMobile = styled(Mobile)`
  display: flex;
  margin: 15px;
`;

Mobile.propTypes = propTypes;
Mobile.defaultProps = defaultProps;

export default StyledMobile;
