import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fonts.body};
    background-color: ${theme.colors.light};
    color: ${theme.colors.dark};
    min-height: 100vh;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 700;
  }

  button {
    font-family: ${theme.fonts.body};
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyles;