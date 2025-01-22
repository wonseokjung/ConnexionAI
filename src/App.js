import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Blog from './pages/Blog';
import About from './pages/About';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#000000',
    },
    background: {
      default: '#000000',
      paper: '#1a1a1a',
    },
  },
  typography: {
    fontFamily: "'Noto Sans KR', sans-serif",
    h1: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '10px 20px',
          fontSize: '1rem',
        },
      },
    },
  },
});

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  if (isLandingPage) return null;

  return (
    <AppBar 
      position="fixed" 
      color="transparent" 
      elevation={0}
      sx={{ 
        background: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Button 
          color="primary" 
          onClick={() => navigate('/')}
          sx={{ 
            fontSize: '1.2rem', 
            fontWeight: 700,
            '&:hover': {
              backgroundColor: 'transparent',
              opacity: 0.8
            }
          }}
        >
          ConnexionAI
        </Button>
        <Box>
          <Button 
            color="primary" 
            onClick={() => navigate('/about')}
            sx={{ mx: 1 }}
          >
            About
          </Button>
          <Button 
            color="primary" 
            onClick={() => navigate('/blog')}
            sx={{ mx: 1 }}
          >
            Blog
          </Button>
          <Button 
            variant="outlined" 
            color="primary"
            onClick={() => navigate('/contact')}
            sx={{ 
              ml: 2,
              borderColor: 'rgba(255, 255, 255, 0.3)',
              '&:hover': {
                borderColor: 'rgba(255, 255, 255, 0.8)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            무료 상담
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
