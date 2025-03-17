import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Paper, Tabs, Tab, Avatar, Chip, Divider, Button, AppBar, Toolbar, IconButton, List, ListItem, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { MdClose, MdMenu } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/layout/NavigationBar';

const education = [
  {
    school: 'City University of New York - Baruch College',
    degree: 'Data Science',
    year: '2015-2017',
    description: 'AI와 데이터 사이언스를 전공하며 실무 중심의 프로젝트를 수행. 강화학습과 AI 시스템 설계 분야에서 우수한 연구 성과를 거둠.'
  },
  {
    school: 'Illinois Institute of Technology',
    degree: 'Data Science',
    year: '2013-2015',
    description: '컴퓨터 사이언스 기초와 머신러닝을 심도있게 학습. 다수의 연구 프로젝트 참여를 통해 AI 응용 분야의 실전 경험 축적.'
  }
];

const achievements = [
  {
    year: '2024',
    content: '서울사이버대학교 공과대학 인공지능 전공 대우 교수',
    description: '차세대 AI 인재 양성을 위한 교육 과정 개발 및 강의. 실무 중심의 AI 교육을 통해 산업 현장에서 즉시 활용 가능한 인재 양성에 기여.'
  },
  {
    year: '2024',
    content: '(주)놀잇 인공지능 R&D팀 리더',
    description: '알파세대를 위한 AI 교육 솔루션 컨설팅 및 개발. 혁신적인 교육 평가 시스템 구축을 통해 차세대 교육 모델 제시.'
  },
  {
    year: '2023',
    content: 'AI 해킹 방어 툴 개발 뤼튼 해커톤 1위, 블록체인 해커톤 2위 수상',
    description: 'AI 시스템 보안 분야에서의 혁신적인 솔루션 개발. 블록체인 기술과 AI의 결합을 통한 새로운 보안 패러다임 제시.'
  },
  {
    year: '2022',
    content: 'META 싱가폴 아시아 지역 테크 글로벌 리더 4인 선정',
    description: '아시아 지역 AI 기술 혁신과 교육 분야에서의 공헌 인정. 글로벌 테크 리더로서의 역량 입증.'
  },
  {
    year: '2020',
    content: 'AI 헬스케어 스타트업 옵트버스 설립, 50억 가치 인정 투자',
    description: '헬스케어 분야의 AI 솔루션 개발을 통해 의료 서비스의 혁신을 주도. 개인 맞춤형 헬스케어 시스템 구축으로 투자 유치 성공.'
  },
  {
    year: '2019',
    content: 'AI COLLEGE 기획, 운영 및 모두의연구소 인공지능 교육 선임연구원',
    description: 'NeurIPS, CVPR 등 유수 컨퍼런스에 논문을 게재한 AI 연구원 양성. 모두의연구소에서 인공지능 교육 선임연구원으로 활동하며 실무 중심의 교육 과정 개발 및 운영.'
  },
  {
    year: '2018',
    content: 'PostAI, 강화학습 논문 발표 및 수상',
    description: '"REWARD SHAPING IS ALL YOU NEED" 및 "Exploration method for reducing uncertainty using Q-entropy in deep reinforcement learning" 논문 발표. Best Poster Award 수상.'
  },
  {
    year: '2017',
    content: 'ConnexionAI 설립',
    description: '200억 규모 AI 스마트팩토리 구축 프로젝트 컨설팅, AI 솔루션 개발. 기업의 디지털 전환을 위한 AI 기술 도입 지원.'
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

  const renderProfile = () => (
    <Box sx={{ 
      py: 6,
      background: 'linear-gradient(135deg, #000000 0%, #111111 100%)',
      color: '#fff',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
    }}>
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              component="img"
              src="/images/jayjung.png"
              alt="정원석 (Jay Jung)"
              sx={{
                width: '100%',
                maxWidth: 350,
                height: 'auto',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                mx: 'auto',
                display: 'block',
                border: '1px solid rgba(255, 215, 0, 0.3)',
              }}
            />
          </motion.div>
        </Grid>
        <Grid item xs={12} md={8}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography 
              variant="h3" 
              gutterBottom 
              sx={{ 
                fontWeight: 700,
                color: '#FFD700',
                mb: 2,
              }}
            >
              정원석 (Jay Jung)
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                mb: 3,
                fontWeight: 300,
              }}
            >
              AI 교육자 | 연구자 | 교육 콘텐츠 개발자
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.8)',
                mb: 4,
                lineHeight: 1.8,
              }}
            >
              AI 교육의 대중화와 실용적인 AI 기술 전파를 위해 노력하는 AI 교육 전문가입니다.
              강화학습과 AI 시스템 설계 분야의 연구 경험을 바탕으로, 복잡한 AI 개념을 쉽고 실용적으로
              전달하는 교육 콘텐츠를 개발하고 있습니다. 모두의연구소, 서울사이버대학교 등에서
              AI 교육을 진행하며 200명 이상의 AI 연구원과 개발자를 양성했습니다.
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#FFD700',
                mb: 2,
                fontWeight: 600,
              }}
            >
              AI 교육 활동
            </Typography>
            
            <Grid container spacing={2} sx={{ mb: 4 }}>
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 2,
                    background: 'white',
                    borderRadius: '10px',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Typography variant="body1" sx={{ color: '#000000', fontWeight: 600 }}>
                    서울사이버대학교
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                    공과대학 인공지능 전공 대우 교수
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(0, 0, 0, 0.7)', mt: 1, fontSize: '0.85rem' }}>
                    실무 중심의 AI 교육 과정 개발 및 강의
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 2,
                    background: 'white',
                    borderRadius: '10px',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Typography variant="body1" sx={{ color: '#000000', fontWeight: 600 }}>
                    모두의연구소
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                    인공지능 교육 선임연구원
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(0, 0, 0, 0.7)', mt: 1, fontSize: '0.85rem' }}>
                    AI 연구원 양성 및 실무 중심 교육 과정 개발
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 2,
                    background: 'white',
                    borderRadius: '10px',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Typography variant="body1" sx={{ color: '#000000', fontWeight: 600 }}>
                    Connect AI LAB
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                    AI 교육 플랫폼 대표
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(0, 0, 0, 0.7)', mt: 1, fontSize: '0.85rem' }}>
                    온라인 AI 교육 콘텐츠 개발 및 커리큘럼 설계
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 2,
                    background: 'white',
                    borderRadius: '10px',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Typography variant="body1" sx={{ color: '#000000', fontWeight: 600 }}>
                    AI COLLEGE
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                    교육 과정 기획 및 운영
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(0, 0, 0, 0.7)', mt: 1, fontSize: '0.85rem' }}>
                    200명 이상의 AI 연구원 양성 프로그램 운영
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );

  const renderEducation = () => (
    <Box sx={{ 
      py: 6,
      background: 'linear-gradient(135deg, #000000 0%, #111111 100%)',
      color: '#fff',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
    }}>
      <Typography 
        variant="h4" 
        gutterBottom
        sx={{ 
          fontWeight: 700,
          color: '#FFD700',
          mb: 4,
        }}
      >
        학력 및 전문 교육
      </Typography>
      
      {education.map((item, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <Typography 
                variant="subtitle1"
                sx={{ 
                  fontWeight: 600,
                  color: '#FFD700',
                }}
              >
                {item.year}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography 
                variant="h6"
                sx={{ 
                  fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.9)',
                  mb: 1,
                }}
              >
                {item.school}
              </Typography>
              <Typography 
                variant="subtitle1"
                sx={{ 
                  fontWeight: 500,
                  fontStyle: 'italic',
                  color: 'rgba(255, 215, 0, 0.8)',
                  mb: 2,
                }}
              >
                {item.degree}
              </Typography>
              <Typography 
                variant="body1"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  mb: 2,
                }}
              >
                {item.description}
              </Typography>
              {index < education.length - 1 && (
                <Divider sx={{ mt: 3, mb: 4, borderColor: 'rgba(255, 215, 0, 0.3)' }} />
              )}
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );

  const renderAchievements = () => (
    <Box sx={{ 
      py: 6,
      background: 'linear-gradient(135deg, #000000 0%, #111111 100%)',
      color: '#fff',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
    }}>
      <Typography 
        variant="h4" 
        gutterBottom
        sx={{ 
          fontWeight: 700,
          color: '#FFD700',
          mb: 4,
        }}
      >
        주요 성과 및 경력
      </Typography>
      
      {achievements.map((item, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <Typography 
                variant="subtitle1"
                sx={{ 
                  fontWeight: 600,
                  color: '#FFD700',
                }}
              >
                {item.year}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography 
                variant="h6"
                sx={{ 
                  fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.9)',
                  mb: 1,
                }}
              >
                {item.content}
              </Typography>
              <Typography 
                variant="body1"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  mb: 2,
                }}
              >
                {item.description}
              </Typography>
              {index < achievements.length - 1 && (
                <Divider sx={{ mt: 3, mb: 4, borderColor: 'rgba(255, 215, 0, 0.3)' }} />
              )}
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );

  const renderMedia = () => (
    <Box sx={{ 
      py: 6,
      background: 'linear-gradient(135deg, #000000 0%, #111111 100%)',
      color: '#fff',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
    }}>
      <Typography 
        variant="h4" 
        gutterBottom
        sx={{ 
          fontWeight: 700,
          color: '#FFD700',
          mb: 4,
        }}
      >
        미디어 & 뉴스
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
                elevation={1}
                sx={{
                  height: '100%',
                  background: 'rgba(15, 15, 15, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 215, 0, 0.1)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                    borderColor: 'rgba(255, 215, 0, 0.3)'
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
                      fontWeight: 600,
                      color: '#FFD700',
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 2 }}>
                    {item.content}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3 }}>
                    <Chip 
                      label={item.category} 
                      size="small"
                      sx={{ 
                        backgroundColor: 'rgba(255, 215, 0, 0.1)',
                        color: '#FFD700',
                        fontWeight: 500,
                        fontSize: '0.8rem',
                        borderRadius: '4px',
                        border: '1px solid rgba(255, 215, 0, 0.3)',
                      }}
                    />
                    <Typography sx={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                      {item.date}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #000000 0%, #191919 100%)',
      pt: { xs: 10, sm: 12 },
      pb: 8 
    }}>
      <NavigationBar />
      
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            variant="h2" 
            align="center" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              color: '#FFD700',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              mb: 4,
              '&::after': {
                content: '""',
                display: 'block',
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #FFD700, #FFC107)',
                margin: '0.8rem auto',
              }
            }}
          >
            소개
          </Typography>
          <Typography 
            variant="h6" 
            align="center" 
            sx={{ 
              mb: 6,
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            AI 개발과 교육을 통해 기술의 미래를 선도하고 인재를 양성하는 커넥션AI 연구소를 소개합니다.
          </Typography>
        </motion.div>
        
        {/* Tabs */}
        <Paper 
          elevation={0} 
          sx={{ 
            mb: 5,
            background: 'rgba(10, 10, 10, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: '10px',
            border: '1px solid rgba(255, 215, 0, 0.2)',
          }}
        >
          <Tabs 
            value={currentTab} 
            onChange={handleTabChange} 
            variant="fullWidth"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: '#FFD700',
                height: 3,
              },
              '& .MuiTab-root': {
                color: 'rgba(255, 255, 255, 0.7)',
                '&.Mui-selected': {
                  color: '#FFD700',
                  fontWeight: 600,
                }
              }
            }}
          >
            <Tab label="프로필" />
            <Tab label="학력" />
            <Tab label="주요 성과" />
            <Tab label="미디어" />
          </Tabs>
        </Paper>
        
        {/* Tab Panels */}
        <Box>
          {currentTab === 0 && renderProfile()}
          {currentTab === 1 && renderEducation()}
          {currentTab === 2 && renderAchievements()}
          {currentTab === 3 && renderMedia()}
        </Box>
      </Container>
    </Box>
  );
};

export default About; 