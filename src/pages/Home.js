import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  Chip,
  useTheme,
  useMediaQuery,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Avatar,
  alpha,
  Drawer,
  Menu,
  MenuItem,
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
  MdPerson, 
  MdArrowForward,
  MdOutlineArrowForward,
  MdCheck,
  MdKeyboardArrowDown,
  MdAutoFixHigh,
  MdOutlineMailOutline,
  MdOutlineLightbulb,
  MdMenu,
  MdClose
} from "react-icons/md";
import { 
  FaNetworkWired, 
  FaChevronDown, 
  FaLaptopCode, 
  FaGraduationCap, 
  FaBuilding, 
  FaChartLine, 
  FaLightbulb,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaCode,
  FaBrain,
  FaRobot
} from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

/* ===========================================
   Futuristic Glassmorphism Navigation Bar
=========================================== */
const NavigationBar = ({ navigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
    } else if (item === 'Classes') {
      navigate('/education');
    } else if (item === 'Consulting') {
      navigate('/consulting');
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
            {['Home', 'Classes', 'Consulting', 'About'].map((item) => (
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
                {item === 'Classes' ? '클래스' : 
                 item === 'Consulting' ? '컨설팅' : 
                 item === 'Home' ? '홈' : '소개'}
              </Typography>
            ))}
          </Box>
          
          {/* Contact Button (Desktop) */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button
              variant="contained"
              onClick={() => window.location.href = 'mailto:jay@connexionai.kr'}
              startIcon={<MdOutlineMailOutline />}
              sx={{
                px: 3,
                py: 1,
                borderRadius: '4px',
                background: 'rgba(255, 215, 0, 0.2)',
                backdropFilter: 'blur(10px)',
                color: '#FFD700',
                fontWeight: 500,
                textTransform: 'none',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                boxShadow: 'none',
                '&:hover': {
                  background: 'rgba(255, 215, 0, 0.3)',
                  borderColor: 'rgba(255, 215, 0, 0.5)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              서비스 상담
            </Button>
          </Box>
          
          {/* Mobile Menu Button */}
          <IconButton 
            edge="end" 
            color="inherit" 
            aria-label="menu"
            onClick={toggleMobileMenu}
            sx={{ 
              display: { xs: 'flex', md: 'none' },
              color: '#FFD700',
              background: 'rgba(255, 215, 0, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 215, 0, 0.2)',
              '&:hover': {
                background: 'rgba(255, 215, 0, 0.2)',
              }
            }}
          >
            {mobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </IconButton>
          
          {/* Mobile Menu Drawer */}
          <Drawer
            anchor="right"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            PaperProps={{
              sx: {
                width: '75%',
                maxWidth: '300px',
                background: 'rgba(0, 0, 0, 0.95)',
                backdropFilter: 'blur(10px)',
                borderLeft: '1px solid rgba(255, 215, 0, 0.1)',
                boxShadow: '-5px 0 30px rgba(0, 0, 0, 0.5)',
              }
            }}
          >
            <Box sx={{ p: 3 }}>
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
                {['Home', 'Classes', 'Consulting', 'About'].map((item) => (
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
                      {item === 'Classes' ? '클래스' : 
                       item === 'Consulting' ? '컨설팅' : 
                       item === 'Home' ? '홈' : '소개'}
                    </Typography>
                  </ListItem>
                ))}
              </List>
              
              <Button
                variant="contained"
                fullWidth
                onClick={() => window.location.href = 'mailto:jay@connexionai.kr'}
                startIcon={<MdOutlineMailOutline />}
                sx={{
                  py: 1.5,
                  borderRadius: '4px',
                  background: 'linear-gradient(90deg, #FFD700, #FFC107)',
                  color: '#000',
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: '0 5px 15px rgba(255, 215, 0, 0.4)',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #FFD700 30%, #FFC107 100%)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 10px 30px rgba(255, 215, 0, 0.6)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                서비스 상담
              </Button>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

/* ===========================================
   Enhanced Hero Section with 3D elements
=========================================== */
const HeroSection = ({ navigate }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  // 타이핑 효과를 위한 상태
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = [
    '인공지능과 세상의 연결로 새로운 가능성을 연구합니다',
    'AI 스타트업 창업하기',
    '개인/소규모팀으로 빌딩되는 새로운 패러다임의 AI 스타트업',
    '미래 AI 인재를 양성하는 교육을 진행합니다'
  ];
  
  // 마우스 움직임 효과
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // 교차 관찰자
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // 타이핑 효과
  useEffect(() => {
    if (typedText.length === phrases[currentPhraseIndex].length) {
      const timeout = setTimeout(() => {
        eraseText();
      }, 2000);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypedText(phrases[currentPhraseIndex].substring(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedText, currentPhraseIndex]);
  
  const eraseText = () => {
    if (typedText.length === 0) {
      setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
    } else {
      const timeout = setTimeout(() => {
        setTypedText(phrases[currentPhraseIndex].substring(0, typedText.length - 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  };
  
  const scrollToContent = () => {
    const founderSection = document.getElementById('founder-section');
    if (founderSection) {
      founderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #000000 0%, #111111 100%)',
        pt: { xs: 8, md: 0 },
      }}
    >
      {/* 배경 요소들 */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      >
        {/* 고급 그리드 라인 */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            perspective: '1000px',
            transformStyle: 'preserve-3d',
            transform: 'rotateX(60deg) rotateZ(0deg)',
            transformOrigin: 'center center',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              backgroundImage: 'linear-gradient(rgba(255, 215, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 215, 0, 0.05) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              transform: 'translateZ(0px) translateY(0)',
              animation: 'gridMove 25s linear infinite',
            }}
          />
        </Box>
        
        {/* 글로잉 오브 */}
        {[...Array(6)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              width: { xs: i % 2 === 0 ? '150px' : '200px', md: i % 2 === 0 ? '300px' : '400px' },
              height: { xs: i % 2 === 0 ? '150px' : '200px', md: i % 2 === 0 ? '300px' : '400px' },
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(255, 215, 0, ${0.05 + (i * 0.02)}) 0%, rgba(0, 0, 0, 0) 70%)`,
              top: `${(i * 15) + 10}%`,
              left: `${(i * 17) % 100}%`,
              transform: 'translate(-50%, -50%)',
              filter: 'blur(60px)',
              animation: `float ${6 + i}s ease-in-out infinite alternate`,
              zIndex: 0,
            }}
          />
        ))}
        
        {/* 동적 파티클 */}
        {[...Array(30)].map((_, i) => (
          <Box
            key={`particle-${i}`}
            sx={{
              position: 'absolute',
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: '#FFD700',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              boxShadow: '0 0 5px rgba(255, 215, 0, 0.5)',
              animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate, floatSlow ${Math.random() * 20 + 10}s infinite alternate`,
            }}
          />
        ))}
      </Box>
      
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Box sx={{ mb: 4, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                    lineHeight: 1.2,
                    background: 'linear-gradient(90deg, #FFD700, #FFC107)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textFillColor: 'transparent',
                    mb: 3,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: { xs: '40px', sm: '60px', md: '80px' },
                      height: '4px',
                      bottom: '-10px',
                      left: { xs: 'calc(50% - 20px)', sm: 'calc(50% - 30px)', md: '0' },
                      background: 'linear-gradient(90deg, #FFD700, #FFC107)',
                    }
                  }}
                >
                  Connect AI LAB
                </Typography>
                
                <Box sx={{ height: { xs: '100px', md: '80px' }, mb: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
                      color: 'rgba(255, 255, 255, 0.9)',
                      textAlign: { xs: 'center', md: 'left' },
                      minHeight: { xs: '80px', md: '80px' },
                      lineHeight: { xs: 1.4, md: 1.2 },
                      position: 'relative',
                      zIndex: 2,
                    }}
                  >
                    {typedText}
                    <span style={{ opacity: Math.round(Date.now() / 500) % 2 ? 1 : 0, color: '#FFD700' }}>|</span>
                  </Typography>
                </Box>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    mb: 5,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.8,
                    textAlign: { xs: 'center', md: 'left' },
                    px: { xs: 2, md: 0 },
                    maxWidth: '600px',
                    mx: { xs: 'auto', md: 0 },
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  인공지능 기술을 통해 개인과 기업이 새로운 가능성을 발견하고 혁신할 수 있도록 돕습니다.
                  AI 초보자부터 전문가까지, 맞춤형 컨설팅과 교육을 통해 당신의 AI 여정을 함께합니다.
                </Typography>
                
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: { xs: 'center', md: 'flex-start' }, 
                  gap: 2,
                  position: 'relative',
                  zIndex: 2,
                }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<MdArrowForward />}
                    onClick={() => scrollToContent()}
                    sx={{
                      px: { xs: 3, sm: 4, md: 5 },
                      py: { xs: 1.5, sm: 1.7, md: 2 },
                      background: 'linear-gradient(90deg, #FFD700, #FFC107)',
                      color: '#000',
                      fontWeight: 600,
                      textTransform: 'none',
                      fontSize: { xs: '0.95rem', md: '1.1rem' },
                      borderRadius: '4px',
                      boxShadow: '0 10px 20px rgba(255, 215, 0, 0.3)',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #FFD700 30%, #FFC107 100%)',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 15px 30px rgba(255, 215, 0, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    시작하기
                  </Button>
                  
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<MdOutlineMailOutline />}
                    onClick={() => window.location.href = 'mailto:jay@connexionai.kr'}
                    sx={{
                      px: { xs: 3, sm: 4, md: 5 },
                      py: { xs: 1.5, sm: 1.7, md: 2 },
                      borderColor: 'rgba(255, 215, 0, 0.5)',
                      borderWidth: '1px',
                      background: 'rgba(0, 0, 0, 0.3)',
                      backdropFilter: 'blur(10px)',
                      color: '#FFD700',
                      fontWeight: 500,
                      textTransform: 'none',
                      fontSize: { xs: '0.95rem', md: '1.1rem' },
                      borderRadius: '4px',
                      '&:hover': {
                        borderColor: '#FFD700',
                        background: 'rgba(255, 215, 0, 0.1)',
                        transform: 'translateY(-3px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    서비스 상담
                  </Button>
                </Box>
                
                {/* 서비스 대상 */}
                <Box sx={{ 
                  display: 'flex', 
                  flexWrap: 'wrap',
                  gap: 2,
                  mt: 5,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  position: 'relative',
                  zIndex: 2,
                }}>
                  {[
                    { label: 'AI 초보자', icon: <FaBrain size={12} /> },
                    { label: '개발자', icon: <FaLaptopCode size={12} /> },
                    { label: '기업 임원', icon: <FaChartLine size={12} /> },
                    { label: 'AI 스타트업', icon: <FaRobot size={12} /> }
                  ].map((item, i) => (
                    <Chip
                      key={i}
                      icon={
                        <Box 
                          sx={{
                            color: '#FFD700',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {item.icon}
                        </Box>
                      }
                      label={item.label}
                      sx={{
                        backgroundColor: 'rgba(255, 215, 0, 0.1)',
                        backdropFilter: 'blur(8px)',
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: 500,
                        fontSize: '0.85rem',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 215, 0, 0.2)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 215, 0, 0.15)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                        }
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: '300px', sm: '350px', md: '500px' },
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* 3D 시각화 개선 */}
                <Box
                  sx={{
                    position: 'relative',
                    width: { xs: '250px', sm: '300px', md: '400px' },
                    height: { xs: '250px', sm: '300px', md: '400px' },
                    transformStyle: 'preserve-3d',
                    transform: `rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
                    animation: 'spin 20s linear infinite',
                  }}
                >
                  {/* 중앙 코어 */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: { xs: '80px', sm: '100px', md: '120px' },
                      height: { xs: '80px', sm: '100px', md: '120px' },
                      borderRadius: '50%',
                      background: 'radial-gradient(circle at 30% 30%, rgba(255, 215, 0, 0.8), rgba(255, 165, 0, 0.4))',
                      boxShadow: '0 0 30px rgba(255, 215, 0, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.4)',
                      animation: 'pulse 4s infinite alternate',
                      zIndex: 5,
                    }}
                  />
                  
                  {/* 궤도 */}
                  {[...Array(3)].map((_, i) => {
                    const orbitSize = i === 0 ? { xs: 150, sm: 180, md: 220 } : 
                                     i === 1 ? { xs: 200, sm: 240, md: 290 } : 
                                               { xs: 250, sm: 300, md: 360 };
                    return (
                      <Box
                        key={`orbit-${i}`}
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: { xs: orbitSize.xs, sm: orbitSize.sm, md: orbitSize.md },
                          height: { xs: orbitSize.xs, sm: orbitSize.sm, md: orbitSize.md },
                          borderRadius: '50%',
                          border: '1px solid rgba(255, 215, 0, 0.2)',
                          boxShadow: 'inset 0 0 10px rgba(255, 215, 0, 0.1), 0 0 10px rgba(255, 215, 0, 0.1)',
                          animation: `orbit-rotation ${10 + i * 5}s linear infinite`,
                          transformStyle: 'preserve-3d',
                        }}
                      >
                        {/* 각 궤도의 노드 */}
                        {[...Array(i + 2)].map((_, j) => {
                          const angle = (360 / (i + 2)) * j;
                          const rad = angle * (Math.PI / 180);
                          const x = Math.cos(rad) * (orbitSize.md / 2);
                          const y = Math.sin(rad) * (orbitSize.md / 2);
                          
                          return (
                            <Box
                              key={`node-${i}-${j}`}
                              sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${orbitSize.md / 2}px)`,
                                width: { xs: '20px', sm: '25px', md: '30px' },
                                height: { xs: '20px', sm: '25px', md: '30px' },
                                borderRadius: '50%',
                                background: j % 2 === 0 
                                  ? 'radial-gradient(circle at 30% 30%, rgba(255, 215, 0, 0.9), rgba(255, 215, 0, 0.4))'
                                  : 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.3))',
                                boxShadow: `0 0 15px ${j % 2 === 0 ? 'rgba(255, 215, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)'}`,
                                animation: `pulse ${3 + j}s infinite alternate`,
                                zIndex: 4,
                              }}
                            />
                          );
                        })}
                      </Box>
                    );
                  })}
                  
                  {/* 연결선 */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '100%',
                      height: '100%',
                      transformStyle: 'preserve-3d',
                      animation: 'spin-reverse 30s linear infinite',
                      opacity: 0.6,
                    }}
                  >
                    <svg width="100%" height="100%" viewBox="-200 -200 400 400" preserveAspectRatio="xMidYMid meet">
                      <line x1="0" y1="0" x2="120" y2="120" stroke="#FFD700" strokeWidth="0.5" strokeOpacity="0.6" />
                      <line x1="0" y1="0" x2="-120" y2="120" stroke="#FFD700" strokeWidth="0.5" strokeOpacity="0.6" />
                      <line x1="0" y1="0" x2="-120" y2="-120" stroke="#FFD700" strokeWidth="0.5" strokeOpacity="0.6" />
                      <line x1="0" y1="0" x2="120" y2="-120" stroke="#FFD700" strokeWidth="0.5" strokeOpacity="0.6" />
                      <line x1="120" y1="120" x2="-120" y2="120" stroke="#FFD700" strokeWidth="0.5" strokeOpacity="0.3" />
                      <line x1="-120" y1="120" x2="-120" y2="-120" stroke="#FFD700" strokeWidth="0.5" strokeOpacity="0.3" />
                      <line x1="-120" y1="-120" x2="120" y2="-120" stroke="#FFD700" strokeWidth="0.5" strokeOpacity="0.3" />
                      <line x1="120" y1="-120" x2="120" y2="120" stroke="#FFD700" strokeWidth="0.5" strokeOpacity="0.3" />
                    </svg>
                  </Box>
                  
                  {/* 떠다니는 파티클 */}
                  {[...Array(15)].map((_, i) => {
                    const distance = 50 + Math.random() * 150;
                    const angle = Math.random() * 360;
                    const verticalAngle = Math.random() * 360;
                    const size = 4 + Math.random() * 8;
                    
                    return (
                      <Box
                        key={`particle-3d-${i}`}
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          width: size,
                          height: size,
                          borderRadius: '50%',
                          background: i % 3 === 0 
                            ? 'radial-gradient(circle at center, rgba(255, 215, 0, 0.9), rgba(255, 215, 0, 0.5))'
                            : i % 3 === 1 
                              ? 'radial-gradient(circle at center, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.5))'
                              : 'radial-gradient(circle at center, rgba(255, 165, 0, 0.9), rgba(255, 165, 0, 0.5))',
                          boxShadow: '0 0 5px rgba(255, 215, 0, 0.6)',
                          transform: `translate(-50%, -50%) rotateY(${verticalAngle}deg) rotateX(${angle}deg) translateZ(${distance}px)`,
                          animation: `floating-particle ${5 + Math.random() * 10}s infinite alternate ease-in-out`,
                          zIndex: 3,
                        }}
                      />
                    );
                  })}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      
      {/* 스크롤 인디케이터 */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 20, md: 40 },
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
          zIndex: 10,
        }}
        onClick={() => scrollToContent()}
      >
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            mb: 1,
            fontSize: '0.9rem',
          }}
        >
          스크롤 다운
        </Typography>
        <Box
          sx={{
            width: '30px',
            height: '50px',
            border: '2px solid rgba(255, 215, 0, 0.4)',
            borderRadius: '15px',
            display: 'flex',
            justifyContent: 'center',
            padding: '5px 0',
          }}
        >
          <Box
            sx={{
              width: '6px',
              height: '10px',
              backgroundColor: '#FFD700',
              borderRadius: '3px',
              animation: 'scrollDown 2s infinite',
            }}
          />
        </Box>
      </Box>
      
      {/* 애니메이션 키프레임 */}
      <style jsx global>{`
        @keyframes scrollDown {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-20px); }
        }
        
        @keyframes floatSlow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, -20px); }
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.2); }
          100% { box-shadow: 0 0 40px rgba(255, 215, 0, 0.7), inset 0 0 20px rgba(255, 255, 255, 0.5); }
        }
        
        @keyframes orbit-rotation {
          0% { transform: translate(-50%, -50%) rotateX(70deg) rotateZ(0deg); }
          100% { transform: translate(-50%, -50%) rotateX(70deg) rotateZ(360deg); }
        }
        
        @keyframes spin {
          0% { transform: rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg) rotateZ(0deg); }
          100% { transform: rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg) rotateZ(360deg); }
        }
        
        @keyframes spin-reverse {
          0% { transform: translate(-50%, -50%) rotateZ(0deg); }
          100% { transform: translate(-50%, -50%) rotateZ(-360deg); }
        }
        
        @keyframes gridMove {
          0% { transform: translateZ(0px) translateY(0); }
          100% { transform: translateZ(0px) translateY(40px); }
        }
        
        @keyframes floating-particle {
          0% { transform: translate(-50%, -50%) rotateY(0deg) rotateX(0deg) translateZ(var(--distance)); }
          100% { transform: translate(-50%, -50%) rotateY(10deg) rotateX(10deg) translateZ(calc(var(--distance) + 20px)); }
        }
        
        @keyframes twinkle {
          0% { opacity: 0.2; }
          100% { opacity: 0.7; }
        }
      `}</style>
    </Box>
  );
};

