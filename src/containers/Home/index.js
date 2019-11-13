import React from 'react';
import { shape, func, string } from 'prop-types';
import Nav from '../Nav'

const Home = ({history, location}) => {

      return (
          <>
          <Nav pathname={location.pathname} push={history.push} />
          <h1>Hello</h1>
          </>
      )
}

const propTypes = {
    history: shape({
      push: func,
    }).isRequired,
    location: shape({
      pathname: string,
    }).isRequired,
  };

Home.propTypes = propTypes;

export default Home;