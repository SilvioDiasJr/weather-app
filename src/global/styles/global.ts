import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    scroll-behavior: smooth;
    font-size: 62.5%; 
    font-family: 'Raleway', sans-serif;
  }
  
  body {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 0 auto;

    background-color: ${({ theme }) => theme.COLORS.brand.background};
  }

  a, button, input, textarea {
    font-family: 'Raleway', sans-serif;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`