/* ===========================================
   Futuristic Features Section
=========================================== */
const FeaturesSection = () => {
  // 사용자 단계별 진행 경로
  const progressSteps = [
    {
      icon: <MdPerson size={28} />,
      level: "LEVEL 1",
      title: "AI 초보자",
      description: "AI 기술을 처음 접하는 일반인을 위한 단계",
      services: [
        "ChatGPT 기초 활용법",
        "일상 생활 AI 적용하기",
        "업무 생산성 향상 워크숍"
      ]
    },
    {
      icon: <FaLaptopCode size={28} />,
      level: "LEVEL 2",
      title: "개발자 및 연구원",
      description: "AI 기술을 구현하고 개발하는 전문가를 위한 단계",
      services: [
        "LLM 모델 개발 실습",
        "컴퓨터 비전 프로젝트",
        "AI 애플리케이션 구축"
      ]
    },
    {
      icon: <FaBuilding size={28} />,
      level: "LEVEL 3",
      title: "기업 의사 결정자",
      description: "기업의 AI 전략을 수립하는 리더를 위한 단계",
      services: [
        "AI 비즈니스 전략 수립",
        "디지털 트랜스포메이션",
        "AI 도입 ROI 분석"
      ]
    },
    {
      icon: <FaChartLine size={28} />,
      level: "LEVEL 4",
      title: "AI 혁신 리더",
      description: "AI를 통한 혁신과 변화를 이끄는 선도자를 위한 단계",
      services: [
        "AI 기반 신사업 개발",
        "AI 윤리와 거버넌스",
        "미래 기술 트렌드 연구"
      ]
    }
  ];
  
  return (
    <Box 
      id="features-section"
      sx={{ 
        py: { xs: 8, md: 12 }, 
        background: 'linear-gradient(135deg, #000000 0%, #111111 100%)',
        position: 'relative',
        overflow: 'hidden',
        color: '#fff',
      }}
    >
      {/* Background digital particle effect */}
      <Box sx={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        opacity: 0.05,
      }}>
        {[...Array(100)].map((_, i) => (
          <Box
            key={`particle-${i}`}
            sx={{
              position: 'absolute',
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: '#FFD700',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: '0 0 5px rgba(255, 215, 0, 0.5)',
              animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`,
            }}
          />
        ))}
      </Box>
      
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 6, md: 10 }, position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{ 
              fontWeight: 700,
              mb: 3,
              color: '#FFD700',
              fontSize: { xs: '1.8rem', sm: '2rem', md: '3rem' },
              letterSpacing: '-0.02em',
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '60px',
                height: '4px',
                bottom: '-10px',
                left: 'calc(50% - 30px)',
                background: 'linear-gradient(90deg, #FFD700, #FFC107)',
              }
            }}
          >
            모두를 위한 단계별 AI 솔루션
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {progressSteps.map((step, index) => (
            <Grid item xs={12} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    background: 'rgba(15, 15, 15, 0.5)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 215, 0, 0.1)',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)',
                      '& .serviceImage': {
                        transform: 'scale(1.05)',
                        filter: 'grayscale(0%)',
                      },
                      '& .highlightBorder': {
                        opacity: 1,
                      }
                    }
                  }}
                >
                  {/* Highlight Border Animation */}
                  <Box 
                    className="highlightBorder"
                    sx={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: '12px',
                      overflow: 'hidden',
                      opacity: 0,
                      zIndex: 0,
                      transition: 'opacity 0.3s ease',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '-50%',
                        left: '-50%',
                        width: '200%',
                        height: '200%',
                        background: 'conic-gradient(transparent, transparent, transparent, #FFD700)',
                        animation: 'rotate 4s linear infinite',
                        zIndex: -1,
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: '1px',
                        left: '1px',
                        right: '1px',
                        bottom: '1px',
                        borderRadius: '12px',
                        background: 'rgba(15, 15, 15, 0.9)',
                        zIndex: -1,
                      }
                    }}
                  />
                  
                  <Box sx={{ position: 'relative', overflow: 'hidden', pt: '56.25%' /* 16:9 Aspect Ratio */ }}>
                    <CardMedia
                      component="img"
                      image={step.image}
                      alt={step.title}
                      className="serviceImage"
                      sx={{ 
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s ease, filter 0.6s ease',
                        filter: 'grayscale(80%)',
                        zIndex: 1,
                      }}
                    />
                    
                    {/* Overlay gradient */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9))',
                        zIndex: 2,
                      }}
                    />
                    
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        zIndex: 3
                      }}
                    >
                      <Chip 
                        label={step.level} 
                        size="small" 
                        sx={{ 
                          fontWeight: 700,
                          backgroundColor: 'rgba(255, 215, 0, 0.4)',
                          backdropFilter: 'blur(10px)',
                          color: '#FFD700',
                          px: 1.5,
                          py: 0.5,
                          fontSize: '0.9rem',
                          borderRadius: '4px',
                          border: '1px solid rgba(255, 215, 0, 0.6)',
                          letterSpacing: '0.05em',
                        }}
                      />
                    </Box>
                    
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 16,
                        left: 16,
                        zIndex: 3,
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <Chip 
                        icon={<FaCode size={12} color="#FFD700" />} 
                        label={step.duration} 
                        size="small" 
                        sx={{ 
                          backgroundColor: 'rgba(255, 215, 0, 0.2)',
                          backdropFilter: 'blur(10px)',
                          color: '#FFD700',
                          fontWeight: 600,
                          fontSize: '0.85rem',
                          borderRadius: '4px',
                          border: '1px solid rgba(255, 215, 0, 0.4)',
                          '& .MuiChip-icon': {
                            color: '#FFD700',
                            marginLeft: '8px'
                          }
                        }}
                      />
                    </Box>
                    
                    {/* Title overlay on image */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        p: 3,
                        zIndex: 3,
                      }}
                    >
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        sx={{ 
                          fontWeight: 700,
                          color: '#FFD700',
                          fontSize: '1.4rem',
                          textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            width: '30px',
                            height: '2px',
                            bottom: '-8px',
                            left: '0',
                            background: '#FFD700',
                          }
                        }}
                      >
                        {step.title}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3, zIndex: 2 }}>
                    <Typography 
                      variant="body2"
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.9)',
                        mb: 3,
                        flexGrow: 1,
                        lineHeight: 1.7,
                        fontSize: '0.95rem',
                      }}
                    >
                      {step.description}
                    </Typography>
                    
                    <Divider sx={{ my: 2, borderColor: 'rgba(255, 215, 0, 0.2)' }} />
                    
                    <Typography variant="subtitle2" sx={{ 
                      fontWeight: 700, 
                      mb: 1.5, 
                      color: '#FFD700',
                      fontSize: '0.9rem',
                    }}>
                      주요 내용:
                    </Typography>
                    
                    <Box sx={{ mb: 3 }}>
                      {step.services.map((service, serviceIndex) => (
                        <Box
                          key={serviceIndex}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 1.5
                          }}
                        >
                          <Box
                            sx={{
                              width: 20,
                              height: 20,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: 'rgba(255, 215, 0, 0.3)',
                              borderRadius: '4px',
                              color: '#FFD700',
                              mr: 1.5,
                              flexShrink: 0
                            }}
                          >
                            <MdCheck size={14} />
                          </Box>
                          <Typography variant="body2" sx={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 500 }}>
                            {service}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mt: 8,
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Button
            variant="outlined"
            size="large"
            endIcon={<MdKeyboardArrowDown />}
            onClick={() => window.location.href = 'mailto:jay@connexionai.kr'}
            sx={{
              borderRadius: '4px',
              px: 4,
              py: 1.5,
              borderWidth: '1px',
              borderColor: 'rgba(255, 215, 0, 0.5)',
              background: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(10px)',
              color: '#FFD700',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                borderColor: '#FFD700',
                background: 'rgba(255, 215, 0, 0.1)',
                transform: 'translateY(-3px)',
              }
            }}
          >
            모든 서비스 보기
          </Button>
        </Box>
      </Container>
      
      {/* Custom keyframes for rotating border */}
      <style jsx global>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }
      `}</style>
    </Box>
  );
};

/* ===========================================
   Founder Section - Futuristic Design
=========================================== */
const FounderSection = ({ navigate }) => {
  return (
    <Box 
      id="founder-section"
      sx={{ 
        py: { xs: 8, md: 12 }, 
        background: 'linear-gradient(135deg, #000000 0%, #111111 100%)',
        position: 'relative',
        overflow: 'hidden',
        color: '#fff',
      }}
    >
      {/* Background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      >
        {/* Grid lines */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(rgba(255, 215, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 215, 0, 0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            zIndex: 1,
          }}
        />
        
        {/* Glowing orbs */}
        {[...Array(3)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              width: { xs: '150px', md: '300px' },
              height: { xs: '150px', md: '300px' },
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: 'translate(-50%, -50%)',
              filter: 'blur(40px)',
              animation: `float ${5 + i}s ease-in-out infinite alternate`,
              zIndex: 0,
            }}
          />
        ))}
      </Box>
      
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(255, 215, 0, 0.2)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.2), transparent)',
                    zIndex: 1,
                  }
                }}
              >
                <CardMedia
                  component="img"
                  image="/images/jayjung.png"
                  alt="Wonseok Jung"
                  sx={{
                    height: { xs: '350px', md: '500px' },
                    objectFit: 'cover',
                    filter: 'grayscale(30%)',
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <Box>
                <Chip 
                  label="FOUNDER" 
                  sx={{ 
                    mb: 3, 
                    fontWeight: 600, 
                    color: '#000', 
                    bgcolor: '#FFD700', 
                    borderRadius: '4px',
                    px: 2,
                    py: 0.5,
                    fontSize: '0.8rem',
                    letterSpacing: '0.05em',
                  }} 
                />
                
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{ 
                    fontWeight: 700,
                    mb: 3,
                    color: '#FFD700',
                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                    letterSpacing: '-0.02em',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '60px',
                      height: '4px',
                      bottom: '-10px',
                      left: '0',
                      background: 'linear-gradient(90deg, #FFD700, #FFC107)',
                    }
                  }}
                >
                  Wonseok Jung (정원석)
                </Typography>
                
                <Typography
                  variant="h6"
                  sx={{ 
                    fontWeight: 500,
                    mb: 4,
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                  }}
                >
                  Connect AI LAB 창립자 & AI 전문가
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.8)',
                    mb: 4,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.8,
                  }}
                >
                  <strong>학력</strong><br />
                  뉴욕시립대, City University of New York - Baruch College - Data Science<br />
                  일리노이공대, Illinois Tech - Data Science<br /><br />
                  
                  <strong>주요 경력</strong><br />
                  2017 ConnexionAI 설립 200억 규모 AI 스마트팩토리 구축 프로젝트 컨설팅, AI 솔루션 개발<br />
                  2018 PostAI, 강화학습 "REWARD SHAPING IS ALL YOU NEED" 논문 발표,<br />
                  "Exploration method for reducing uncertainty using Q-entropy in deep reinforcement learning" 논문 발표 및 Best Poster Award 수상<br />
                  2019 AI COLLEGE 기획, 운영 200명 이상의 AI 연구원 양성, NeurIPS, CVPR 등 유수 컨퍼런스에 논문 게재<br />
                  2020 AI 헬스케어 스타트업 옵트버스 설립, 50억 가치 인정 투자<br />
                  2022 META 싱가폴 아시아 지역 테크 글로벌 리더 4인 선정<br />
                  2023 AI 해킹 방어 툴 개발 뤼튼 해커톤 1위, 블록체인 해커톤 2위 수상<br />
                  2024 서울사이버대학교 공과대학 인공지능 전공 대우 교수<br />
                  2024 (주)놀잇 인공지능 R&D팀 리더 알파세대를 위한 AI 교육 솔루션 컨설팅/개발
                </Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                  {['AI 연구', 'AI 교육', '스타트업 멘토', '기술 컨설턴트'].map((tag, index) => (
                    <Chip 
                      key={index}
                      label={tag} 
                      size="small" 
                      sx={{ 
                        backgroundColor: 'rgba(255, 215, 0, 0.1)',
                        backdropFilter: 'blur(10px)',
                        color: '#FFD700',
                        fontWeight: 500,
                        fontSize: '0.85rem',
                        borderRadius: '4px',
                        border: '1px solid rgba(255, 215, 0, 0.3)',
                      }}
                    />
                  ))}
                </Box>
                
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {[
                    { icon: <FaInstagram size={18} />, url: 'https://www.instagram.com/somandjay/' },
                    { icon: <FaYoutube size={18} />, url: 'https://www.youtube.com/@CONNECT-AI-LAB' },
                  ].map((social, index) => (
                    <IconButton
                      key={index}
                      onClick={() => window.open(social.url, '_blank')}
                      sx={{
                        width: 40,
                        height: 40,
                        backgroundColor: 'rgba(255, 215, 0, 0.1)',
                        backdropFilter: 'blur(10px)',
                        color: '#FFD700',
                        border: '1px solid rgba(255, 215, 0, 0.3)',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 215, 0, 0.2)',
                          transform: 'translateY(-3px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

/* ===========================================
   Services Section - Futuristic Cards
=========================================== */
const ServicesSection = ({ navigate }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // 맞춤형 AI 서비스 데이터
  const popularServices = [
    {
      id: 1,
      title: "AI 첫걸음: 일상 생활의 AI 활용",
      description: "AI를 처음 접하는 일반인을 위한 맞춤형 프로그램입니다. ChatGPT 등 생성형 AI를 활용해 일상 생활과 업무에서 생산성을 높이는 방법을 쉽게 배워보세요.",
      level: "입문자",
      image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
      features: ["AI 기초 개념 이해", "ChatGPT 활용법", "프롬프트 작성법"]
    },
    {
      id: 2,
      title: "개발자를 위한 AI 모델 개발",
      description: "프로그래밍 지식을 갖춘 개발자와 연구원을 위한 맞춤형 과정입니다. 최신 AI 모델 개발 방법론과 실무 적용 기술을 배우고 실제 프로젝트에 적용해보세요.",
      level: "개발자/연구원",
      image: "https://images.unsplash.com/photo-1581090700227-8e3b68380a65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
      features: ["LLM 아키텍처 이해", "모델 파인튜닝", "AI 애플리케이션 개발"]
    },
    {
      id: 3,
      title: "기업 맞춤형 AI 전략 컨설팅",
      description: "기업의 현재 상태를 진단하고 비즈니스 목표에 맞는 최적의 AI 도입 전략을 수립합니다. 산업별 특성을 고려한 맞춤형 AI 로드맵으로 디지털 혁신을 시작하세요.",
      level: "기업 임원/전문가",
      image: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
      features: ["AI 비즈니스 진단", "도입 전략 수립", "ROI 분석"]
    },
    {
      id: 4,
      title: "AI 스타트업 창업 컨설팅",
      description: "소규모팀 또는 1인 기업으로 AI 스타트업을 창업하려는 분들을 위한 맞춤형 과정입니다. 아이디어 검증부터 MVP 개발, 투자 유치까지 전 과정을 지원합니다.",
      level: "창업가",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
      features: ["AI 비즈니스 모델 설계", "MVP 개발 전략", "투자 유치 준비"]
    }
  ];

  return (
    <Box 
      sx={{ 
        py: { xs: 6, sm: 8, md: 12 }, 
        background: 'linear-gradient(135deg, #000000 0%, #111111 100%)',
        position: 'relative',
        overflow: 'hidden',
        color: '#fff',
        boxShadow: 'none',
      }}
    >
      {/* Abstract background waves */}
      <Box
        component="svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '50%',
          width: '100%',
          zIndex: 0,
          opacity: 0.05,
        }}
      >
        <path
          fill="#FFD700"
          fillOpacity="1"
          d="M0,224L48,213.3C96,203,192,181,288,192C384,203,480,245,576,229.3C672,213,768,139,864,117.3C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </Box>
      
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 6, md: 10 }, position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{ 
              fontWeight: 700,
              mb: 3,
              color: '#FFD700',
              fontSize: { xs: '1.8rem', sm: '2rem', md: '3rem' },
              letterSpacing: '-0.02em',
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '60px',
                height: '4px',
                bottom: '-10px',
                left: 'calc(50% - 30px)',
                background: 'linear-gradient(90deg, #FFD700, #FFC107)',
              }
            }}
          >
            AI 서비스 및 솔루션
          </Typography>
          
          <Typography
            variant="body1"
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto',
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              mt: 4,
              px: { xs: 2, md: 0 }
            }}
          >
            인공지능 기술을 통해 개인과 기업이 새로운 가능성을 발견하고 혁신할 수 있도록 돕습니다.
            AI 스타트업 창업부터 기업 컨설팅, 교육까지 - 당신의 AI 여정을 함께합니다.
          </Typography>
        </Box>
        
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {popularServices.map((service, index) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    background: 'rgba(15, 15, 15, 0.5)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 215, 0, 0.1)',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)',
                      '& .serviceImage': {
                        transform: 'scale(1.05)',
                        filter: 'grayscale(0%)',
                      },
                      '& .highlightBorder': {
                        opacity: 1,
                      }
                    }
                  }}
                >
                  {/* Highlight Border Animation */}
                  <Box 
                    className="highlightBorder"
                    sx={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: '12px',
                      overflow: 'hidden',
                      opacity: 0,
                      zIndex: 0,
                      transition: 'opacity 0.3s ease',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '-50%',
                        left: '-50%',
                        width: '200%',
                        height: '200%',
                        background: 'conic-gradient(transparent, transparent, transparent, #FFD700)',
                        animation: 'rotate 4s linear infinite',
                        zIndex: -1,
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: '1px',
                        left: '1px',
                        right: '1px',
                        bottom: '1px',
                        borderRadius: '12px',
                        background: 'rgba(15, 15, 15, 0.9)',
                        zIndex: -1,
                      }
                    }}
                  />
                  
                  <Box sx={{ position: 'relative', overflow: 'hidden', pt: { xs: '75%', md: '56.25%' } /* Taller aspect ratio on mobile */ }}>
                    <CardMedia
                      component="img"
                      image={service.image}
                      alt={service.title}
                      className="serviceImage"
                      sx={{ 
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s ease, filter 0.6s ease',
                        filter: 'grayscale(80%)',
                        zIndex: 1,
                      }}
                    />
                    
                    {/* Overlay gradient */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9))',
                        zIndex: 2,
                      }}
                    />
                    
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        zIndex: 3
                      }}
                    >
                      <Chip 
                        label={service.level} 
                        size="small" 
                        sx={{ 
                          fontWeight: 700,
                          backgroundColor: 'rgba(255, 215, 0, 0.4)',
                          backdropFilter: 'blur(10px)',
                          color: '#FFD700',
                          px: 1.5,
                          py: 0.5,
                          fontSize: '0.9rem',
                          borderRadius: '4px',
                          border: '1px solid rgba(255, 215, 0, 0.6)',
                          letterSpacing: '0.05em',
                        }}
                      />
                    </Box>
                    
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 16,
                        left: 16,
                        zIndex: 3,
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <Chip 
                        icon={<FaCode size={12} color="#FFD700" />} 
                        label={service.duration} 
                        size="small" 
                        sx={{ 
                          backgroundColor: 'rgba(255, 215, 0, 0.2)',
                          backdropFilter: 'blur(10px)',
                          color: '#FFD700',
                          fontWeight: 600,
                          fontSize: '0.85rem',
                          borderRadius: '4px',
                          border: '1px solid rgba(255, 215, 0, 0.4)',
                          '& .MuiChip-icon': {
                            color: '#FFD700',
                            marginLeft: '8px'
                          }
                        }}
                      />
                    </Box>
                    
                    {/* Title overlay on image */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        p: 3,
                        zIndex: 3,
                      }}
                    >
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        sx={{ 
                          fontWeight: 700,
                          color: '#FFD700',
                          fontSize: '1.4rem',
                          textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            width: '30px',
                            height: '2px',
                            bottom: '-8px',
                            left: '0',
                            background: '#FFD700',
                          }
                        }}
                      >
                        {service.title}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3, zIndex: 2 }}>
                    <Typography 
                      variant="body2"
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.9)',
                        mb: 3,
                        flexGrow: 1,
                        lineHeight: 1.7,
                        fontSize: '0.95rem',
                      }}
                    >
                      {service.description}
                    </Typography>
                    
                    <Divider sx={{ my: 2, borderColor: 'rgba(255, 215, 0, 0.2)' }} />
                    
                    <Typography variant="subtitle2" sx={{ 
                      fontWeight: 700, 
                      mb: 1.5, 
                      color: '#FFD700',
                      fontSize: '0.9rem',
                    }}>
                      주요 내용:
                    </Typography>
                    
                    <Box sx={{ mb: 3 }}>
                      {service.features.map((feature, featureIndex) => (
                        <Box
                          key={featureIndex}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 1.5
                          }}
                        >
                          <Box
                            sx={{
                              width: 20,
                              height: 20,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: 'rgba(255, 215, 0, 0.3)',
                              borderRadius: '4px',
                              color: '#FFD700',
                              mr: 1.5,
                              flexShrink: 0
                            }}
                          >
                            <MdCheck size={14} />
                          </Box>
                          <Typography variant="body2" sx={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 500 }}>
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mt: 8,
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Button
            variant="outlined"
            size="large"
            endIcon={<MdKeyboardArrowDown />}
            onClick={() => window.location.href = 'mailto:jay@connexionai.kr'}
            sx={{
              borderRadius: '4px',
              px: 4,
              py: 1.5,
              borderWidth: '1px',
              borderColor: 'rgba(255, 215, 0, 0.5)',
              background: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(10px)',
              color: '#FFD700',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                borderColor: '#FFD700',
                background: 'rgba(255, 215, 0, 0.1)',
                transform: 'translateY(-3px)',
              }
            }}
          >
            모든 서비스 보기
          </Button>
        </Box>
      </Container>
      
      {/* Custom keyframes for rotating border */}
      <style jsx global>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </Box>
  );
};

