import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { MdClose, MdMenu } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (item) => {
    if (item === 'Home') {
      navigate('/');
    } else if (item === 'Lab') {
      navigate('/lab');
    } else if (item === 'About') {
      navigate('/about');
    } else {
      navigate(`/${item.toLowerCase()}`);
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: scrolled 
          ? 'rgba(0, 0, 0, 0.85)' 
          : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled 
          ? '1px solid rgba(255, 215, 0, 0.3)' 
          : 'none',
        transition: 'all 0.3s ease-in-out',
        zIndex: 1300,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1.5 }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 700,
              cursor: 'pointer',
              color: '#FFD700',
              letterSpacing: '0.05em',
              fontSize: { xs: '1.1rem', sm: '1.3rem' },
              textTransform: 'uppercase',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-3px',
                left: '0',
                width: '30%',
                height: '2px',
                background: 'linear-gradient(90deg, #FFD700, #FFC107)',
              }
            }}
            onClick={() => navigate('/')}
          >
            Connect AI LAB
          </Typography>
          
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 5 }}>
            {['Home', 'Lab', 'About'].map((item) => (
              <Typography
                key={item}
                onClick={() => handleNavigation(item)}
                sx={{
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  color: '#fff',
                  opacity: 0.8,
                  '&:hover': {
                    opacity: 1,
                    transform: 'translateY(-2px)',
                    color: '#FFD700',
                  },
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '0%',
                    height: '2px',
                    bottom: '-4px',
                    left: '0',
                    background: 'linear-gradient(90deg, #FFD700, #FFC107)',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                {item === 'Lab' ? 'LAB' : 
                 item === 'Home' ? '홈' : '소개'}
              </Typography>
            ))}
          </Box>
          
          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleMobileMenu}
            sx={{ display: { md: 'none' } }}
          >
            <MdMenu size={24} color="#FFD700" />
          </IconButton>
        </Toolbar>
      </Container>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(10px)',
            zIndex: 1400,
            p: 3,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Orbitron', sans-serif",
                fontWeight: 700,
                color: '#FFD700',
                fontSize: '1.2rem',
              }}
            >
              Connect AI LAB
            </Typography>
            <IconButton 
              onClick={() => setMobileMenuOpen(false)}
              sx={{ color: '#FFD700' }}
            >
              <MdClose size={24} />
            </IconButton>
          </Box>
          
          <List sx={{ mb: 4 }}>
            {['Home', 'Lab', 'About'].map((item) => (
              <ListItem 
                key={item}
                onClick={() => handleNavigation(item)}
                sx={{
                  py: 2,
                  borderBottom: '1px solid rgba(255, 215, 0, 0.1)',
                  cursor: 'pointer',
                  '&:hover': {
                    background: 'rgba(255, 215, 0, 0.1)',
                  }
                }}
              >
                <Typography
                  sx={{
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    color: '#fff',
                    width: '100%',
                  }}
                >
                  {item === 'Lab' ? 'LAB' : 
                   item === 'Home' ? '홈' : '소개'}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </AppBar>
  );
};

export default NavigationBar; 