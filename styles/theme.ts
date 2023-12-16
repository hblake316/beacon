import { createTheme } from '@mui/material/styles'

const colors = {
  purple: '#7E57C2',
  yellow: '#fdd835',
  peach: '#ffab91',
  lavendar: '#9575cd',
  teal: '#30A7A7',
  orange: '#E57373',
  amber: '#FFB74D',
  polynesianBlue: '#154a83',
  ceruleanBlue: '#02789a',
  blue: '#028fce',
  spanishOrange: '#e76e0a',
  murrey: '#891c5c',
  white: '#ffffff',
}

export const themeLight = createTheme({
  palette: {
    primary: {
      main: colors.polynesianBlue,
    },
    secondary: {
      main: colors.blue,
    },
    error: {
      main: colors.spanishOrange,
    },
    warning: {
      main: colors.murrey,
    },
    background: {
      default: colors.white,
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    allVariants: {
      lineHeight: 1.5,
    },
    h1: {
      color: colors.polynesianBlue,
      fontSize: '2.5rem',
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.5rem',
    },
    h4: {
      color: colors.blue,
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
})

export const themeDark = createTheme({
  palette: {
    primary: {
      main: colors.polynesianBlue,
    },
    secondary: {
      main: colors.ceruleanBlue,
    },
    error: {
      main: colors.spanishOrange,
    },
    warning: {
      main: colors.murrey,
    },
    background: {
      default: colors.polynesianBlue,
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    allVariants: {
      lineHeight: 1.5,
    },
    h1: {
      color: colors.white,
      fontSize: '2.5rem',
    },
    h2: {
      color: colors.ceruleanBlue,
      fontSize: '2rem',
    },
    h3: {
      color: colors.ceruleanBlue,
      fontSize: '1.5rem',
    },
    h4: {
      color: colors.ceruleanBlue,
      fontSize: '1rem',
    },
    body1: {
      color: colors.teal,
      fontSize: '1.5rem',
    },
  },
})
