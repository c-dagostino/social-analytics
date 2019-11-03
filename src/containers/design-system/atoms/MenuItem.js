import React, { useContext } from 'react';
import { func, node } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeContext } from 'styled-components';
import MaterialMenuItem from '@material-ui/core/MenuItem';

const propTypes = {
  children: node,
  onClick: func,
};

const defaultProps = {
  children: null,
  onClick: null,
};

const useMenuItemStyles = makeStyles(() => ({
  root: ({ colors, fonts }) => ({
    fontFamily: fonts.sofia,
    '&:hover': {
      backgroundColor: colors.hover,
    },
  }),
}));

const MenuItem = ({ onClick, children }) => {
  const theme = useContext(ThemeContext);
  const classes = useMenuItemStyles(theme);

  return (
    <MaterialMenuItem disableRipple onClick={onClick} classes={classes}>
      {children}
    </MaterialMenuItem>
  );
};

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;

export default MenuItem;
