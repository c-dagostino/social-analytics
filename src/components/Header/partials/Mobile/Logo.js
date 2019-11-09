import React from 'react';
import { string } from 'prop-types';

import styled from 'styled-components';

const propTypes = {
  className: string,
};

const defaultProps = {
  className: '',
};

const Logo = ({ className }) => (
  <div className={className}>
    <a
      data-event="Header Mobile - Logo"
      href="http://localhost:3000"
      rel="external"
      className="ui-link"
    >
      Site Analysis
    </a>
  </div>
);

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

const StyledLogo = styled(Logo)`
  align-self: center;
  flex: 1;

  a {
    display: block;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;

    height: 26px;
  }
`;

export default StyledLogo;
