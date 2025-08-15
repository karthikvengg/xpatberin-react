import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#111111' },
    secondary: { main: '#d32f2f' },
    background: { default: '#fafafa' }
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h3: { fontWeight: 800, letterSpacing: '-0.02em' },
    h5: { fontWeight: 700 },
    subtitle1: { fontWeight: 600 },
    body1: { lineHeight: 1.7 }
  },
  shape: { borderRadius: 2 }
});

export default theme;
