import React from 'react';
import { number, string } from 'prop-types';

import * as icons from '../assets/icons';

const Icon = ({ name, size, fill, ...props }) => {
  const SVG = icons[name];
  if (!SVG) return false;
  return React.createElement(icons[name], {
    width: size,
    height: size,
    fill,
    ...props,
  });
};

const isValidIcon = (propValue, key, componentName) => {
  const SVG = propValue[key];
  if (!icons[SVG]) {
    return new Error(
      `Can't find icon ${SVG} in the ${componentName} component. Try passing in of these: ${Object.keys(
        icons,
      ).map(name => name)} `,
    );
  }
  return null;
};

Icon.displayName = 'Icon';

Icon.propTypes = {
  name: isValidIcon,
  size: number,
  fill: string,
};

Icon.defaultProps = {
  name: null,
  size: 28,
  fill: 'transparent',
};

export default Icon;
