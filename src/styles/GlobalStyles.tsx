import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  main {
    margin: 20px;
  }

  /* html {
    --color-primary: #00494d;
    --color-secondary: #c5e4e7;
    --color-display: #26c0ab;
    --color-light: #f4fafa;
  } */
`;