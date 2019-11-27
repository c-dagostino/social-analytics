import React from 'react';
import { node, func, oneOf, string, oneOfType, bool } from 'prop-types';

import { Box } from '../atoms';

const propTypes = {
  onChange: func.isRequired,
  children: node,
  activePath: oneOfType([string, bool]),
  size: oneOf(['small', 'large']),
};

const defaultProps = {
  children: null,
  size: 'large',
  activePath: '/',
};

const renderTabs = (children, onChange, activePath, size) =>
  React.Children.map(children, (tab, i) => {
    const id = tab.props.id || i;
    const isActive = activePath === id;
    return React.cloneElement(tab, {
      onClick: () => onChange(id),
      active: isActive,
      size,
    });
  });

const Tabs = ({ children, onChange, activePath, size }) => (
  <Box display="flex">{renderTabs(children, onChange, activePath, size)}</Box>
);

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

export default Tabs;
