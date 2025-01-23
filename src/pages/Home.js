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
  Fade,
  useScrollTrigger
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdAutorenew, MdIntegrationInstructions } from "react-icons/md";

// Brand colors
const BRAND_COLORS = {
  navy: '#0A1A2F',
  navyLight: '#112240',
  teal: '#64ffda',
  tealDark: '#0c8671',
  slate: '#8892b0',
  white: '#e6f1ff'
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
   Navigation Bar - 스크롤 시 숨김/보임
=========================================== */
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Fade in={!trigger}>
      <Box>{children}</Box>
    </Fade>
  );
}

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
    <HideOnScroll>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled ? 'rgba(16,16,42,0.9)' : 'transparent',
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
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                cursor: 'pointer',
                color: '#ffffff',
                textShadow: '0 0 10px rgba(128, 242, 215, 0.3)',
              }}
              onClick={() => navigate('/')}
            >
              ConnexionAI
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
                    fontFamily: 'Montserrat, sans-serif',
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
                      backgroundColor: '#80f2d7',
                      transition: 'width 0.3s ease-in-out',
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
            <Button
              variant="outlined"
              size="small"
              sx={{
                color: '#ffffff',
                borderColor: 'rgba(255,255,255,0.3)',
                fontFamily: 'Montserrat, sans-serif',
                '&:hover': {
                  borderColor: '#80f2d7',
                  backgroundColor: 'rgba(128, 242, 215, 0.1)',
                },
              }}
            >
              Contact
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

/* ===========================================
   Hero: 메인 타입라이터 텍스트
=========================================== */
const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 100); // 타이핑 속도

    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <Box sx={{ position: 'relative', display: 'inline-block' }}>
      <Typography
        variant="h1"
        component="span"
        sx={{
          fontSize: { xs: '3rem', md: '5rem' },
          fontWeight: 700,
          color: '#ffffff',
          fontFamily: 'Montserrat, sans-serif',
          textShadow: '0 0 20px rgba(128, 242, 215, 0.3)',
          letterSpacing: '0.02em',
          lineHeight: 1.2,
          position: 'relative',
          whiteSpace: 'nowrap',
          '@keyframes blink': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0 },
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            right: '-1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '3px',
            height: '70%',
            backgroundColor: '#80f2d7',
            animation: 'blink 1s step-end infinite',
          },
        }}
      >
        {displayText}
      </Typography>
      {!isTypingComplete && (
        <Box
          component="span"
          sx={{
            display: 'inline-block',
            width: '3px',
            height: '70%',
            backgroundColor: '#80f2d7',
            verticalAlign: 'middle',
            animation: 'blink 1s step-end infinite',
            ml: 1,
          }}
        />
      )}
    </Box>
  );
};

/* ===========================================
   Hero: 서브 타입라이터 텍스트
=========================================== */
const TypewriterDescription = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <Typography
      variant="h2"
      sx={{
        fontSize: { xs: '1.5rem', md: '2rem' },
        fontWeight: 400,
        color: 'rgba(255,255,255,0.9)',
        mb: 4,
        fontFamily: 'Montserrat, sans-serif',
        maxWidth: '800px',
        letterSpacing: '0.02em',
        lineHeight: 1.5,
      }}
    >
      {displayText}
    </Typography>
  );
};

/* ===========================================
   Parallax Section
=========================================== */
const ParallaxSection = ({ image, children }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        background: `url(${image}) center/cover no-repeat`,
        minHeight: '60vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: 'rgba(0,0,0,0.5)', // 어두운 오버레이
          zIndex: 1,
        }
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
        initial={{ backgroundPositionY: '0%' }}
        whileInView={{ backgroundPositionY: '15%' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: '#fff',
          p: 4,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

/* ===========================================
   Service Card
=========================================== */
const ServiceCard = ({ title, description, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{
      y: -10,
      scale: 1.02,
      transition: { duration: 0.2 },
    }}
    style={{ width: '100%' }}
  >
    <Paper
      elevation={0}
      sx={{
        p: 4,
        height: '100%',
        background: `linear-gradient(135deg, ${BRAND_COLORS.navyLight} 0%, ${BRAND_COLORS.navy} 100%)`,
        backdropFilter: 'blur(10px)',
        borderRadius: '15px',
        border: `1px solid rgba(100, 255, 218, 0.1)`,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          background: `linear-gradient(135deg, ${BRAND_COLORS.navy} 0%, ${BRAND_COLORS.navyLight} 100%)`,
          border: `1px solid ${BRAND_COLORS.teal}`,
          boxShadow: `0 0 25px rgba(100, 255, 218, 0.15)`,
        },
      }}
    >
      <motion.div
        whileHover={{
          scale: 1.15,
          rotate: 3,
          transition: { duration: 0.2 }
        }}
      >
        <Box
          sx={{
            color: BRAND_COLORS.teal,
            mb: 2,
            fontSize: '3rem',
            display: 'flex',
            justifyContent: 'center',
            filter: 'drop-shadow(0 0 8px rgba(100, 255, 218, 0.4))'
          }}
        >
          {icon}
        </Box>
      </motion.div>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          color: BRAND_COLORS.white,
          mb: 2,
          fontFamily: 'Montserrat, sans-serif',
          textAlign: 'center'
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ color: BRAND_COLORS.slate, textAlign: 'center' }}>
        {description}
      </Typography>
    </Paper>
  </motion.div>
);

