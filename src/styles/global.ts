import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --header-height: 6.5rem;

    /*==== Colors ==================== */
    --primary-color: hsl(154, 55%, 60%);
    --secondary-color: hsl(0, 0%, 20%);
    --dark-color: hsl(0, 0%, 15%);
    --neutral-color: hsl(0, 0%, 100%);

    /*==== Font Size ==================== */
    --normal-font-size: 1rem;

    /*==== Z-index ==================== */
    --z-index-default: 1;
    --z-index-header: 100;
  }

  *, 
  *::before, 
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--dark-color);
    color: var(--neutral-color);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 var(--normal-font-size) "Open Sans", sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }

  img {
    width: 100%;
    height: auto;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`