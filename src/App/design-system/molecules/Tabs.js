import React from 'react';
import { node, func, oneOf, bool } from 'prop-types';

import { Box } from '../atoms';

const propTypes = {
  onChange: func.isRequired,
  children: node,
  active: bool,
  size: oneOf(['small', 'large']),
};

const defaultProps = {
  children: null,
  size: 'large',
  active: false,
};

const renderTabs = (children, onChange, active, size) =>
  React.Children.map(children, (tab, i) => {
    const id = tab.props.id || i;

    return React.cloneElement(tab, {
      onClick: () => onChange(id),
      active: active === id,
      size,
    });
  });

const Tabs = ({ children, onChange, active, size }) => (
  <Box display="flex">{renderTabs(children, onChange, active, size)}</Box>
);

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

export default Tabs;
