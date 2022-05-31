import React from 'react'

import { ThemeProvider } from 'styled-components'

import { Home } from '@pages/Home'

import theme from '@global/styles/theme'
import { GlobalStyle } from '@global/styles/global'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
