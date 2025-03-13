import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar, Button, Box, useScrollTrigger, Slide } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
// import Blog from './pages/Blog';
// import MarketingService from './pages/Marketing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AIAgents from './pages/AIAgents';
import Education from './pages/Education';

// Define theme with more structured approach - AI 교육에 초점
let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3B82F6', // 더 밝은 파란색으로 변경
      light: '#60A5FA',
      dark: '#2563EB',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8B5CF6', // 더 밝은 보라색으로 변경
      light: '#A78BFA',
      dark: '#7C3AED',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
      light: '#f8fafc',
      dark: '#f1f5f9',
    },
    text: {
      primary: '#111827',
      secondary: 'rgba(17, 24, 39, 0.7)',
      disabled: 'rgba(17, 24, 39, 0.38)',
    },
    gradient: {
      primary: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)',
    },
    education: {
      light: '#EFF6FF', // 학습 관련 배경색
      main: '#DBEAFE',
      dark: '#BFDBFE',
    },
  },
  typography: {
    fontFamily: "'Noto Sans KR', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
      marginBottom: '1rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      marginBottom: '0.875rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
      marginBottom: '0.75rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
      marginBottom: '0.625rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12, // 더 부드러운 모서리
  },
  spacing: 8,
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          padding: '10px 20px',
          fontSize: '1rem',
          transition: 'all 0.3s ease-in-out',
        },
        containedPrimary: {
          background: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)',
          '&:hover': {
            background: 'linear-gradient(90deg, #3B82F6 30%, #8B5CF6 100%)',
            boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    // AI 교육 관련 컴포넌트 스타일 추가
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
        filled: {
          '&.MuiChip-colorPrimary': {
            backgroundColor: '#DBEAFE',
            color: '#2563EB',
          },
          '&.MuiChip-colorSecondary': {
            backgroundColor: '#EDE9FE',
            color: '#7C3AED',
          },
        },
      },
    },
  },
});

// Make typography responsive
theme = responsiveFontSizes(theme);

// Hide App Bar on scroll
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// Navigation component
const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Don't show navbar on homepage
  if (isHomePage) return null;

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed" 
        color="transparent" 
        sx={{ 
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Button 
            onClick={() => navigate('/')}
            sx={{ 
              fontSize: '1.2rem', 
              fontWeight: 700,
              fontFamily: "'Fira Code', 'Source Code Pro', monospace",
              background: theme.palette.gradient.primary,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              '&:hover': {
                backgroundColor: 'transparent',
                opacity: 0.8,
                transform: 'scale(1.05)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Connect AI LAB
          </Button>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: { xs: 1, sm: 2 } 
          }}>
            {/* AI 에이전트 메뉴 임시 숨김
            <Button 
              onClick={() => navigate('/aiagents')}
            >
              AI 에이전트
            </Button>
            */}
            <Button 
              onClick={() => navigate('/about')}
              sx={{ 
                color: 'rgba(0, 0, 0, 0.7)',
                '&:hover': {
                  color: theme.palette.primary.main,
                  backgroundColor: 'rgba(59, 130, 246, 0.05)',
                }
              }}
            >
              About
            </Button>
            <Button 
              onClick={() => navigate('/education')}
              sx={{ 
                color: 'rgba(0, 0, 0, 0.7)',
                '&:hover': {
                  color: theme.palette.primary.main,
                  backgroundColor: 'rgba(59, 130, 246, 0.05)',
                }
              }}
            >
              클래스
            </Button>
            {/* AI 마케팅 메뉴 제거
            <Button 
              onClick={() => navigate('/marketing')}
            >
              Marketing
            </Button>
            */}
            <Button 
              variant="contained" 
              color="primary"
              onClick={() => navigate('/education')}
              sx={{ 
                ml: { xs: 1, sm: 2 },
                background: theme.palette.gradient.primary,
                color: 'white',
                borderRadius: '20px',
                '&:hover': {
                  background: theme.palette.gradient.primary,
                  boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)',
                  transform: 'translateY(-2px)',
                }
              }}
            >
              무료 클래스 시작
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
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
          {/* <Route path="/blog" element={<Blog />} /> - 블로그 라우트 제거 */}
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
