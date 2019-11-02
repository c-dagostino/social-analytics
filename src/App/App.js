import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './design-system/atoms';
import { withRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import Routes from '../Routes';
import { THEME } from './constants';


const App = () => {
  return (
    <>
      <div>
        <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/ubn5qiw.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Zilla+Slab:400,700&display=swap"
      />
        </Helmet>
         <ThemeProvider theme={THEME}>
      <GlobalStyles />
        <Routes />
      </ThemeProvider>
      </div>
     
    </>
  );
};

export default withRouter(App);