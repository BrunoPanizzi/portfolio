import { ThemeProvider } from 'styled-components'

import GlobalStyles from './assets/styles/GlobalStyles'
import theme from './assets/styles/theme'

import Layout from './components/Layout'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  )
}
