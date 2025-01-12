import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const points = [
  '국내 최고 수준의 AI 전문가 팀',
  '500+ 프로젝트 수행 경험',
  '99% 고객 만족도',
  '24/7 신속한 기술 지원',
];

const MarketingSection = () => {
  return (
    <Box sx={{ py: 12, backgroundColor: 'black', color: 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography variant="h2" gutterBottom sx={{ fontSize: '3rem', fontWeight: 600 }}>
                Why ConnexionAI?
              </Typography>
              <Box sx={{ mb: 4 }}>
                {points.map((point, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6" component="div" sx={{ mr: 2 }}>
                      ✓
                    </Typography>
                    <Typography variant="body1">
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  padding: '15px 40px',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                더 알아보기
              </Button>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ position: 'relative', p: 4 }}>
                <Box
                  sx={{
                    backgroundColor: '#333',
                    borderRadius: 2,
                    p: 4,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h3" gutterBottom sx={{ color: '#00ff00' }}>
                    300%
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.8 }}>
                    고객사 평균 성과 향상률
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MarketingSection; 