/* eslint-disable */

import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import NavigationBar from './NavigationBar';

const theme = {
  colors: {},
  breakpoints: [],
  borders: {},
  fontSizes: {},
  fonts: {},
  fontFamily: {},
  textStyles: {},
  radius: {},
  maxContentWidth: {},
};

describe('NavigationBar', () => {
  // JSDOM's CSS parser seems to have issues with our css, and blurts out some
  // loud errors. Need to find a way around this.
  // see https://github.com/jsdom/jsdom/issues/2177

  xit('should render any number of tabs', () => {
    // Required for rendering Tooltips.
    global.document.createRange = () => ({
      setStart: () => {},
      setEnd: () => {},
      commonAncestorContainer: {
        nodeName: 'BODY',
        ownerDocument: document,
      },
    });

    const { container } = render(
      <ThemeProvider theme={theme}>
        <NavigationBar />
      </ThemeProvider>,
    );
  });
});
