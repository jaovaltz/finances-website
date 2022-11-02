import { createTheme } from '@mui/material/styles'
import { ptBR } from '@mui/material/locale'

import 'global/fonts/index.css'

export const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#5429CC',
        light: 'rgba(84, 41, 204, 0.5)'
      },
      secondary: {
        main: '#33CC95'
      },
      error: {
        main: '#E52E4D'
      },
      info: {
        main: '#ffffff'
      }
    },
    typography: {
      fontFamily: 'Poppins Semi-Bold, sans-seriff',
      h1: {
        fontFamily: 'Poppins Bold, sans-seriff'
      },
      button: {
        fontFamily: 'Poppins Bold, sans-serif',
        textTransform: 'none'
      }
    }
  },
  ptBR
)
