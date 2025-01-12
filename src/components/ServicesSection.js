import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'AI 전략 컨설팅',
    description: '기업의 비즈니스 모델과 산업 특성을 분석하여 최적화된 AI 도입 전략을 수립합니다. 데이터 기반의 의사결정과 프로세스 혁신을 통해 기업의 경쟁력을 강화합니다.',
    icon: '🎯',
  },
  {
    title: 'AI 솔루션 개발',
    description: '기업의 요구사항에 맞춘 AI 솔루션을 개발합니다. 자연어 처리, 컴퓨터 비전, 예측 모델링 등 다양한 AI 기술을 활용하여 업무 자동화와 효율성을 극대화합니다.',
    icon: '🤖',
  },
  {
    title: 'AI 교육 프로그램',
    description: '임직원들의 AI 역량 강화를 위한 맞춤형 교육 프로그램을 제공합니다. 실무 중심의 커리큘럼과 실습을 통해 AI 기술의 이해도와 활용 능력을 향상시킵니다.',
    icon: '📚',
  },
];

const ServicesSection = () => {
  return (
    <Box sx={{ py: 12, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" gutterBottom align="center" sx={{ mb: 8, fontSize: '3rem', fontWeight: 600 }}>
            Our Services
          </Typography>
        </motion.div>
        
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 4 }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: 2,
                  p: 4,
                  height: '100%',
                  transition: 'all 0.3s ease-in-out',
                  border: '1px solid #eaeaea',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                    borderColor: 'black',
                  },
                }}
              >
                <Typography variant="h1" sx={{ fontSize: '3rem', mb: 2 }}>
                  {service.icon}
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  {service.title}
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {service.description}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection; 