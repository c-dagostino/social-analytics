import React, { useState } from 'react';
import { func, string } from 'prop-types';

import ConfirmationModal from '../ConfirmationModal';

import './styles.css';

import { NavigationBar } from '../../design-system/organisms';

const propTypes = {
  currentPath: string.isRequired,
  onLogOut: func.isRequired,
  onClickPage: func.isRequired,
  memberFirstName: string,
};

const defaultProps = {
  memberFirstName: '',
};

const Header = ({ onLogOut, currentPath, onClickPage, memberFirstName }) => {
  const [confirmingLogout, setConfirmingLogout] = useState(false);
  const onClickLogout = e => {
    e.preventDefault();

    setConfirmingLogout(true);
  };

  const onConfirmLogout = () => {
    setConfirmingLogout(false);
    onLogOut();
  };

  return (
    <>
      <ConfirmationModal
        message="Are you sure you want to log out?"
        confirmText="Log out"
        cancelText="Cancel"
        open={confirmingLogout}
        onConfirm={onConfirmLogout}
        onCancel={() => setConfirmingLogout(false)}
      />
      <NavigationBar
        onClickPage={onClickPage}
        currentPath={currentPath}
        memberFirstName={memberFirstName}
        tabs={[
          { title: 'Tweets', path: '/tweets' },
        ]}
        menuItems={[{ title: 'Log out', onClick: onClickLogout }]}
      />
    </>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
