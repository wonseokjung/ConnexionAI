import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const posts = [
  {
    title: '2024 AI 트렌드 전망: GPT-5의 등장과 기업의 대응 전략',
    description: 'OpenAI의 GPT-5 출시가 예상되는 가운데, 기업들의 AI 도입 전략은 어떻게 변화해야 할까요?',
    category: 'AI 트렌드',
    date: '2024.01.15',
    image: '/blog/ai-trend-2024.jpg'
  },
  {
    title: '대규모 언어 모델(LLM)을 활용한 기업 혁신 사례',
    description: '국내외 선도 기업들의 LLM 활용 사례와 성과를 분석합니다.',
    category: '성공사례',
    date: '2024.01.10',
    image: '/blog/llm-case-study.jpg'
  },
  {
    title: 'AI 도입 시 고려해야 할 5가지 핵심 요소',
    description: '기업의 성공적인 AI 도입을 위한 핵심 고려사항을 알아봅니다.',
    category: 'AI 전략',
    date: '2024.01.05',
    image: '/blog/ai-implementation.jpg'
  }
];

const BlogSection = () => {
  return (
    <Box sx={{ py: 12, backgroundColor: '#f8f8f8' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" gutterBottom align="center" sx={{ mb: 2, fontSize: '3rem', fontWeight: 600 }}>
            AI Insight Blog
          </Typography>
          <Typography variant="h5" align="center" sx={{ mb: 8, color: 'text.secondary' }}>
            AI 트렌드와 인사이트를 만나보세요
          </Typography>
        </motion.div>
        
        <Grid container spacing={4}>
          {posts.map((post, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 200,
                      width: '100%',
                      backgroundColor: '#eee',
                      position: 'relative',
                      backgroundImage: `url(${post.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <Typography
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        backgroundColor: 'black',
                        color: 'white',
                        py: 0.5,
                        px: 1.5,
                        borderRadius: 1,
                        fontSize: '0.875rem',
                      }}
                    >
                      {post.category}
                    </Typography>
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {post.date}
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 600, my: 2, minHeight: 60 }}>
                      {post.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 2, minHeight: 48 }}>
                      {post.description}
                    </Typography>
                    <Button
                      variant="text"
                      sx={{
                        color: 'black',
                        p: 0,
                        '&:hover': {
                          backgroundColor: 'transparent',
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      자세히 보기 →
                    </Button>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogSection; 