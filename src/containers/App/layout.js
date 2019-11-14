import React from 'react';
import styled from 'styled-components';
import Routes from './routes';
import Nav from '../Nav';

const Wrapper = styled.div`
  font-family: var(--sb-font-family);
  font-weight: 400;
  font-size: 20px;
  position: relative;
`;
const Layout = () => {
  return (
    <Wrapper>
      <Nav />
      <Routes />
    </Wrapper>
  );
};

export default Layout;
