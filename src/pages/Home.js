import React, { useState, useEffect } from 'react';
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
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { GiBrain } from "react-icons/gi";
import { MdIntegrationInstructions, MdAutoFixHigh, MdSecurity } from "react-icons/md";
import { FaRobot, FaNetworkWired, FaDatabase, FaYoutube, FaInstagram } from 'react-icons/fa';

// Brand colors
const BRAND_COLORS = {
  navy: '#000000',
  navyLight: '#121212',
  teal: '#ffffff',
  tealDark: '#e0e0e0',
  slate: '#a0a0a0',
  white: '#ffffff',
  cyan: '#ffffff'
};

/* ===========================================
   Wave Divider (SVG)
   flip=true -> 위에서 아래로 뒤집힘
=========================================== */
const WaveDivider = ({ flip }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        lineHeight: 0,
        transform: flip ? 'rotate(180deg)' : 'none',
        zIndex: 2
      }}
    >
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '75px' }}
      >
        <path
          d="M0.00,49.98 C167.82,107.59 324.08,-11.26 503.32,69.42 L500.00,0.00 L0.00,0.00 Z"
          style={{ fill: BRAND_COLORS.navy }}
        />
      </svg>
    </Box>
  );
};

/* ===========================================
   Navigation Bar
=========================================== */
const NavigationBar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: scrolled ? 'rgba(0,0,0,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              cursor: 'pointer',
              color: '#ffffff',
              letterSpacing: '0.2em',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
            }}
            onClick={() => navigate('/')}
          >
            CONNEXIONAI
          </Typography>
          <Box sx={{ display: 'flex', gap: 4 }}>
            {['Home', 'About', 'Blog'].map((item) => (
              <Typography
                key={item}
                onClick={() =>
                  navigate(item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                }
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  fontFamily: 'monospace',
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  position: 'relative',
                  '&:hover': {
                    color: '#ffffff',
                    '&::after': {
                      width: '100%',
                    },
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    width: 0,
                    height: '2px',
                    backgroundColor: '#ffffff',
                    transition: 'width 0.3s ease-in-out',
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Tooltip title="YouTube">
              <IconButton
                component="a"
                href="https://www.youtube.com/channel/UCdLZ0MsYS4hmqFgOYCB6C9w"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'rgba(255,255,255,0.7)',
                  mr: 1,
                  '&:hover': { 
                    color: '#FF0000',
                    transform: 'translateY(-3px)',
                    transition: 'all 0.3s ease',
                  }
                }}
              >
                <FaYoutube />
              </IconButton>
            </Tooltip>
            <Tooltip title="Instagram">
              <IconButton
                component="a"
                href="https://www.instagram.com/somandjay"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'rgba(255,255,255,0.7)',
                  mr: 2,
                  '&:hover': { 
                    color: '#E1306C',
                    transform: 'translateY(-3px)',
                    transition: 'all 0.3s ease',
                  }
                }}
              >
                <FaInstagram />
              </IconButton>
            </Tooltip>
            <Button
              variant="outlined"
              size="small"
              sx={{
                color: '#ffffff',
                borderColor: 'rgba(255,255,255,0.3)',
                fontFamily: 'monospace',
                letterSpacing: '0.1em',
                borderRadius: '4px',
                '&:hover': {
                  borderColor: '#ffffff',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

/* ===========================================
   Hero Section with Animated Text
=========================================== */
const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = 'CONNEXIONAI';
  
  useEffect(() => {
    let currentIndex = 0;
    let interval;
    
    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          currentIndex = 0;
          interval = setInterval(typeText, 200);
        }, 4000);
      }
    };
    
    interval = setInterval(typeText, 200);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Box 
      sx={{ 
        position: 'relative', 
        height: '100vh', 
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, ${BRAND_COLORS.navy} 0%, ${BRAND_COLORS.navyLight} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            color: '#fff',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4.5rem' },
                fontWeight: 700,
                mb: 2,
                color: BRAND_COLORS.white,
                textShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
                fontFamily: 'monospace',
                letterSpacing: '0.2em',
                position: 'relative',
                borderRight: '0.15em solid #fff',
                animation: 'blink-caret 1.5s step-end infinite',
                '@keyframes blink-caret': {
                  'from, to': { borderColor: 'transparent' },
                  '50%': { borderColor: '#fff' },
                },
              }}
            >
              {text}
              <Box
                component="span"
                sx={{
                  position: 'absolute',
                  top: '-2rem',
                  right: '-2rem',
                  fontSize: '1rem',
                  color: BRAND_COLORS.white,
                  opacity: 0.5,
                  fontFamily: 'monospace',
                }}
              >
                AI Autonomy
              </Box>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '2.5rem' },
                fontWeight: 300,
                mb: 4,
                color: 'rgba(255,255,255,0.9)',
                fontFamily: 'monospace',
                letterSpacing: '0.05em',
              }}
            >
              AI 기술로 자율화된 기업의 미래를 창조합니다<br />
              Since 2017
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1, ease: "easeOut" }}
          >
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', mb: 6 }}>
              {['#인공지능자율화', '#기업AI혁신', '#AI에이전트연구'].map((tag, index) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.5 + index * 0.2 }}
                >
                  <Typography
                    sx={{
                      color: BRAND_COLORS.teal,
                      fontSize: { xs: '1rem', md: '1.2rem' },
                      fontFamily: 'monospace',
                      padding: '4px 12px',
                      borderRadius: '4px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 4px 15px rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {tag}
                  </Typography>
                </motion.div>
              ))}
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.3 } }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => window.location.href = 'mailto:jay@connexionai.kr'}
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 500,
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                color: BRAND_COLORS.white,
                boxShadow: '0 3px 15px rgba(255, 255, 255, 0.2)',
                fontFamily: 'monospace',
                borderRadius: '4px',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 5px 20px rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.5s ease',
                },
              }}
            >
              AI 자율화 상담
            </Button>
          </motion.div>
        </Box>
      </Container>
      
      {/* Enhanced 3D-like background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        {/* Code Matrix background effect */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            opacity: 0.05,
          }}
        >
          {[...Array(20)].map((_, idx) => (
            <motion.div
              key={`code-line-${idx}`}
              initial={{ y: -1000 }}
              animate={{ 
                y: 2000,
              }}
              transition={{
                duration: 60 + Math.random() * 60,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
                delay: Math.random() * 10,
              }}
              style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                fontFamily: 'monospace',
                color: '#ffffff',
                opacity: 0.2 + Math.random() * 0.3,
                fontSize: '12px',
              }}
            >
              {[...Array(20)].map((_, i) => (
                <div key={i} style={{ marginBottom: '8px' }}>
                  {Math.random() > 0.5 ? '0' : '1'}
                  {Math.random() > 0.7 ? ' <>' : ' {}'}
                  {Math.random() > 0.5 ? ' AI' : ' ML'}
                </div>
              ))}
            </motion.div>
          ))}
        </Box>
        
        {/* Grid lines for tech feel */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            opacity: 0.3,
            perspective: '1000px',
            transform: 'rotateX(60deg)',
            transformOrigin: 'bottom',
          }}
        />
        
        {/* Connection lines */}
        <svg
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 0,
            opacity: 0.2,
          }}
        >
          {[...Array(10)].map((_, i) => (
            <motion.path
              key={`path-${i}`}
              stroke={BRAND_COLORS.teal}
              strokeWidth="1"
              fill="none"
              d={`M${Math.random() * 100},${Math.random() * 100} C${Math.random() * 100},${Math.random() * 100} ${Math.random() * 100},${Math.random() * 100} ${Math.random() * 100},${Math.random() * 100}`}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: [0, 0.5, 0],
              }}
              transition={{ 
                duration: 8 + Math.random() * 6,
                ease: 'easeInOut',
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </svg>
      </Box>
    </Box>
  );
};

/* ===========================================
   Services Section
=========================================== */
const ServicesSection = () => (
  <Box sx={{ py: 10, position: 'relative' }}>
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 2,
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700,
            color: BRAND_COLORS.white,
            fontFamily: 'monospace',
            letterSpacing: '0.1em',
          }}
        >
          AI 자율화 연구개발
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            mb: 6,
            color: BRAND_COLORS.slate,
            fontSize: { xs: '1rem', md: '1.2rem' },
            fontFamily: 'monospace',
          }}
        >
          기업에 최적화된 AI 에이전트 도입으로 자율화의 새 시대를 열어갑니다
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <ServiceCard
            icon={<FaRobot style={{ fontSize: '2.5rem' }} />}
            title="자율 AI 에이전트 개발"
            description="기업 특화 인공지능 에이전트 개발로 업무 프로세스의 자율화를 실현합니다."
            features={[
              "업무 프로세스 자동화 에이전트",
              "의사결정 지원 시스템",
              "자율 학습형 AI 시스템",
              "행동 예측형 인공지능"
            ]}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ServiceCard
            icon={<GiBrain style={{ fontSize: '2.5rem' }} />}
            title="기업 AI 전환 솔루션"
            description="기존 기업 시스템에 AI 자율화 기술을 통합하여 디지털 전환을 가속화합니다."
            features={[
              "AI 시스템 통합 아키텍처",
              "레거시 시스템 현대화",
              "자율형 워크플로우 설계",
              "ROI 기반 단계적 전환"
            ]}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ServiceCard
            icon={<MdIntegrationInstructions style={{ fontSize: '2.5rem' }} />}
            title="AI 자율화 인프라 구축"
            description="기업 환경에 최적화된 AI 자율화 인프라 구축으로 지속가능한 혁신을 지원합니다."
            features={[
              "클라우드 기반 AI 플랫폼",
              "MLOps/AIOps 환경 구축",
              "실시간 데이터 처리 시스템",
              "AI 모델 모니터링 체계"
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

const ServiceCard = ({ icon, title, description, features }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <Paper
      elevation={0}
      sx={{
        p: 4,
        height: '100%',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderRadius: '4px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          background: 'rgba(255, 255, 255, 0.08)',
          boxShadow: '0 8px 30px rgba(255, 255, 255, 0.1)',
        },
      }}
    >
      <Box sx={{ color: BRAND_COLORS.teal, mb: 2 }}>
        {icon}
      </Box>
      <Typography
        variant="h5"
        sx={{
          color: 'white',
          mb: 2,
          fontWeight: 600,
          fontFamily: 'monospace',
          letterSpacing: '0.05em',
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: BRAND_COLORS.slate,
          mb: 3,
          fontFamily: 'monospace',
        }}
      >
        {description}
      </Typography>
      <Box component="ul" sx={{ color: BRAND_COLORS.slate, pl: 3 }}>
        {features.map((feature, index) => (
          <Box
            component="li"
            key={index}
            sx={{
              mb: 1,
              fontFamily: 'monospace',
            }}
          >
            {feature}
          </Box>
        ))}
      </Box>
    </Paper>
  </motion.div>
);

/* ===========================================
   Features Section
=========================================== */
const FeaturesSection = () => (
  <Box
    sx={{
      py: 10,
      background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(10,10,10,0.9) 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Matrix Code Effect */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        opacity: 0.03,
        zIndex: 0,
      }}
    >
      {[...Array(15)].map((_, idx) => (
        <motion.div
          key={`code-column-${idx}`}
          initial={{ y: -2000 }}
          animate={{ 
            y: 3000,
          }}
          transition={{
            duration: 60 + Math.random() * 40,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            delay: Math.random() * 10,
          }}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            fontFamily: 'monospace',
            color: '#ffffff',
            opacity: 0.7,
            fontSize: '10px',
            letterSpacing: '2px',
            lineHeight: '1.2',
            textAlign: 'center',
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
          }}
        >
          {'10101010110101010101010101'.split('').map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </motion.div>
      ))}
    </Box>

    {/* 그리드 라인 */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        zIndex: 1,
      }}
    />

    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 2,
            color: BRAND_COLORS.white,
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700,
            fontFamily: 'monospace',
            letterSpacing: '0.2em',
            textShadow: '0 0 15px rgba(255, 255, 255, 0.3)',
            position: 'relative',
            display: 'inline-block',
            '&::before': {
              content: '"<"',
              marginRight: '10px',
              opacity: 0.5,
            },
            '&::after': {
              content: '"/>"',
              marginLeft: '10px',
              opacity: 0.5,
            }
          }}
        >
          미래형 AI 자율화 기술
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            mb: 6,
            color: '#a8b2d1',
            fontSize: { xs: '1rem', md: '1.2rem' },
            maxWidth: '800px',
            mx: 'auto',
            fontFamily: 'monospace',
          }}
        >
          진보된 AI 자율 시스템으로 복잡한 업무를 효율화하고 새로운 가치를 창출합니다
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <FeatureCard
            icon={<FaNetworkWired style={{ fontSize: '2.5rem' }} />}
            title="멀티 에이전트 아키텍처"
            description="다중 AI 에이전트가 상호작용하는 복합 시스템으로 업무 프로세스의 자율화를 극대화합니다."
            sx={{ height: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureCard
            icon={<FaDatabase style={{ fontSize: '2.5rem' }} />}
            title="실시간 데이터 처리 엔진"
            description="방대한 데이터를 실시간으로 처리하여 AI 에이전트의 의사결정 정확도를 높입니다."
            sx={{ height: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureCard
            icon={<MdAutoFixHigh style={{ fontSize: '2.5rem' }} />}
            title="자가학습 최적화 시스템"
            description="업무 패턴과 환경 변화에 스스로 적응하며 지속적으로 성능을 개선하는 자율 학습 기능을 제공합니다."
            sx={{ height: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureCard
            icon={<MdSecurity style={{ fontSize: '2.5rem' }} />}
            title="엔터프라이즈급 보안 인프라"
            description="기업 데이터 보호와 규제 준수를 보장하는 강력한 보안 체계로 안전한 AI 자율화를 지원합니다."
            sx={{ height: '100%' }}
          />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

const FeatureCard = ({ icon, title, description, sx = {} }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: '100%',
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '4px',
        transition: 'all 0.3s ease',
        ':hover': {
          boxShadow: '0 8px 30px rgba(255, 255, 255, 0.1)',
          transform: 'translateY(-5px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        },
        ...sx
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 2,
          color: BRAND_COLORS.white,
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="h6"
        sx={{
          mb: 1,
          fontWeight: 700,
          color: BRAND_COLORS.white,
          fontFamily: 'monospace',
          letterSpacing: '0.1em',
          position: 'relative',
          '&::before': {
            content: '"> "',
            color: 'rgba(255,255,255,0.5)',
            fontWeight: 'normal',
          }
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: '#a8b2d1',
          fontFamily: 'monospace',
        }}
      >
        {description}
      </Typography>
    </Paper>
  </motion.div>
);

/* ===========================================
   Footer
=========================================== */
const Footer = () => (
  <Box
    sx={{
      bgcolor: '#000000',
      color: '#8892b0',
      py: 6,
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* 코드 라인 배경 효과 */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        opacity: 0.03,
      }}
    >
      {[...Array(5)].map((_, idx) => (
        <motion.div
          key={`footer-code-${idx}`}
          style={{
            position: 'absolute',
            left: `${idx * 20}%`,
            top: 0,
            bottom: 0,
            width: '100%',
            fontFamily: 'monospace',
            fontSize: '10px',
            color: '#ffffff',
            whiteSpace: 'pre',
            overflow: 'hidden',
          }}
        >
          {[...Array(20)].map((_, i) => (
            <div key={i}>
              {`function AI_${Math.floor(Math.random() * 1000)}() {`}
              {`  const data = process_${Math.floor(Math.random() * 100)}();`}
              {`  return optimize(data, ${Math.random().toFixed(2)});`}
              {`}`}
            </div>
          ))}
        </motion.div>
      ))}
    </Box>

    <Container maxWidth="lg">
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ color: '#ffffff', mb: 2, fontWeight: 700, fontFamily: 'monospace', letterSpacing: '0.1em' }}>
            CONNEXIONAI
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, fontFamily: 'monospace' }}>
            인공지능을 통한 기업 자율화의 새 시대를 선도합니다. 최첨단 AI 에이전트 기술로 기업의 혁신과 성장을 지원합니다.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
            <Button variant="outlined" size="small" sx={{ color: '#ffffff', borderColor: '#ffffff', fontFamily: 'monospace', borderRadius: '4px' }}>
              블로그
            </Button>
            <Button variant="outlined" size="small" sx={{ color: '#ffffff', borderColor: '#ffffff', fontFamily: 'monospace', borderRadius: '4px' }}>
              연구자료
            </Button>
          </Box>
          
          {/* 소셜 미디어 링크 */}
          <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                component="a"
                href="https://www.youtube.com/channel/UCdLZ0MsYS4hmqFgOYCB6C9w"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: '#ffffff', 
                  border: '1px solid rgba(255,255,255,0.3)',
                  padding: '10px',
                  '&:hover': { 
                    backgroundColor: '#FF0000', 
                    borderColor: '#FF0000'
                  }
                }}
              >
                <FaYoutube size={20} />
              </IconButton>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                component="a"
                href="https://www.instagram.com/somandjay"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: '#ffffff', 
                  border: '1px solid rgba(255,255,255,0.3)',
                  padding: '10px',
                  '&:hover': { 
                    background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                    borderColor: 'transparent'
                  }
                }}
              >
                <FaInstagram size={20} />
              </IconButton>
            </motion.div>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ color: '#ffffff', mb: 2, fontWeight: 700, fontFamily: 'monospace', letterSpacing: '0.05em' }}>
            서비스
          </Typography>
          <List dense>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: '20px', color: '#ffffff' }}>{'>'}</ListItemIcon>
              <ListItemText primary="자율 AI 에이전트 개발" primaryTypographyProps={{ fontFamily: 'monospace', fontSize: '0.9rem' }} />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: '20px', color: '#ffffff' }}>{'>'}</ListItemIcon>
              <ListItemText primary="기업 AI 전환 솔루션" primaryTypographyProps={{ fontFamily: 'monospace', fontSize: '0.9rem' }} />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: '20px', color: '#ffffff' }}>{'>'}</ListItemIcon>
              <ListItemText primary="AI 자율화 인프라 구축" primaryTypographyProps={{ fontFamily: 'monospace', fontSize: '0.9rem' }} />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: '20px', color: '#ffffff' }}>{'>'}</ListItemIcon>
              <ListItemText primary="AI 전문 교육" primaryTypographyProps={{ fontFamily: 'monospace', fontSize: '0.9rem' }} />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ color: '#ffffff', mb: 2, fontWeight: 700, fontFamily: 'monospace', letterSpacing: '0.05em' }}>
            문의
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, fontFamily: 'monospace' }}>
            contact@connexionai.kr
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, fontFamily: 'monospace' }}>
            서울특별시 강남구 테헤란로 501
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, fontFamily: 'monospace' }}>
            02-123-4567
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2" sx={{ mb: 0, mr: 1, fontFamily: 'monospace' }}>
              소셜 미디어:
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Tooltip title="YouTube">
                <IconButton
                  component="a"
                  href="https://www.youtube.com/channel/UCdLZ0MsYS4hmqFgOYCB6C9w"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{ color: '#ffffff' }}
                >
                  <FaYoutube size={16} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Instagram">
                <IconButton
                  component="a"
                  href="https://www.instagram.com/somandjay"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{ color: '#ffffff' }}
                >
                  <FaInstagram size={16} />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', mt: 4, pt: 4, textAlign: 'center' }}>
        <Typography variant="body2" sx={{ color: '#8892b0', fontFamily: 'monospace' }}>
          <span style={{ opacity: 0.5 }}>{'/* '}</span>
          © 2017-2024 CONNEXIONAI. All rights reserved.
          <span style={{ opacity: 0.5 }}>{' */'}</span>
        </Typography>
      </Box>
    </Container>
  </Box>
);

/* ===========================================
   Main Component
=========================================== */
const Home = () => {
  return (
    <Box
      sx={{
        background: BRAND_COLORS.navy,
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <NavigationBar />
      <HeroSection />
      <WaveDivider flip={false} />
      <ServicesSection />
      <WaveDivider flip={false} />
      <FeaturesSection />
      <WaveDivider flip={true} />
      <Footer />
    </Box>
  );
};

export default Home;
