import React from 'react'

import { ThemeProvider } from 'styled-components'

import theme from '@global/styles/theme'
import { GlobalStyle } from '@global/styles/global'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hello world</h1>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
