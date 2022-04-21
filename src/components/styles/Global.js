import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    font-family: "Manrope", sans-serif;
  }

  html {
    font-size: 62.5%;
  }
  body {
    background-color: #ececec;
  }

`;
