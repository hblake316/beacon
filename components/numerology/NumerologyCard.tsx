import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import {
  Fragment,
  useState
} from 'react'
import { calculateDigitalRoot } from './NumerologyCard.utils'
import { YouTubeButton } from '../YouTubeButton'

export const NumerologyCard = () => {
  const [
    selectedDate,
    setSelectedDate
  ] = useState<Date | null>(null)
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>
        <Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              Numerology
            </Typography>
            <DatePicker
              value={selectedDate}
              onChange={(newValue) => {
                setSelectedDate(
                  newValue
                )
              }}
            />
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              Life Path:{' '}
              {selectedDate
                ? calculateDigitalRoot(
                    selectedDate,
                    true
                  )
                : ''}
            </Typography>{' '}
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              2023 Personal Year:{' '}
              {selectedDate
                ? calculateDigitalRoot(
                    selectedDate,
                    false
                  )
                : ''}
            </Typography>
          </CardContent>
          <CardActions>
            <YouTubeButton
              value={`life path numbers`}
            />
          </CardActions>
        </Fragment>
      </Card>
    </Box>
  )
}
