import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      background: 'linear-gradient(to bottom, #000000, #1a1a1a)',
      color: 'white',
      py: 8 
    }}>
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
              mb: 6,
              fontWeight: 600,
              background: 'linear-gradient(45deg, #ffffff, #b3b3b3)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Welcome to ConnexionAI
          </Typography>

          <Grid container spacing={4}>
            {/* Services Section */}
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      background: 'rgba(255, 255, 255, 0.15)',
                    },
                  }}
                >
                  <Typography 
                    variant="h4" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600,
                      color: 'white',
                      mb: 3
                    }}
                  >
                    Our Services
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                      <Box>
                        <Typography 
                          variant="h5" 
                          gutterBottom
                          sx={{ color: 'white' }}
                        >
                          AI Strategy Consulting
                        </Typography>
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                          기업의 AI 도입 전략 수립부터 실행까지 전문적인 컨설팅을 제공합니다.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Box>
                        <Typography 
                          variant="h5" 
                          gutterBottom
                          sx={{ color: 'white' }}
                        >
                          AI Solution Development
                        </Typography>
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                          최신 AI 기술을 활용한 맞춤형 솔루션을 개발하고 구현합니다.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Box>
                        <Typography 
                          variant="h5" 
                          gutterBottom
                          sx={{ color: 'white' }}
                        >
                          AI Training Programs
                        </Typography>
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                          기업과 개인을 위한 실무 중심의 AI 교육 프로그램을 제공합니다.
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>

            {/* Latest Blog Posts */}
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      background: 'rgba(255, 255, 255, 0.15)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontWeight: 600,
                        color: 'white'
                      }}
                    >
                      Latest Blog Posts
                    </Typography>
                    <Button 
                      variant="outlined" 
                      onClick={() => navigate('/blog')}
                      sx={{
                        color: 'white',
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        '&:hover': {
                          borderColor: 'white',
                          background: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                    >
                      View All
                    </Button>
                  </Box>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Box>
                        <Typography 
                          variant="h5" 
                          gutterBottom
                          sx={{ color: 'white' }}
                        >
                          AutoGen Studio: 엔터프라이즈용 노코드 AI 멀티 에이전트 솔루션
                        </Typography>
                        <Typography 
                          sx={{ 
                            color: 'rgba(255, 255, 255, 0.7)',
                            mb: 2
                          }}
                        >
                          기업 환경에서 노코드로 AI 멀티 에이전트 시스템을 구축하는 방법을 상세히 알아봅니다.
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              display: 'inline-block',
                              background: 'rgba(255, 255, 255, 0.1)',
                              backdropFilter: 'blur(10px)',
                              px: 2,
                              py: 0.5,
                              borderRadius: 1,
                              color: 'white',
                            }}
                          >
                            AI 트렌드
                          </Typography>
                          <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                            2024.04.10
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>

            {/* About Us */}
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      background: 'rgba(255, 255, 255, 0.15)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontWeight: 600,
                        color: 'white'
                      }}
                    >
                      About Us
                    </Typography>
                    <Button 
                      variant="outlined" 
                      onClick={() => navigate('/about')}
                      sx={{
                        color: 'white',
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        '&:hover': {
                          borderColor: 'white',
                          background: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                  <Typography 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      mb: 3,
                      lineHeight: 1.7
                    }}
                  >
                    ConnexionAI는 2017년부터 기업의 AI 혁신을 선도해온 전문 컨설팅 기업입니다. 
                    우리는 최신 AI 기술과 실무 경험을 바탕으로, 기업이 직면한 문제를 해결하고 
                    새로운 가치를 창출할 수 있도록 돕고 있습니다.
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography 
                          variant="h4" 
                          gutterBottom
                          sx={{ color: 'white' }}
                        >
                          7+
                        </Typography>
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                          Years of Experience
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography 
                          variant="h4" 
                          gutterBottom
                          sx={{ color: 'white' }}
                        >
                          200+
                        </Typography>
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                          Trained Professionals
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography 
                          variant="h4" 
                          gutterBottom
                          sx={{ color: 'white' }}
                        >
                          50+
                        </Typography>
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                          Enterprise Clients
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home; 