import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
// import MarketingService from './pages/Marketing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AIAgents from './pages/AIAgents';
import Education from './pages/Education';

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
          {/* AI 에이전트 메뉴 임시 숨김
          <Button 
            color="primary" 
            onClick={() => navigate('/aiagents')}
            sx={{ mx: 1 }}
          >
            AI 에이전트
          </Button>
          */}
          <Button 
            color="primary" 
            onClick={() => navigate('/about')}
            sx={{ mx: 1 }}
          >
            About
          </Button>
          <Button 
            color="primary" 
            onClick={() => navigate('/education')}
            sx={{ mx: 1 }}
          >
            AI 교육
          </Button>
          {/* AI 마케팅 메뉴 제거
          <Button 
            color="primary" 
            onClick={() => navigate('/marketing')}
            sx={{ mx: 1 }}
          >
            Marketing
          </Button>
          */}
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
            onClick={() => window.location.href = 'mailto:jay@connexionai.kr'}
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
          <Route path="/" element={<Home />} />
          <Route path="/aiagents" element={<AIAgents />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          {/* Marketing 라우트 제거
          <Route path="/marketing" element={<MarketingService />} />
          */}
          <Route path="/education" element={<Education />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