/* ===========================================
   "Since 2019" - Neon Flicker Text
=========================================== */
const NeonFlickerText = ({ text }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-block',
        color: BRAND_COLORS.teal,
        fontWeight: 700,
        fontFamily: 'Montserrat, sans-serif',
        fontSize: { xs: '1.8rem', md: '2.5rem' },
        textShadow: '0 0 6px rgba(100, 255, 218, 0.5)',
        '@keyframes neonFlicker': {
          '0%': { opacity: 1 },
          '5%': { opacity: 0.5 },
          '10%': { opacity: 1 },
          '15%': { opacity: 0.4 },
          '20%': { opacity: 1 },
          '22%': { opacity: 0.8 },
          '25%': { opacity: 1 },
          '30%': { opacity: 0.4 },
          '35%': { opacity: 1 },
          '100%': { opacity: 1 },
        },
        animation: 'neonFlicker 2.5s infinite',
      }}
      >
        {text}
    </Box>
  );
};

/* ===========================================
   인공지능 교육 섹션 (EducationSection)
   - 단일 블록만 Intersection Observer로 나타남
=========================================== */
const EducationSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Box
      ref={ref}
      sx={{
        py: 10,
        background: `linear-gradient(135deg, ${BRAND_COLORS.navyLight} 0%, ${BRAND_COLORS.navy} 100%)`,
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8 },
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              color: BRAND_COLORS.white,
              mb: 4,
              textAlign: 'center',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            인공지능 기업 교육
          </Typography>
          <Typography
            sx={{
              color: BRAND_COLORS.slate,
              textAlign: 'center',
              fontFamily: 'Montserrat, sans-serif',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: '1.1rem',
            }}
          >
            현업에서 바로 활용 가능한 AI 실무지식을 제공하는 <strong>ConnexionAI</strong>의 기업 맞춤형 교육 프로그램을 만나보세요.
            <br />
            비즈니스 니즈에 맞춰 설계된 커리큘럼으로 구성되며,  
            실무 프로젝트와 사례 중심으로 운영되어 더욱 빠르게 핵심 기술을 습득할 수 있습니다.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

/* ===========================================
   Footer
=========================================== */
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: BRAND_COLORS.navyLight,
        p: 4,
        textAlign: 'center',
        color: '#fff',
        zIndex: 2,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          color: 'rgba(255,255,255,0.6)',
        }}
      >
        © 2025 ConnexionAI. All Rights Reserved.
      </Typography>
    </Box>
  );
};

