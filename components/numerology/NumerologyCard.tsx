import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { Fragment, useState } from 'react'
import { calculateDigitalRoot } from './NumerologyCard.utils'
import { YouTubeButton } from '../YouTubeButton'

interface NumerologyCardProps {
  birthDate: Date | null
}

export const NumerologyCard = ({ birthDate }: NumerologyCardProps) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>
        <Fragment>
          <CardContent>
            <Typography variant='h3'>Numerology</Typography>
            <Typography variant='body1'>
              Life Path:{' '}
              {birthDate ? calculateDigitalRoot(birthDate, true) : ''}
            </Typography>{' '}
            <Typography variant='body1'>
              2023 Personal Year:{' '}
              {birthDate ? calculateDigitalRoot(birthDate, false) : ''}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant='contained' color='secondary'>
              Copy
            </Button>
            <YouTubeButton value={`life path numbers`} />
          </CardActions>
        </Fragment>
      </Card>
    </Box>
  )
}
