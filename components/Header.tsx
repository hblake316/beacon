import { Typography } from '@mui/material'

export const Header = ({ title }) => {
  return (
    <Typography
      variant='h4'
      sx={{
        alignSelf: 'center',
        width: '100%'
      }}
    >
      {title}
    </Typography>
  )
}
