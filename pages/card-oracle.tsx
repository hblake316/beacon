import * as React from 'react'
import { ThemeProvider } from '@mui/material'
import { themeLight } from '../styles/theme'
import {
  Global,
  css
} from '@emotion/react'
import { Box } from '@mui/material'
import { Header } from '../components/Header'
import CardOracle from '../components/CardOracle'

const globalStyles = css`
  body {
    margin: 0;
  }
`

const CardOraclePage = () => {
  return (
    <ThemeProvider theme={themeLight}>
      <Global styles={globalStyles} />
      <Box
        sx={{
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          bgcolor: 'background.default',
          gap: '1rem'
        }}
      >
        <Header title='Hermetic Oracle' />
        <CardOracle />
      </Box>
    </ThemeProvider>
  )
}

export default CardOraclePage
