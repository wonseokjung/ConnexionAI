import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const education = [
    {
      school: 'City University of New York - Baruch College',
      degree: 'Data Science',
      icon: '🎓'
    },
    {
      school: 'Illinois Institute of Technology',
      degree: 'Data Science',
      icon: '🎓'
    }
  ];

  const achievements = [
    {
      year: '2017',
      descriptions: ['200억 규모 AI 스마트팩토리 구축 프로젝트 컨설팅, AI 솔루션 개발']
    },
    {
      year: '2018',
      descriptions: [
        'PostAI에서 "REWARD SHAPING IS ALL YOU NEED" 논문 발표',
        '"Exploration method for reducing uncertainty using Q-entropy in deep reinforcement learning" 논문 발표 및 Best Poster Award 수상'
      ]
    },
    {
      year: '2019',
      descriptions: ['AI COLLEGE 기획, 운영 - 200명 이상의 AI 연구원 양성', 'NeurIPS, CVPR 등 유수 컨퍼런스에 논문 게재']
    },
    {
      year: '2020',
      descriptions: ['AI 헬스케어 스타트업 설립, 50억 가치 인정 투자']
    },
    {
      year: '2022',
      descriptions: ['메타 아시아 지역 글로벌 리더 4인 선정']
    },
    {
      year: '2023',
      descriptions: [
        'AI 해킹 방어 툴 개발 뤼튼 해커톤 1위',
        '블록체인 해커톤 2위 수상'
      ]
    },
    {
      year: '2024',
      descriptions: [
        '서울사이버대학교 공과대학 인공지능 전공 대우 교수',
        '(주)놀잇 알파세대를 위한 AI 교육 솔루션 컨설팅/개발'
      ]
    }
  ];

  const media = [
    {
      date: '2018.04.02',
      title: '정원석 연구소장, 글로벌경제문화발전대상에서 \'AI기술혁신대상\' 수상',
      content: '\'2018 글로벌경제문화발전대상\'시상식에서 \'AI기술혁신부문대상\'을 수상했다. 이번 시상식은 대사, 국회의원 및 CEO, 일반인등 300여명이 참석한 가운데 개최되었다.',
      category: '언론'
    },
    {
      date: '2020.11.09',
      title: '\'공부 왜 하지\' 자신에게 질문…답 찾아 스스로 공부에 빠졌죠.',
      content: '2013년 미국 뉴욕시립대 버룩칼리지(Baruch College The City University of New York)에서 데이터 사이언스 전공을 직접 창안했고, 현재는 인공지능 기반 피트니스 서비스 OPCT를 운영하는 스타트업 커넥젼ai(Connexionai)의 정원석(34) 대표 이야기입니다.',
      category: '언론'
    },
    {
      date: '2024.04.04',
      title: '정원석 교수, 인공지능 콘서트 성료',
      content: '정원석의 인공지능 콘서트 "우리의 삶은 어디를 향해 가고 있는가"는 그의 인공지능 분야의 대학생활, 개발자, 연구원, 스타트업 대표 경험을 바탕으로 어려운 인공지능 지식을 대중의 눈높이에 맞춰 엔터테인먼트화하여 전달했다.',
      category: '언론'
    }
  ];

  return (
    <Box sx={{ py: 12, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" gutterBottom align="center" sx={{ mb: 8, fontSize: '3rem', fontWeight: 600 }}>
            About Us
          </Typography>
        </motion.div>

        {/* Education Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 500 }}>
            Education
          </Typography>
          <Grid container spacing={4}>
            {education.map((edu, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ 
                    p: 3, 
                    backgroundColor: 'white',
                    borderRadius: 2,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                  }}>
                    <Typography variant="h1" sx={{ fontSize: '2rem', mb: 2 }}>
                      {edu.icon}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      {edu.school}
                    </Typography>
                    <Typography color="text.secondary">
                      {edu.degree}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Media Section */}
        <Box sx={{ mb: 8, mt: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 500 }}>
            Media Coverage
          </Typography>
          <Grid container spacing={3}>
            {media.map((item, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{
                    p: 4,
                    backgroundColor: 'white',
                    borderRadius: 2,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'transform 0.3s ease-in-out'
                    }
                  }}>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        color: 'text.secondary',
                        display: 'block',
                        mb: 1 
                      }}
                    >
                      {item.date}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 600,
                        mb: 2
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {item.content}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Achievements Timeline */}
        <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 500 }}>
          Milestones
        </Typography>
        <Box sx={{ position: 'relative' }}>
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box sx={{ 
                display: 'flex', 
                mb: 4,
                p: 3,
                backgroundColor: 'white',
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
              }}>
                <Typography variant="h5" sx={{ 
                  minWidth: '100px', 
                  fontWeight: 600,
                  color: 'black'
                }}>
                  {achievement.year}
                </Typography>
                <Box>
                  {achievement.descriptions.map((desc, i) => (
                    <Typography key={i} sx={{ mb: 1, lineHeight: 1.7 }}>
                      {desc}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection; 