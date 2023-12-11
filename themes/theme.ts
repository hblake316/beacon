import { createTheme } from '@mui/material/styles'

const colors = {
  purple: '#7E57C2',
  yellow: '#fdd835',
  peach: '#ffab91',
  lavendar: '#9575cd',
  teal: '#30A7A7',
  orange: '#E57373',
  amber: '#FFB74D'
}

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.purple
    },
    secondary: {
      main: colors.teal
    },
    error: {
      main: colors.orange
    },
    warning: {
      main: colors.amber
    }
  }
  // You can also customize other theme aspects like typography
})
