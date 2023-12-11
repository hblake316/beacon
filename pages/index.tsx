import * as React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import {
  Box,
  ThemeProvider
} from '@mui/material'
import { theme } from '../themes/theme'
import {
  Global,
  css
} from '@emotion/react'
import { NumerologyCard } from '../components/numerology/NumerologyCard'

const globalStyles = css`
  body {
    margin: 0;
  }
`

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
      >
        <Global styles={globalStyles} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh'
          }}
        >
          <Header title='Beacon' />
          <Box
            sx={{
              flexGrow: 1,
              width: '100%'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                '& > *': {
                  m: 1
                }
              }}
            >
              <NumerologyCard />
            </Box>
          </Box>
          <Footer />
        </Box>
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default App
