import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Tabs, Tab, Button } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';

const Blog = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleDownload = () => {
    window.open('/assets/prompt.pdf', '_blank');
  };

  const posts = {
    trends: [
      {
        title: '2024년 주목해야 할 AI 트렌드',
        description: 'GPT-4를 넘어선 새로운 언어모델의 등장과 산업별 AI 활용 동향을 분석합니다.',
        date: '2024.04.01',
        category: 'AI 트렌드'
      },
      {
        title: '생성형 AI의 현재와 미래',
        description: '이미지, 텍스트, 음성 생성 AI의 발전 현황과 향후 전망을 살펴봅니다.',
        date: '2024.03.15',
        category: 'AI 트렌드'
      }
    ],
    success: [
      {
        title: '제조업 AI 도입 성공 사례',
        description: '스마트팩토리 구축을 통한 생산성 향상 및 불량률 감소 사례를 소개합니다.',
        date: '2024.03.20',
        category: '성공사례'
      },
      {
        title: '금융권 AI 챗봇 도입 성공 사례',
        description: '24시간 고객 상담 서비스 구축으로 고객 만족도 향상을 달성한 사례를 분석합니다.',
        date: '2024.03.10',
        category: '성공사례'
      }
    ],
    technical: [
      {
        title: 'LLM 프롬프트 엔지니어링 가이드',
        description: '효과적인 프롬프트 작성법과 실제 업무 적용 사례를 공유합니다.',
        date: '2024.03.25',
        category: '기술노트'
      },
      {
        title: 'AI 모델 최적화 테크닉',
        description: '모델 경량화와 추론 속도 개선을 위한 실전 기법을 소개합니다.',
        date: '2024.03.05',
        category: '기술노트'
      }
    ]
  };

  const currentPosts = () => {
    switch(currentTab) {
      case 0:
        return posts.trends;
      case 1:
        return posts.success;
      case 2:
        return posts.technical;
      default:
        return posts.trends;
    }
  };

  return (
    <Box sx={{ bgcolor: '#f5f5f5', py: 12 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" gutterBottom sx={{ mb: 6, fontWeight: 600 }}>
            Blog
          </Typography>

          <Paper
            sx={{
              p: 4,
              mb: 6,
              background: 'linear-gradient(45deg, #000 30%, #333 90%)',
              color: 'white',
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                  프롬프트 엔지니어링 가이드
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  AI와 효과적으로 소통하는 방법을 배워보세요. 실전에서 바로 활용할 수 있는 프롬프트 작성 기법과 
                  다양한 사례를 통해 AI의 잠재력을 최대한 끌어내는 방법을 소개합니다.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleDownload}
                  startIcon={<DownloadIcon />}
                  sx={{
                    bgcolor: 'white',
                    color: 'black',
                    '&:hover': {
                      bgcolor: '#f0f0f0',
                    },
                  }}
                >
                  무료 다운로드
                </Button>
              </Grid>
            </Grid>
          </Paper>

          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 6 }}>
            <Tabs 
              value={currentTab} 
              onChange={handleTabChange}
              sx={{
                '& .MuiTab-root': {
                  fontSize: '1.1rem',
                  fontWeight: 500
                }
              }}
            >
              <Tab label="AI 트렌드" />
              <Tab label="성공사례" />
              <Tab label="기술노트" />
            </Tabs>
          </Box>

          <Grid container spacing={4}>
            {currentPosts().map((post, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Paper sx={{
                    p: 4,
                    height: '100%',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      cursor: 'pointer'
                    }
                  }}>
                    <Typography color="text.secondary" gutterBottom>
                      {post.date} | {post.category}
                    </Typography>
                    <Typography variant="h5" gutterBottom sx={{ 
                      fontWeight: 600,
                      minHeight: '64px'
                    }}>
                      {post.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {post.description}
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

export default Blog; 