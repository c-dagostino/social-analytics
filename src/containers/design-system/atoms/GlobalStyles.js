import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --sb-font-family: ${props => props.theme.fontFamily};
    -webkit-font-smoothing: antialiased;
  }
  * {
    box-sizing: border-box;
  }
  sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
  }
  sup {
    top: 0;
  }
  sub {
    bottom: 0;
  }
  button, input, select, option, label {
    font-family: ${props => props.theme.fonts.sofia};
  }
  html {
    font-size: 100%;
  }
  body {
    font-weight: 400;
    font-size: 16px;
  }
  body, input, select, textarea, button {
    line-height: 1.3;
    color: ${props => props.theme.colors.gray4};
  }
  a {
    color: ${props => props.theme.colors.blue1};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  ul, li, p, h1, h2, h3, h4, h5, h6, button, fieldset, dl, dt, dd {
    padding: 0;
    margin: 0;
  }
  ul, li {
    list-style-type: none;
  }
  h1, h2 {
    font-weight:300;
  }
  h1 {
    font-size:22px;
  }
  h2 {
    font-size:20px;
  }
  button, label {
    cursor: pointer;
  }
`;

export default GlobalStyles;
