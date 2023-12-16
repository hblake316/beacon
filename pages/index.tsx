import * as React from 'react'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Box, Button, ThemeProvider } from '@mui/material'
import { themeDark, themeLight } from '../styles/theme'
import { Global, css } from '@emotion/react'
import { NumerologyCard } from '../components/numerology/NumerologyCard'
import { useState } from 'react'

const globalStyles = css`
  body {
    margin: 0;
  }
`

export const App = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  return (
    <ThemeProvider theme={themeLight}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Global styles={globalStyles} />
        <Box
          sx={{
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            bgcolor: 'background.default',
            gap: '1rem',
          }}
        >
          <Header title='beacon' />
          <DatePicker
            label='Birth Date'
            slotProps={{ textField: { size: 'small' } }}
            value={selectedDate}
            onChange={(newValue) => {
              setSelectedDate(newValue)
            }}
            sx={{ maxWidth: '200px' }}
          />
          <NumerologyCard birthDate={selectedDate} />
        </Box>
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default App