/* ===========================================
   Landing Page 전체
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
      {/* Navigation Bar */}
      <NavigationBar />

      {/* 상단 Hero Section */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          pt: { xs: 12, md: 10 },
          pb: 8,
          textAlign: 'center',
        }}
      >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ mb: 2 }}>
            <TypewriterText text="ConnexionAI" />
          </Box>
          <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
            <TypewriterDescription text="AI Agent 연결로 기업의 미래를 선도합니다." />
            <Box sx={{ mt: 3, mb: 5 }}>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '1.1rem',
                  mb: 1,
                  fontWeight: 500,
                }}
              >
                # Multi-Agent System Development
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '1.1rem',
                  mb: 1,
                  fontWeight: 500,
                }}
              >
                # Autonomous AI Agent Solutions
              </Typography>
                <Typography
                  sx={{
                  color: 'rgba(255,255,255,0.8)',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                }}
              >
                # Real-world Problem Solving
                </Typography>
              </Box>

              <Button
                variant="outlined"
                size="large"
              onClick={() => window.location.href = 'mailto:jay@connexionai.kr'}
                sx={{
                  color: '#ffffff',
                  borderColor: 'rgba(255,255,255,0.3)',
                fontSize: '1.2rem',
                py: 2,
                px: 6,
                  borderWidth: '1px',
                  position: 'relative',
                  overflow: 'hidden',
                fontFamily: 'Montserrat, sans-serif',
                backdropFilter: 'blur(5px)',
                fontWeight: 500,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    animation: 'button-shine 3s infinite',
                  },
                  '@keyframes button-shine': {
                    '0%': { left: '-100%' },
                    '50%': { left: '100%' },
                    '100%': { left: '100%' },
                  },
                  '&:hover': {
                  borderColor: '#80f2d7',
                  backgroundColor: 'rgba(128, 242, 215, 0.1)',
                  cursor: 'pointer',
                  },
                }}
              >
              컨설팅 받기
              </Button>
            </motion.div>
        </motion.div>
      </Container>

      {/* Since 2019 / Connect AI 섹션 (네온 텍스트) */}
      <Box sx={{ textAlign: 'center', mt: -4, mb: 6, zIndex: 2, position: 'relative' }}>
        <NeonFlickerText text="Since 2017" />
        <Typography
          variant="h3"
          sx={{
            color: BRAND_COLORS.white,
            fontFamily: 'Montserrat, sans-serif',
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            fontWeight: 600,
            mt: 3,
            mb: 2
          }}
        >
          인공지능으로<br />현실의 문제를 해결합니다
        </Typography>
        <Typography
          sx={{
            color: BRAND_COLORS.slate,
            fontFamily: 'Montserrat, sans-serif',
            fontSize: { xs: '1.1rem', md: '1.2rem' },
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.6,
            mt: 3
          }}
        >
          2017년부터 시작된 AI 컨설팅 경험과 기술력으로<br />
          귀사의 디지털 혁신을 이끌어드립니다.
        </Typography>
      </Box>

      {/* Wave Divider (아래에서 위로) */}
      <WaveDivider flip={false} />

      {/* Parallax Section 1 */}
      <ParallaxSection
        image={
          'https://images.unsplash.com/photo-1530497610241-2c107a97e773?auto=format&fit=crop&w=1920&q=80'
        }
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            fontFamily: 'Montserrat, sans-serif',
            textShadow: '0 0 10px rgba(0,0,0,0.5)',
            mb: 2
          }}
        >
          Leading AI Innovations
        </Typography>
        <Typography
          variant="h6"
          sx={{
            maxWidth: '600px',
            mx: 'auto',
            fontFamily: 'Montserrat, sans-serif',
            color: 'rgba(255,255,255,0.85)',
            fontWeight: 300,
            mb: 2
          }}
        >
          ConnexionAI는 멀티 에이전트 시스템 기반으로 기업의 복잡한 문제를 해결하고,
          비즈니스를 혁신합니다.
        </Typography>
      </ParallaxSection>

      {/* Wave Divider (위에서 아래로 뒤집힘) */}
      <WaveDivider flip={true} />

      {/* Solutions Section */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          py: 10,
        }}
      >
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              color: BRAND_COLORS.white,
              mb: 1,
              textAlign: 'center',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Our Services
          </Typography>
          <Typography
            sx={{
              color: BRAND_COLORS.slate,
              textAlign: 'center',
              mb: 3,
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            ConnexionAI가 제공하는 전문 AI 서비스를 통해 귀사의 디지털 혁신을 시작하세요.
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={3}>
            <ServiceCard
              icon={<GiArtificialIntelligence />}
              title="AI 전략 컨설팅"
              description="귀사의 비즈니스 모델과 산업 특성을 분석하여 AI 도입 전략을 수립합니다. 데이터 기반 의사결정과 프로세스 혁신을 통해 경쟁력을 강화합니다."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <ServiceCard
              icon={<MdAutorenew />}
              title="자율화 멀티 에이전트"
              description="협업하는 AI 에이전트 시스템을 개발합니다. 복잡한 비즈니스 문제를 자율적으로 해결하는 멀티 에이전트 솔루션을 구축합니다."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <ServiceCard
              icon={<MdIntegrationInstructions />}
              title="AI 솔루션 개발"
              description="자연어 처리, 컴퓨터 비전, 예측 모델링 등 다양한 AI 기술을 활용하여 귀사의 니즈에 맞는 맞춤형 솔루션을 개발합니다."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <ServiceCard
              icon={<MdIntegrationInstructions />}
              title="AI 교육 프로그램"
              description="임직원의 AI 역량 강화를 위한 맞춤형 교육 프로그램을 제공합니다. 실무 중심의 커리큘럼과 실습을 통해 실질적인 AI 활용 능력을 배양합니다."
            />
          </Grid>
        </Grid>
      </Container>

      {/* Wave Divider (아래에서 위로) */}
      <WaveDivider flip={false} />

      {/* 인공지능 교육 섹션 (스크롤 시 보이는 단일 블록) */}
      <EducationSection />

      {/* Wave Divider (위에서 아래로) */}
      <WaveDivider flip={true} />

      {/* Parallax Section 2 */}
      <ParallaxSection
        image={
          'https://images.unsplash.com/photo-1532619226061-76f1b15b6c19?auto=format&fit=crop&w=1920&q=80'
        }
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            fontFamily: 'Montserrat, sans-serif',
            textShadow: '0 0 10px rgba(0,0,0,0.5)',
            mb: 2
          }}
        >
          Driving Business Transformation
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: '600px',
            mx: 'auto',
            fontFamily: 'Montserrat, sans-serif',
            color: 'rgba(255,255,255,0.85)',
            fontWeight: 300
          }}
        >
          ConnexionAI는 기업의 워크플로우 전반에 AI 에이전트를 접목하여,  
          업무 효율과 경쟁력을 극대화합니다. 지금 컨설팅을 받아보세요!
        </Typography>
      </ParallaxSection>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Home; 