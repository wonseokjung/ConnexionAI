import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Avatar,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  MdScience,
  MdPlayCircle,
  MdDescription,
  MdCode,
  MdChevronRight
} from 'react-icons/md';
import { FaRobot, FaYoutube } from 'react-icons/fa';
import NavigationBar from '../components/layout/NavigationBar';

const Lab = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  
  // OpenAI Agent 강의 데이터
  const agentCourse = {
    id: 1,
    title: "[실전 AI] OpenAI Agent SDK로 강력한 AI 에이전트 만들기",
    description: "이 강의에서는 OpenAI의 새로운 Agent SDK를 활용하여 자율적인 AI 에이전트를 구축하는 방법을 배웁니다. 실제 프로젝트로 이론과 실습을 함께 진행합니다.",
    thumbnail: "https://images.unsplash.com/photo-1682687982049-b3d433368cd1?q=80&w=1771&auto=format&fit=crop",
    duration: "1시간 12분",
    uploadDate: "2024-06-15",
    views: "8.3만",
    author: "Connect AI LAB",
    authorAvatar: "/images/connect-ai-avatar.png",
    category: "agents",
    level: "중급",
    hasNotebook: true,
    hasCode: true,
    featured: true,
    notebookCount: 3
  };
  
  // 강의 상세 페이지 이동 핸들러
  const handleNavigateToLecture = () => {
    navigate('/lab/openai_agent');
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #000000 0%, #191919 100%)',
      color: '#fff',
      pt: { xs: 8, md: 12 },
      pb: 8
    }}>
      <NavigationBar />
      
      <Container maxWidth="xl">
        {/* 헤더 섹션 */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip 
            icon={<MdScience size={18} />}
            label="AI LAB" 
            sx={{ 
              mb: 3, 
              fontWeight: 600, 
              color: '#000', 
              bgcolor: '#FFD700', 
              borderRadius: '4px',
              px: 2,
              py: 0.5,
              fontSize: '0.8rem',
              letterSpacing: '0.05em',
            }} 
          />
          
          <Typography
            variant="h2"
            component="h1"
            sx={{ 
              fontWeight: 700,
              mb: 3,
              color: '#FFD700',
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem' },
              letterSpacing: '-0.02em',
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '60px',
                height: '4px',
                bottom: '-10px',
                left: 'calc(50% - 30px)',
                background: 'linear-gradient(90deg, #FFD700, #FFC107)',
              }
            }}
          >
            AI 실험실
          </Typography>
          
          <Typography
            variant="body1"
            sx={{ 
              maxWidth: '900px', 
              mx: 'auto',
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              mt: 4,
              px: { xs: 2, md: 0 }
            }}
          >
            Connect AI LAB에서 개발 중인 AI 기술과 도구를 직접 체험해보세요. 
            튜토리얼 영상, 주피터 노트북, 코드 예제를 통해 AI의 세계를 탐험하고,
            최신 AI 기술을 실무에 적용하는 방법을 배워보세요.
          </Typography>
        </Box>
        
        {/* 추천 강의 섹션 */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            mb: 3 
          }}>
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#FFD700', 
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <FaRobot /> AI 에이전트 과정
            </Typography>
          </Box>
          
          {/* 메인 강의 카드 - 더 크게 표시 */}
          <Card sx={{ 
            background: 'rgba(15, 15, 15, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 215, 0, 0.3)',
            borderRadius: '12px',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
              borderColor: 'rgba(255, 215, 0, 0.5)'
            },
            position: 'relative',
            mb: 4,
            cursor: 'pointer'
          }}
          onClick={handleNavigateToLecture}
          >
            <Grid container>
              <Grid item xs={12} md={6}>
                <Box sx={{ position: 'relative', height: '100%' }}>
                  <CardMedia
                    component="img"
                    image={agentCourse.thumbnail}
                    alt={agentCourse.title}
                    sx={{ 
                      height: { xs: '240px', md: '100%' },
                      objectFit: 'cover',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(0, 0, 0, 0.3)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      '&:hover': {
                        opacity: 1,
                      }
                    }}
                  >
                    <IconButton
                      sx={{
                        color: '#fff',
                        bgcolor: 'rgba(0, 0, 0, 0.5)',
                        '&:hover': {
                          bgcolor: 'rgba(0, 0, 0, 0.7)',
                        }
                      }}
                    >
                      <MdPlayCircle size={60} />
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      right: 16,
                      bgcolor: 'rgba(0, 0, 0, 0.7)',
                      color: '#fff',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: '4px',
                      fontSize: '0.9rem',
                    }}
                  >
                    {agentCourse.duration}
                  </Box>
                  
                  {/* 카테고리 및 난이도 표시 */}
                  <Box sx={{ position: 'absolute', top: 16, left: 16, display: 'flex', gap: 1 }}>
                    <Chip 
                      size="small" 
                      label="AI 에이전트" 
                      sx={{ 
                        backgroundColor: 'rgba(255, 215, 0, 0.2)',
                        color: '#FFD700',
                        fontWeight: 500,
                        fontSize: '0.8rem',
                        height: '24px'
                      }} 
                    />
                    <Chip 
                      size="small" 
                      label={agentCourse.level} 
                      sx={{ 
                        backgroundColor: 'rgba(33, 150, 243, 0.2)',
                        color: '#2196f3',
                        fontWeight: 500,
                        fontSize: '0.8rem',
                        height: '24px'
                      }} 
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: '1.5rem', md: '1.8rem' },
                      fontWeight: 700,
                      mb: 2,
                      color: '#FFD700',
                      lineHeight: 1.3,
                    }}
                  >
                    {agentCourse.title}
                  </Typography>
                  
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                    <Avatar
                      src={agentCourse.authorAvatar}
                      alt={agentCourse.author}
                      sx={{ width: 32, height: 32, mr: 1.5 }}
                    />
                    <Box>
                      <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 600, fontSize: '1rem' }}>
                        {agentCourse.author}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {agentCourse.views} 조회 • {agentCourse.uploadDate}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '1rem',
                      lineHeight: 1.7,
                      mb: 3,
                      flexGrow: 1
                    }}
                  >
                    {agentCourse.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                    {agentCourse.hasNotebook && (
                      <Chip 
                        label={`주피터 노트북 ${agentCourse.notebookCount}`} 
                        icon={<MdDescription size={16} />}
                        sx={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.08)',
                          color: 'rgba(255, 255, 255, 0.9)',
                          '& .MuiChip-icon': {
                            color: 'rgba(255, 255, 255, 0.9)',
                          }
                        }} 
                      />
                    )}
                    {agentCourse.hasCode && (
                      <Chip 
                        label="코드 예제" 
                        icon={<MdCode size={16} />}
                        sx={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.08)',
                          color: 'rgba(255, 255, 255, 0.9)',
                          '& .MuiChip-icon': {
                            color: 'rgba(255, 255, 255, 0.9)',
                          }
                        }} 
                      />
                    )}
                  </Box>
                  
                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    endIcon={<MdChevronRight />}
                    sx={{
                      backgroundColor: '#FFD700',
                      color: '#000',
                      fontWeight: 600,
                      py: 1.5,
                      '&:hover': {
                        backgroundColor: '#FFC107',
                      }
                    }}
                  >
                    강의 시작하기
                  </Button>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Box>
        
        {/* 커뮤니티 섹션 */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 600, 
              mb: 3, 
              color: '#FFD700' 
            }}
          >
            더 많은 AI 강의가 준비 중입니다
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 4,
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Connect AI LAB의 YouTube 채널에서 다양한 AI 튜토리얼과 최신 기술 트렌드를 확인하세요.
          </Typography>
          
          <Button
            variant="contained"
            startIcon={<FaYoutube />}
            href="https://www.youtube.com/@CONNECT-AI-LAB"
            target="_blank"
            sx={{
              backgroundColor: '#FF0000',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#CC0000',
              },
              px: 3,
              py: 1.2
            }}
          >
            YouTube 채널 방문하기
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Lab;