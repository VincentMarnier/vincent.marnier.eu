import { CssVarsThemeOptions, ThemeOptions } from '@mui/material'

const theme: Omit<ThemeOptions, 'components'> &
  Pick<
    CssVarsThemeOptions,
    'components' | 'defaultColorScheme' | 'colorSchemes'
  > & {
    cssVariables?:
      | boolean
      | Pick<
          CssVarsThemeOptions,
          | 'colorSchemeSelector'
          | 'rootSelector'
          | 'disableCssColorScheme'
          | 'cssVarPrefix'
          | 'shouldSkipGeneratingVar'
        >
  } = {
  palette: {
    mode: 'light',
    primary: {
      main: '#1A3247',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF9B82',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#96C9A8',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F9F7F2',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A3247',
      secondary: '#5D6D7E',
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",
    h1: {
      fontSize: '2em',
    },
    h2: {
      fontSize: '1.75em',
    },
    h3: {
      fontSize: '1.6em',
    },
    h4: {
      fontSize: '1.45em',
    },
    h5: {
      fontSize: '1.3em',
    },
    h6: {
      fontSize: '1.15em',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: 'secondary',
      },
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: '10px 24px',
          textTransform: 'none',
        },
      },
    },
  },
}

export default theme
