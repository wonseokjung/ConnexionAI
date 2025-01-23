import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Tabs, Tab, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const YouTubeEmbed = ({ url }) => {
  const getVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getVideoId(url);
  if (!videoId) return null;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%', // 16:9 Aspect Ratio
        mb: 4,
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
      }}
    >
      <iframe
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0,
        }}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Box>
  );
};

const posts = {
  trends: [
    {
      title: 'AutoGen Studio: 엔터프라이즈용 노코드 AI 멀티 에이전트 솔루션',
      description: '기업 환경에서 노코드로 AI 멀티 에이전트 시스템을 구축하는 방법을 상세히 알아봅니다.',
      date: '2024.04.10',
      category: 'AI 트렌드',
      content: `
# AutoGen Studio: 엔터프라이즈용 노코드 AI 멀티 에이전트 솔루션

https://www.youtube.com/watch?v=0vZ69AIP_hM

## AutoGen Studio란?

AutoGen Studio는 Microsoft에서 개발한 노코드 AI 멀티 에이전트 솔루션입니다. 이 도구는 기업들이 복잡한 코딩 없이도 AI 에이전트를 구축하고 관리할 수 있게 해주는 혁신적인 플랫폼입니다.

## 주요 기능

1. **직관적인 UI/UX**
   - 드래그 앤 드롭 인터페이스
   - 실시간 에이전트 상태 모니터링
   - 시각적 워크플로우 구성

2. **강력한 에이전트 커스터마이징**
   - 다양한 에이전트 템플릿 제공
   - 역할 및 행동 패턴 설정
   - 고급 프롬프트 엔지니어링 지원

3. **기업 환경 최적화**
   - 보안 및 규정 준수
   - 스케일러블한 아키텍처
   - API 통합 용이성

## 활용 사례

### 1. 고객 서비스 자동화
- 24/7 고객 응대
- 다국어 지원
- 티켓 분류 및 라우팅

### 2. 내부 업무 프로세스
- 문서 처리 및 분석
- 데이터 추출 및 정리
- 보고서 자동 생성

### 3. 개발 및 테스트
- 코드 리뷰 자동화
- 버그 리포트 분석
- 테스트 케이스 생성

## 보안 및 규정 준수

- 엔드-투-엔드 암호화
- 접근 제어 및 감사
- GDPR, HIPAA 준수

## 구현 방법

\`\`\`python
# AutoGen Studio API 예시
from autogen import Studio

# 스튜디오 인스턴스 생성
studio = Studio(api_key="your_api_key")

# 에이전트 구성
agent = studio.create_agent(
    name="customer_service",
    role="Customer Support",
    capabilities=["language", "problem_solving"]
)

# 워크플로우 정의
workflow = studio.create_workflow(
    agents=[agent],
    triggers=["customer_inquiry"],
    actions=["respond", "escalate"]
)

# 배포
studio.deploy(workflow)
\`\`\`

## 도입 전략

1. **파일럿 프로젝트 실행**
   - 소규모 팀에서 시작
   - 성과 측정 및 분석
   - 피드백 수집

2. **단계적 확장**
   - 성공 사례 기반 확대
   - 교육 및 지원 체계 구축
   - 모니터링 및 최적화

3. **전사적 통합**
   - 기존 시스템과 연동
   - 업무 프로세스 재정의
   - 변화 관리 전략 수립

## 미래 전망

AutoGen Studio는 기업의 AI 도입을 가속화하는 핵심 도구가 될 것으로 예상됩니다. 특히 다음과 같은 발전이 기대됩니다:

- 더욱 강력한 AI 모델 통합
- 산업별 특화 템플릿 확대
- 고급 분석 및 예측 기능 강화

## 결론

AutoGen Studio는 기업이 AI 멀티 에이전트 시스템을 쉽게 구축하고 관리할 수 있게 해주는 혁신적인 솔루션입니다. 노코드 접근방식과 기업 친화적인 기능을 통해, AI 도입의 진입 장벽을 크게 낮추고 있습니다.
      `
    }
  ],
  success: [],
  technical: []
};

const Blog = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleClose = () => {
    setSelectedPost(null);
  };

  const categories = ['AI 트렌드', '성공 사례', '기술 문서'];
  const postsArray = [posts.trends, posts.success, posts.technical];

  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={materialDark}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    p({ node, children }) {
      const childrenArray = React.Children.toArray(children);
      const firstChild = childrenArray[0];
      
      if (typeof firstChild === 'string' && firstChild.startsWith('https://www.youtube.com')) {
        return <YouTubeEmbed url={firstChild} />;
      }
      
      return (
        <Typography 
          component="p" 
          sx={{ 
            mb: 2,
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: 1.7
          }}
        >
          {children}
        </Typography>
      );
    },
    h1: (props) => (
      <Typography
        variant="h3"
        sx={{
          mb: 4,
          fontWeight: 600,
          background: 'linear-gradient(45deg, #ffffff, #b3b3b3)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        {...props}
      />
    ),
    h2: (props) => (
      <Typography
        variant="h4"
        sx={{
          mt: 6,
          mb: 3,
          fontWeight: 600,
          color: 'white',
        }}
        {...props}
      />
    ),
    h3: (props) => (
      <Typography
        variant="h5"
        sx={{
          mt: 4,
          mb: 2,
          fontWeight: 600,
          color: 'rgba(255, 255, 255, 0.9)',
        }}
        {...props}
      />
    ),
  };

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
            Blog
          </Typography>

          <Tabs 
            value={currentTab} 
            onChange={handleTabChange}
            sx={{
              mb: 6,
              '& .MuiTabs-indicator': {
                backgroundColor: 'white',
              },
              '& .MuiTab-root': {
                color: 'rgba(255, 255, 255, 0.7)',
                '&.Mui-selected': {
                  color: 'white',
                },
              },
            }}
          >
            {categories.map((category, index) => (
              <Tab key={index} label={category} />
            ))}
          </Tabs>

          <Grid container spacing={4}>
            {postsArray[currentTab].map((post, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    onClick={() => handlePostClick(post)}
                    sx={{
                      p: 4,
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        background: 'rgba(255, 255, 255, 0.15)',
                      },
                    }}
                  >
                    <Typography 
                      variant="h5" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 600,
                        color: 'white',
                      }}
                    >
                      {post.title}
                    </Typography>
                    <Typography 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.7)',
                        mb: 2 
                      }}
                    >
                      {post.description}
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
                        {post.category}
                      </Typography>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                        {post.date}
                      </Typography>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <Dialog
          open={Boolean(selectedPost)}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              background: 'linear-gradient(to bottom, #000000, #1a1a1a)',
              color: 'white',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }
          }}
        >
          <DialogTitle>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 600,
                color: 'white',
                mb: 1
              }}
            >
              {selectedPost?.title}
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
                {selectedPost?.category}
              </Typography>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                {selectedPost?.date}
              </Typography>
            </Box>
          </DialogTitle>
          <DialogContent dividers sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
            <Box sx={{ py: 2 }}>
              <ReactMarkdown
                components={components}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >
                {selectedPost?.content || ''}
              </ReactMarkdown>
            </Box>
          </DialogContent>
          <DialogActions sx={{ p: 3 }}>
            <Button 
              onClick={handleClose}
              variant="outlined"
              sx={{
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.5)',
                '&:hover': {
                  borderColor: 'white',
                  background: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Blog; 