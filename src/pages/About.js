import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Tabs, Tab } from '@mui/material';
import { motion } from 'framer-motion';

const education = [
  {
    school: 'City University of New York - Baruch College',
    degree: 'Data Science & AI',
    year: '2015-2017',
    description: 'AI와 데이터 사이언스를 전공하며 실무 중심의 프로젝트를 수행. 강화학습과 AI 시스템 설계 분야에서 우수한 연구 성과를 거둠.'
  },
  {
    school: 'Illinois Institute of Technology',
    degree: 'Computer Science',
    year: '2013-2015',
    description: '컴퓨터 사이언스 기초와 머신러닝을 심도있게 학습. 다수의 연구 프로젝트 참여를 통해 AI 응용 분야의 실전 경험 축적.'
  }
];

const achievements = [
  {
    year: '2024',
    content: '서울사이버대학교 AI 전공 교수 & HISS 글로벌 AI 교육',
    description: '공과대학 인공지능 전공 대우교수로서 차세대 AI 인재 양성. HISS를 통해 글로벌 대상 AI 교육 프로그램 운영 및 교육 격차 해소를 위한 혁신적인 AI 교육 모델 개발.'
  },
  {
    year: '2024',
    content: '(주)놀잇 CTO',
    description: '알파세대를 위한 혁신적인 사회평가모델 개발 주도. AI 기술을 활용한 교육 평가 시스템 구축.'
  },
  {
    year: '2023',
    content: '뤼튼 해커톤 1위 수상',
    description: 'AI 해킹 방어 툴 개발로 해커톤 우승. AI 시스템 보안 분야에서의 혁신적인 솔루션 제시.'
  },
  {
    year: '2022',
    content: '메타 아시아 지역 글로벌 리더 선정',
    description: '아시아 지역 4인의 글로벌 리더 중 한 명으로 선정. AI 기술 혁신과 교육 분야에서의 공헌 인정.'
  },
  {
    year: '2021',
    content: 'MuscleMania 커머스모델 2위',
    description: '건강한 신체와 정신의 조화를 추구하며, 이론과 실천을 겸비한 전문가로서의 면모 입증.'
  },
  {
    year: '2020',
    content: 'AI 헬스케어 스타트업 설립',
    description: '헬스케어 분야의 AI 솔루션 개발을 통해 의료 서비스의 혁신을 주도. 개인 맞춤형 헬스케어 시스템 구축.'
  },
  {
    year: '2019',
    content: 'AI COLLEGE 설립 및 운영',
    description: '200명 이상의 AI 연구원 양성. NeurIPS, CVPR 등 세계적 컨퍼런스에 다수의 논문 게재. 실무 중심의 AI 교육 시스템 구축.'
  },
  {
    year: '2018',
    content: 'PostAI 연구 성과',
    description: '"REWARD SHAPING IS ALL YOU NEED" 및 "Exploration method for reducing uncertainty using Q-entropy in deep reinforcement learning" 논문 발표. Best Poster Award 수상.'
  },
  {
    year: '2017',
    content: 'AI 스마트팩토리 프로젝트 리드',
    description: '200억 규모의 스마트팩토리 구축 프로젝트 총괄. 공장 자동화를 위한 혁신적인 AI 솔루션 개발 및 구현.'
  }
];

const media = [
  {
    date: '2024.03',
    title: '서울사이버대학교 AI 전공 교수 부임',
    content: '공과대학 인공지능 전공 대우교수로 부임하여 차세대 AI 인재 양성에 주력. HISS를 통한 글로벌 AI 교육 프로그램 확장.',
    category: '교육',
    image: 'https://source.unsplash.com/random/800x600?education'
  },
  {
    date: '2023.11',
    title: '뤼튼 해커톤 우승 - AI 보안의 새로운 지평',
    content: 'AI 해킹 방어 툴 개발로 해커톤 1위 달성. AI 시스템 보안 분야에서 혁신적인 접근 방식 제시.',
    category: '수상',
    image: 'https://source.unsplash.com/random/800x600?security'
  },
  {
    date: '2022.06',
    title: '메타 글로벌 리더십 프로그램 선정',
    content: '아시아 지역 4인의 글로벌 리더로 선정되어 AI 기술 혁신과 교육 분야에서의 리더십 인정받음.',
    category: '리더십',
    image: 'https://source.unsplash.com/random/800x600?leadership'
  }
];

const categories = ['Education', 'Achievements', 'Media'];

const About = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const renderEducation = () => (
    <Grid container spacing={4}>
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
              <Typography 
                variant="h5" 
                gutterBottom 
                sx={{ 
                  fontWeight: 600,
                  color: 'white',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                {edu.school}
              </Typography>
              <Typography 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  mb: 2,
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                {edu.degree} ({edu.year})
              </Typography>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                {edu.description}
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );

  const renderAchievements = () => (
    <Box>
      {achievements.map((achievement, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 4,
              mb: 3,
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateX(10px)',
                background: 'rgba(255, 255, 255, 0.08)',
              },
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={2}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: '#00ff00',
                    textShadow: '0 0 10px rgba(0,255,0,0.3)',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  {achievement.year}
                </Typography>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: 'white',
                    mb: 1,
                    fontFamily: 'JetBrains Mono, monospace',
                    fontWeight: 500,
                  }}
                >
                  {achievement.content}
                </Typography>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {achievement.description}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>
      ))}
    </Box>
  );

  const renderMedia = () => (
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
                height: '100%',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                overflow: 'hidden',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  background: 'rgba(255, 255, 255, 0.08)',
                },
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: 200,
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <Box sx={{ p: 4 }}>
                <Typography 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.8)',
                    mb: 1,
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  {item.date}
                </Typography>
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 600,
                    color: 'white',
                    mb: 2,
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  {item.title}
                </Typography>
                <Typography 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    mb: 3
                  }}
                >
                  {item.content}
                </Typography>
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
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  {item.category}
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box sx={{ 
      background: 'linear-gradient(to bottom, #000000, #1a1a1a)',
      color: 'white',
      py: 8,
      minHeight: '100vh',
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
              background: 'linear-gradient(45deg, #00ff00, #00cc00)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'JetBrains Mono, monospace',
              textShadow: '0 0 20px rgba(0,255,0,0.2)',
            }}
          >
            About ConnexionAI
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: 4,
              mb: 6,
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Typography
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1.2rem',
                lineHeight: 1.7,
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              2017년부터 AI Agent 기술을 통해 기업의 문제를 해결해온 AI 전문기업입니다.
              Multi-Agent System과 Autonomous AI Agent 개발을 통해 혁신적인 솔루션을 제공하고 있습니다.
            </Typography>
          </Paper>

          <Tabs 
            value={currentTab} 
            onChange={handleTabChange}
            sx={{
              mb: 6,
              '& .MuiTabs-indicator': {
                backgroundColor: '#00ff00',
                height: '3px',
                borderRadius: '3px',
              },
              '& .MuiTab-root': {
                color: 'rgba(255, 255, 255, 0.7)',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '1.1rem',
                '&.Mui-selected': {
                  color: '#00ff00',
                },
              },
            }}
          >
            {categories.map((category, index) => (
              <Tab key={index} label={category} />
            ))}
          </Tabs>

          {currentTab === 0 && renderEducation()}
          {currentTab === 1 && renderAchievements()}
          {currentTab === 2 && renderMedia()}
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 