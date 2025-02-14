import React, { Suspense, useRef, useState, useEffect } from 'react';
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
  useScrollTrigger,
  IconButton
} from '@mui/material';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdAutorenew, MdIntegrationInstructions, MdGroups, MdContentPaste } from "react-icons/md";
import { FaYoutube, FaChartLine, FaRobot, FaLinkedin, FaTwitter, FaInstagram, FaTiktok, FaLightbulb } from 'react-icons/fa';
import { BsGraphUp, BsMegaphone, BsLightningCharge } from 'react-icons/bs';
import CountUp from 'react-countup';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Text3D } from '@react-three/drei';

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
  );
};

/* ===========================================
   3D Logo Component
=========================================== */
const Logo3D = () => {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
    meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime) * 0.2;
  });

  return (
    <mesh ref={meshRef}>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={1.5}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        ConnexionAI
        <meshStandardMaterial 
          color={BRAND_COLORS.teal}
          metalness={0.8}
          roughness={0.2}
        />
      </Text3D>
    </mesh>
  );
};

/* ===========================================
   3D Scene Component
=========================================== */
const Scene3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        <Float
          speed={3}
          rotationIntensity={0.5}
          floatIntensity={2}
        >
          <Logo3D />
        </Float>
        <Environment preset="city" />
      </Suspense>
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
};

