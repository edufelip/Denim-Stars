import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body {
    /* background: #191919; */
    background: #f5f5f5;
    -webkit-font-smoothing: antialiased
  }

  body, input, button, a {
    font: 14px Roboto;
    color: #2e2e2e;
  }

  #root {
    max-width: 100vw;
  }

  button {
    cursor: pointer;
  }
`;
