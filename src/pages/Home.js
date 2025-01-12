import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'AI 전략 컨설팅',
    description: '귀사의 비즈니스 모델과 산업 특성을 분석하여 AI 도입 전략을 수립합니다. 데이터 기반 의사결정과 프로세스 혁신을 통해 경쟁력을 강화합니다.',
  },
  {
    title: 'AI 솔루션 개발',
    description: '자연어 처리, 컴퓨터 비전, 예측 모델링 등 다양한 AI 기술을 활용하여 귀사의 니즈에 맞는 맞춤형 솔루션을 개발합니다.',
  },
  {
    title: 'AI 교육 프로그램',
    description: '임직원의 AI 역량 강화를 위한 맞춤형 교육 프로그램을 제공합니다. 실무 중심의 커리큘럼과 실습을 통해 실질적인 AI 활용 능력을 배양합니다.',
  }
];

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: '#000000',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <Typography 
                  variant="h1" 
                  gutterBottom 
                  sx={{ 
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Since 2017,<br />인공지능으로<br />현실의 문제를 해결합니다
                </Typography>
                <Typography 
                  variant="h5" 
                  paragraph 
                  sx={{ 
                    mb: 4, 
                    opacity: 0.8,
                    fontWeight: 400,
                  }}
                >
                  2017년부터 시작된 AI 컨설팅 경험과 기술력으로<br />
                  귀사의 디지털 혁신을 이끌어드립니다.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    padding: '15px 40px',
                    fontSize: '1.1rem',
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                    },
                  }}
                >
                  무료 상담 신청
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box
        component="section"
        sx={{
          py: 12,
          bgcolor: '#f5f5f5',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                textAlign: 'center',
                mb: 8,
                fontWeight: 600,
              }}
            >
              Our Services
            </Typography>

            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Box
                      sx={{
                        p: 4,
                        height: '100%',
                        bgcolor: 'white',
                        borderRadius: 2,
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                        },
                      }}
                    >
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          mb: 2,
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        color="text.secondary"
                        sx={{
                          lineHeight: 1.7,
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 