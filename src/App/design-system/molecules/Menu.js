import React, { useContext } from 'react';
import { func, node, bool } from 'prop-types';

import MaterialMenu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeContext } from 'styled-components';

const propTypes = {
  children: node,
  anchorEl: node,
  open: bool,
  onClose: func,
};

const defaultProps = {
  children: null,
  anchorEl: null,
  open: false,
  onClose: func,
};

const useMenuStyles = makeStyles(() => ({
  paper: ({ borders }) => ({
    marginTop: '10px',
    border: borders.container,
    minWidth: '200px',
  }),
}));

const Menu = ({ anchorEl, open, onClose, children }) => {
  const theme = useContext(ThemeContext);
  const classes = useMenuStyles(theme);

  return (
    <MaterialMenu
      open={open}
      anchorEl={anchorEl}
      PopoverClasses={classes}
      onClose={onClose}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        horizontal: 'right',
        vertical: 'top',
      }}
    >
      {children}
    </MaterialMenu>
  );
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
