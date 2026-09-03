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
    fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontSize: '2.4em',
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    h2: {
      fontSize: '1.75em',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.5em',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.35em',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.15em',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
    h6: {
      fontSize: '1.05em',
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '1.05em',
      fontWeight: 300,
      color: '#5D6D7E',
    },
    body2: {
      fontSize: '0.875em',
      lineHeight: 1.6,
    },
    caption: {
      fontSize: '0.75rem',
      letterSpacing: '0.02em',
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
