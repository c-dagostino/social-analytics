import React, { useState, useContext } from 'react';
import { bool, string, arrayOf } from 'prop-types';

import { ThemeContext } from 'styled-components';
import MaterialTooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

const propTypes = {
  open: bool,
  placement: string,
  title: string,
  children: arrayOf(string),
};

const defaultProps = {
  open: true,
  placement: 'left-start',
  title: null,
  children: null,
};

const arrowGenerator = color => ({
  '&[x-placement*="bottom"] $arrow': {
    top: 0,
    left: 0,
    marginTop: '-0.95em',
    width: '2em',
    height: '1em',
    '&::before': {
      borderWidth: '0 1em 1em 1em',
      borderColor: `transparent transparent ${color} transparent`,
    },
  },
  '&[x-placement*="top"] $arrow': {
    bottom: 0,
    left: 0,
    marginBottom: '-0.95em',
    width: '2em',
    height: '1em',
    '&::before': {
      borderWidth: '1em 1em 0 1em',
      borderColor: `${color} transparent transparent transparent`,
    },
  },
  '&[x-placement*="right"] $arrow': {
    left: 0,
    marginLeft: '-0.95em',
    height: '2em',
    width: '1em',
    '&::before': {
      borderWidth: '1em 1em 1em 0',
      borderColor: `transparent ${color} transparent transparent`,
    },
  },
  '&[x-placement*="left"] $arrow': {
    right: 0,
    marginRight: '-0.95em',
    height: '2em',
    width: '1em',
    '&::before': {
      borderWidth: '1em 0 1em 1em',
      borderColor: `transparent transparent transparent ${color}`,
    },
  },
});

const useArrowStyles = makeStyles(() => ({
  tooltip: ({ colors, fonts }) => ({
    backgroundColor: colors.blue1,
    color: colors.white,
    position: 'relative',
    fontSize: '14px',
    lineHeight: '19px',
    textTransform: 'uppercase',
    padding: '4px 12px',
    fontFamily: fonts.sofia,
    fontWeight: '600',
  }),
  tooltipPlacementLeft: {
    margin: '0px 10px',
  },
  arrow: {
    position: 'absolute',
    fontSize: 6,
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
  // TODO: Need to figure out how to make this a variable.
  // Ran into this bug since we're using nested selectors
  // https://github.com/mui-org/material-ui/issues/15511
  popper: arrowGenerator('#1098CF'),
}));

// @see https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#modifiersarrow
const popperProps = arrowRef => ({
  popperOptions: {
    modifiers: {
      arrow: {
        enabled: true,
        element: arrowRef,
      },
    },
  },
});

// Surely Material has a better solution than this?
const noOpTransition = ({ children }) => children;

// NOTE: This component is only used in the MemberPortal NavigationnBar
// component. It should be generalized to work in multiple use cases.
const Tooltip = ({ open, placement, title, children }) => {
  const theme = useContext(ThemeContext);
  const { arrow, ...classes } = useArrowStyles(theme);
  const [arrowRef, setArrowRef] = useState(null);
  console.log(children);
  return (
    <MaterialTooltip
      classes={classes}
      open={open}
      placement={placement}
      TransitionComponent={noOpTransition}
      title={
        <>
          {title}
          <span className={arrow} ref={setArrowRef} />
        </>
      }
      PopperProps={popperProps(arrowRef)}
    >
      {children}
    </MaterialTooltip>
  );
};

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
