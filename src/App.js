import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
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

  return (
    <AppBar position="fixed" color="secondary" elevation={0} sx={{ borderBottom: '1px solid #eaeaea' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Button 
          color="primary" 
          onClick={() => navigate('/')}
          sx={{ 
            fontSize: '1.2rem', 
            fontWeight: 700,
            '&:hover': {
              backgroundColor: 'transparent',
              color: '#666'
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
            variant="contained" 
            color="primary"
            onClick={() => navigate('/contact')}
            sx={{ ml: 2 }}
          >
            무료 상담
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navigation />
        <Box sx={{ pt: 8 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