/* ===========================================
   Hero Section with Animated Text
=========================================== */
const HeroSection = () => {
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
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4.5rem' },
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(45deg, #64ffda 30%, #2196F3 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 20px rgba(100, 255, 218, 0.3)',
                fontFamily: 'Montserrat, sans-serif',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(45deg, rgba(100, 255, 218, 0.2), rgba(33, 150, 243, 0.2))',
                  filter: 'blur(20px)',
                  zIndex: -1,
                }
              }}
            >
              ConnexionAI
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '2.5rem' },
                fontWeight: 300,
                mb: 4,
                color: 'rgba(255,255,255,0.9)',
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              AI 전문가와 크리에이터의 만남<br />
              데이터 기반 콘텐츠 마케팅의 혁신
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', mb: 6 }}>
              {['#AI마케팅전문가', '#크리에이터협업', '#데이터기반성장'].map((tag, index) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <Typography
                    sx={{
                      color: BRAND_COLORS.teal,
                      fontSize: { xs: '1rem', md: '1.2rem' },
                      fontFamily: 'Montserrat, sans-serif',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      background: 'rgba(100, 255, 218, 0.1)',
                      backdropFilter: 'blur(10px)',
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
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => window.location.href = 'mailto:contact@connexionai.kr'}
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 500,
                background: 'linear-gradient(45deg, #64ffda 30%, #2196F3 90%)',
                boxShadow: '0 3px 15px rgba(100, 255, 218, 0.3)',
                fontFamily: 'Montserrat, sans-serif',
                '&:hover': {
                  background: 'linear-gradient(45deg, #2196F3 30%, #64ffda 90%)',
                },
              }}
            >
              무료 상담 받기
            </Button>
          </motion.div>
        </Box>
      </Container>
      
      {/* Animated background elements */}
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
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            style={{
              position: 'absolute',
              width: '40vw',
              height: '40vw',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${BRAND_COLORS.teal}${index * 2}0 0%, transparent 70%)`,
              filter: 'blur(60px)',
              top: `${30 + index * 20}%`,
              left: `${20 + index * 20}%`,
            }}
            animate={{
              x: ['-20%', '20%', '-20%'],
              y: ['-20%', '20%', '-20%'],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15 + index * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

/* ===========================================
   Stats Section
=========================================== */
const StatsSection = () => (
  <Box sx={{ py: 10, position: 'relative' }}>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <StatsCard
            icon={<MdGroups />}
            value={200}
            label="파트너 크리에이터"
            suffix="+"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatsCard
            icon={<BsGraphUp />}
            value={500}
            label="평균 조회수 증가율"
            suffix="%"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatsCard
            icon={<FaLightbulb />}
            value={50}
            label="AI 모델 개발"
            suffix="+"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatsCard
            icon={<BsLightningCharge />}
            value={1000}
            label="자동화 작업 처리"
            suffix="K+"
          />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

/* ===========================================
   Stats Card Component
=========================================== */
const StatsCard = ({ icon, value, label, suffix = '' }) => (
  <Paper
    elevation={0}
    sx={{
      p: 4,
      height: '100%',
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      textAlign: 'center',
      transition: 'all 0.3s ease-in-out',
      '&:hover': {
        transform: 'translateY(-5px)',
        background: 'rgba(255, 255, 255, 0.08)',
      },
    }}
  >
    <Box
      sx={{
        color: BRAND_COLORS.teal,
        fontSize: '2.5rem',
        mb: 2,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {icon}
    </Box>
    <Typography
      variant="h3"
      sx={{
        fontWeight: 700,
        color: 'white',
        mb: 1,
        fontFamily: 'Montserrat, sans-serif',
      }}
    >
      <CountUp end={value} duration={2.5} />{suffix}
    </Typography>
    <Typography
      sx={{
        color: BRAND_COLORS.slate,
        fontFamily: 'Montserrat, sans-serif',
      }}
    >
      {label}
    </Typography>
  </Paper>
);

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
            background: 'linear-gradient(45deg, #64ffda 30%, #2196F3 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          AI 기반 콘텐츠 마케팅
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            mb: 6,
            color: BRAND_COLORS.slate,
            fontSize: { xs: '1rem', md: '1.2rem' },
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          AI 전문가와 크리에이터의 협업으로 만드는 차별화된 마케팅 솔루션
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <ServiceCard
            icon={<FaYoutube style={{ fontSize: '2.5rem' }} />}
            title="AI 기반 콘텐츠 전략"
            description="AI 트렌드 분석과 크리에이터의 전문성이 만나 최적의 콘텐츠를 제작합니다."
            features={[
              "AI 트렌드 분석 및 예측",
              "맞춤형 콘텐츠 기획",
              "크리에이터 매칭",
              "성과 데이터 분석"
            ]}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ServiceCard
            icon={<FaChartLine style={{ fontSize: '2.5rem' }} />}
            title="데이터 기반 성장 전략"
            description="빅데이터 분석으로 타겟 오디언스를 정확히 파악하고 효과적인 전략을 수립합니다."
            features={[
              "오디언스 분석",
              "실시간 성과 측정",
              "AI 기반 최적화",
              "ROI 분석 리포트"
            ]}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ServiceCard
            icon={<MdAutorenew style={{ fontSize: '2.5rem' }} />}
            title="자동화 마케팅 솔루션"
            description="AI 자동화 시스템으로 마케팅 효율을 극대화합니다."
            features={[
              "포스팅 자동화",
              "인게이지먼트 최적화",
              "크로스 플랫폼 관리",
              "성과 자동 리포팅"
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
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          background: 'rgba(255, 255, 255, 0.08)',
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
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: BRAND_COLORS.slate,
          mb: 3,
          fontFamily: 'Montserrat, sans-serif',
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
              fontFamily: 'Montserrat, sans-serif',
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
            background: 'linear-gradient(45deg, #64ffda 30%, #2196F3 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          AI + Creator Collaboration
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            mb: 6,
            color: BRAND_COLORS.slate,
            fontSize: { xs: '1rem', md: '1.2rem' },
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          AI 기술력과 크리에이터의 창의성이 만나 새로운 마케팅 패러다임을 만듭니다
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <FeatureCard
            icon={<FaRobot />}
            title="최신 AI 기술 전문성"
            description="GPT-4, DALL-E 3, Stable Diffusion 등 최신 AI 모델을 활용한 콘텐츠 제작과 마케팅 자동화 시스템 구축"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureCard
            icon={<MdGroups />}
            title="크리에이터 네트워크"
            description="200+ 검증된 크리에이터 파트너십을 통한 전문적인 콘텐츠 제작 및 마케팅 캠페인 진행"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureCard
            icon={<FaChartLine />}
            title="데이터 기반 의사결정"
            description="AI 기반 데이터 분석으로 트렌드를 예측하고, 실시간 성과 측정을 통한 최적화 전략 수립"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureCard
            icon={<BsLightningCharge />}
            title="빠른 실행과 검증"
            description="AI 자동화 시스템으로 아이디어 검증부터 실행까지 빠르고 정확한 마케팅 프로세스 구현"
          />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

const FeatureCard = ({ icon, title, description }) => (
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
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          background: 'rgba(255, 255, 255, 0.08)',
        },
      }}
    >
      <Box
        sx={{
          color: BRAND_COLORS.teal,
          fontSize: '2.5rem',
          mb: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="h5"
        sx={{
          color: 'white',
          mb: 2,
          fontWeight: 600,
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: BRAND_COLORS.slate,
          fontFamily: 'Montserrat, sans-serif',
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
        © 2024 ConnexionAI. All Rights Reserved.
      </Typography>
    </Box>
  );
};

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
      <StatsSection />
      <WaveDivider flip={true} />
      <ServicesSection />
      <WaveDivider flip={false} />
      <FeaturesSection />
      <WaveDivider flip={true} />
      <Footer />
    </Box>
  );
};

export default Home;
