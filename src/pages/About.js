import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const education = [
  {
    school: 'City University of New York - Baruch College',
    degree: 'Data Science'
  },
  {
    school: 'Illinois Institute of Technology',
    degree: 'Data Science'
  }
];

const achievements = [
  {
    year: '2017',
    content: '대규모 AI 스마트팩토리 프로젝트 컨설팅'
  },
  {
    year: '2018',
    content: '국제 학회 논문 발표 및 수상'
  },
  {
    year: '2019',
    content: 'AI College 설립 및 200명 이상의 AI 연구원 양성'
  },
  {
    year: '2020',
    content: 'AI 헬스케어 스타트업 창업'
  },
  {
    year: '2022',
    content: 'Meta 글로벌 리더 선정'
  },
  {
    year: '2023',
    content: '해커톤 우승'
  },
  {
    year: '2024',
    content: '서울사이버대학교 AI학과 교수 및 AI 교육 솔루션 컨설팅'
  }
];

const media = [
  {
    date: '2018.04.02',
    title: '정원석 대표, Global Economic and Cultural Development Awards 수상',
    content: 'AI 기술 혁신과 교육 분야 공로를 인정받아 수상의 영예를 안았습니다.',
    category: '수상'
  },
  {
    date: '2020.11.09',
    title: '정원석 대표 인터뷰: "AI로 현실의 문제를 해결하다"',
    content: 'Baruch College에서 Data Science 전공을 만들고 현재는 Connexionai에서 AI 컨설팅을 이끌고 있는 정원석 대표의 이야기를 들어봅니다.',
    category: '인터뷰'
  },
  {
    date: '2024.04.04',
    title: '정원석 대표의 AI 콘서트, "AI를 쉽게 이해하자"',
    content: '누구나 쉽게 AI를 이해할 수 있도록 하는 AI 콘서트를 성황리에 마쳤습니다.',
    category: '행사'
  }
];

const About = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
      <Container maxWidth="lg">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" gutterBottom sx={{ mb: 6, fontWeight: 600 }}>
            Education
          </Typography>
          <Grid container spacing={4} sx={{ mb: 12 }}>
            {education.map((edu, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                      {edu.school}
                    </Typography>
                    <Typography color="text.secondary">
                      {edu.degree}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" gutterBottom sx={{ mb: 6, fontWeight: 600 }}>
            Achievements
          </Typography>
          <Box sx={{ mb: 12 }}>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateX(10px)',
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      minWidth: '100px',
                      color: 'text.secondary',
                    }}
                  >
                    {achievement.year}
                  </Typography>
                  <Typography variant="h6">
                    {achievement.content}
                  </Typography>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" gutterBottom sx={{ mb: 6, fontWeight: 600 }}>
            Media Coverage
          </Typography>
          <Grid container spacing={4}>
            {media.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <Typography color="text.secondary" gutterBottom>
                      {item.date}
                    </Typography>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary" paragraph>
                      {item.content}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        display: 'inline-block',
                        bgcolor: 'grey.100',
                        px: 2,
                        py: 0.5,
                        borderRadius: 1,
                      }}
                    >
                      {item.category}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 