/* ===========================================
   CTA Section - Futuristic Design
=========================================== */
const CtaSection = ({ navigate }) => {
  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 }, 
        background: 'linear-gradient(135deg, #000000 0%, #111111 100%)',
        position: 'relative',
        overflow: 'hidden',
        color: '#fff',
      }}
    >
      {/* Futuristic grid background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          perspective: '1000px',
          transformStyle: 'preserve-3d',
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            transform: 'rotateX(60deg) scale(2.5)',
            transformOrigin: 'center center',
            background: 'radial-gradient(circle at center, rgba(255, 215, 0, 0.1) 0%, rgba(0, 0, 0, 0) 60%)',
            backgroundSize: '100% 100%',
            opacity: 0.3,
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              right: '-50%',
              bottom: '-50%',
              backgroundImage: 'linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
              animation: 'gridMove 40s linear infinite',
            }}
          />
        </Box>
      </Box>
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <Box 
          sx={{ 
            textAlign: 'center',
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 215, 0, 0.3)',
            p: { xs: 3, sm: 4, md: 6 },
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background accent elements */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
              opacity: 0.7,
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(255, 165, 0, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
              opacity: 0.7,
              zIndex: 0,
            }}
          />
          
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Chip 
              label="AI INNOVATION" 
              sx={{ 
                mb: 3, 
                fontWeight: 600, 
                color: '#000', 
                bgcolor: '#FFD700', 
                borderRadius: '4px',
                px: 2,
                py: 0.5,
                fontSize: '0.8rem',
                letterSpacing: '0.05em',
              }} 
            />
            <Typography
              variant="h2"
              component="h2"
              sx={{ 
                fontWeight: 800,
                mb: 3,
                color: '#FFD700',
                fontSize: { xs: '1.8rem', sm: '2rem', md: '3rem' },
                letterSpacing: '-0.02em',
                textShadow: '0 5px 20px rgba(0, 0, 0, 0.3)',
                position: 'relative',
                display: 'inline-block',
              }}
            >
              당신의 AI 여정을 시작하세요
            </Typography>
            <Typography
              variant="body1"
              sx={{ 
                maxWidth: '800px', 
                mx: 'auto',
                color: '#fff',
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.2rem' },
                lineHeight: 1.8,
                mb: { xs: 4, md: 6 },
                px: { xs: 1, md: 0 },
              }}
            >
              "AI는 이제 선택이 아닌 필수입니다."
              Connect AI LAB과 함께 AI 초보자부터 전문가까지 당신에게 맞는 최적의 여정을 설계하고
              인공지능이 가져올 무한한 가능성의 세계를 경험해보세요.
            </Typography>
            
            {/* Animated Glow Button */}
            <Box
              sx={{
                position: 'relative',
                display: 'inline-block',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'radial-gradient(circle, rgba(255, 215, 0, 0.4) 0%, rgba(255, 165, 0, 0) 70%)',
                  filter: 'blur(15px)',
                  borderRadius: '4px',
                  animation: 'pulse 2s infinite alternate',
                  zIndex: 0,
                }}
              />
              <Button
                variant="contained"
                size="large"
                endIcon={<MdArrowForward />}
                onClick={() => window.location.href = 'mailto:jay@connexionai.kr'}
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  borderRadius: '4px',
                  px: { xs: 3, sm: 4, md: 5 },
                  py: { xs: 1.5, md: 2 },
                  background: 'linear-gradient(90deg, #FFD700, #FFC107)',
                  color: '#000',
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  boxShadow: '0 10px 25px rgba(255, 215, 0, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #FFD700 30%, #FFC107 100%)',
                    transform: 'translateY(-3px) scale(1.03)',
                    boxShadow: '0 15px 35px rgba(255, 215, 0, 0.5)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                맞춤형 상담 신청하기
              </Button>
            </Box>
            
            {/* User Types */}
            <Box 
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: { xs: 1, md: 2 },
                mt: { xs: 6, md: 8 },
                flexWrap: 'wrap'
              }}
            >
              {[
                { icon: <MdPerson size={18} />, label: '초보자' },
                { icon: <FaLaptopCode size={18} />, label: '개발자' },
                { icon: <FaBuilding size={18} />, label: '기업' },
                { icon: <FaChartLine size={18} />, label: '리더' }
              ].map((item, index) => (
                <Chip
                  key={index}
                  icon={
                    <Box 
                      sx={{
                        color: index % 2 === 0 ? '#000' : '#FFD700',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {item.icon}
                    </Box>
                  }
                  label={item.label}
                  sx={{
                    backgroundColor: index % 2 === 0 
                      ? '#FFD700' 
                      : 'rgba(255, 215, 0, 0.1)',
                    color: index % 2 === 0 ? '#000' : '#FFD700',
                    fontSize: { xs: '0.8rem', md: '0.85rem' },
                    fontWeight: 500,
                    px: { xs: 1, md: 2 },
                    py: { xs: 2, md: 2.5 },
                    borderRadius: '4px',
                    border: index % 2 === 0
                      ? '1px solid #FFD700'
                      : '1px solid rgba(255, 215, 0, 0.3)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: index % 2 === 0
                      ? '0 5px 15px rgba(255, 215, 0, 0.3)'
                      : 'none',
                    '& .MuiChip-icon': {
                      color: index % 2 === 0 ? '#000' : '#FFD700',
                      mr: { xs: 0.5, md: 1 }
                    },
                    '& .MuiChip-label': {
                      px: { xs: 0.5, md: 1 }
                    }
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Container>
    
    {/* Custom keyframes for grid movement */}
    <style jsx global>{`
      @keyframes gridMove {
        0% { transform: translateY(0) translateX(0); }
        100% { transform: translateY(50px) translateX(50px); }
      }
    `}</style>
  </Box>
);
};

/* ===========================================
 Main Home Component
=========================================== */
const Home = () => {
const navigate = useNavigate();

return (
  <Box>
    <NavigationBar navigate={navigate} />
    <HeroSection navigate={navigate} />
    <FounderSection navigate={navigate} />
    <ServicesSection navigate={navigate} />
    <CtaSection navigate={navigate} />
  </Box>
);
};

export default Home;
       