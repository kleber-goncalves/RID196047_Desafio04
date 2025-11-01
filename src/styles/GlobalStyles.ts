import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button, input {
    font-family: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
  }

  p {
    line-height: 1.5;
  }

  section {
    padding: ${({ theme }) => theme.spacing[8]} 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    section {
      padding: ${({ theme }) => theme.spacing[6]} 0;
    }
  }
`;
