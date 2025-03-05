import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  Tabs,
  Tab,
  Divider,
  useTheme,
  useMediaQuery,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  IconButton,
  Tooltip,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaVideo, FaFilePdf, FaGithub, FaDownload, FaPlay } from 'react-icons/fa';
import { MdDescription, MdSchool, MdFilterNone, MdCheck, MdArrowBack, MdNotifications } from 'react-icons/md';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

// 교육 코스 데이터
const courses = [
  {
    id: 1,
    title: "Hugging Face로 구현하는 이미지 분류 (왕초보용)",
    description: "AI 개발 왕초보를 위한 강의! Hugging Face의 transformers 라이브러리를 활용하여 이미지 분류 모델을 구현하는 방법을 처음부터 차근차근 배웁니다. Colab에서 쉽게 따라할 수 있는 실습 노트북을 통해 이미지 분석의 기초를 익힙니다.",
    thumbnail: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.png",
    videoUrl: "", // 추후 영상이 준비되면 추가
    duration: "30분 예상",
    level: "왕초보",
    releaseDate: "2025년 2월 28일 예정",
    instructor: "정원석 (AI멘토 Jay)",
    tags: ["Hugging Face", "이미지 분류", "AI", "Python", "Colab", "왕초보"],
    downloads: [
      { 
        name: "이미지 분석 실습 노트북", 
        url: "/downloads/이미지분석실습.ipynb", 
        icon: <FaCode /> 
      }
    ],
    sections: [
      {
        title: "이미지 분류 개요",
        content: "AI 초보자도 이해할 수 있는 이미지 분류의 개념과 Hugging Face transformers 라이브러리의 기초 기능을 소개합니다.",
        status: "available"
      },
      {
        title: "필요한 라이브러리 설치",
        content: "처음부터 차근차근! transformers와 Pillow 등 이미지 처리에 필요한 라이브러리 설치 방법을 안내합니다.",
        status: "pending"
      },
      {
        title: "이미지 분류 함수 정의",
        content: "왕초보도 따라할 수 있도록 지정된 이미지 파일을 열고, 분류 모델에 입력하여 예측 결과를 반환하는 함수를 단계별로 구현합니다.",
        status: "pending"
      },
      {
        title: "이미지 분석 실행",
        content: "Colab에 업로드한 이미지 파일에 대해 분석을 실행하고 결과를 해석하는 방법을 쉽게 배웁니다.",
        status: "pending"
      },
      {
        title: "활용 및 확장",
        content: "학습한 기술을 다양한 이미지 분석 프로젝트에 적용하는, 왕초보도 할 수 있는 실용적인 방법을 탐색합니다.",
        status: "pending"
      }
    ],
    notebookContent: `
# Hugging Face 이미지 분류 노트북

이 노트북에서는 Hugging Face의 \`transformers\` 라이브러리에서 제공하는 이미지 분류 모델을 활용하여 이미지를 분석합니다.

**순서:**
1. **필요한 라이브러리 설치:**  
   - \`transformers\`: 이미지 분류 모델 사용  
   - \`Pillow\`: 이미지를 불러와 처리

2. **이미지 분류 함수 정의:**  
   - 지정된 이미지 파일을 열고, 분류 모델에 입력하여 예측 결과를 반환합니다.

3. **이미지 분석 실행:**  
   - Colab에 업로드한 이미지 파일 경로를 지정하고, 함수를 실행하여 분석 결과를 출력합니다.

이제 아래 코드 셀들을 순서대로 실행해 보세요!

## 1. 라이브러리 설치
\`\`\`python
!pip install transformers pillow
\`\`\`

## 2. 이미지 분류 모델 준비 및 함수 정의
\`\`\`python
from transformers import pipeline
from PIL import Image

# Hugging Face의 이미지 분류 모델 준비
classifier = pipeline("image-classification")

def analyze_image(image_path):
    """
    주어진 이미지 파일 경로를 받아 이미지를 열고, 
    이미지 분류 모델을 통해 예측 결과를 반환합니다.
    
    매개변수:
      image_path (str): 분석할 이미지 파일 경로
      
    반환값:
      predictions (list): 예측 결과 리스트 (각 항목은 label과 score 포함)
    """
    image = Image.open(image_path)  # 이미지 열기
    predictions = classifier(image) # 모델로 예측 실행
    return predictions
\`\`\`

## 3. 이미지 분석 실행
\`\`\`python
# 예시: 이미지 파일 경로 설정 (Colab에 업로드한 파일명을 입력하세요)
image_path = "/content/DSC_0020.jpg"  # 실제 파일명으로 변경 필요

# 이미지 분석 함수 호출
predictions = analyze_image(image_path)

# 분석 결과 출력
print("이미지 분류 결과:")
print(predictions)
\`\`\`

이제 위 셀들을 순서대로 실행하면, 업로드한 이미지에 대한 분류 결과가 출력됩니다.  
예시 결과는 예를 들어,  
\`\`\`python
[{'label': 'puck, hockey puck', 'score': 0.990995466709137}, 
 {'label': 'broom', 'score': 0.0005391877493821084}, 
 ... ]
\`\`\`
와 같이 나타납니다.
`
  },
  {
    id: 2,
    title: "[AI비즈니스] 24시간 무료 AI Agent로 리서치팀 자동화",
    description: "Microsoft Autogen(0.4 버전)을 활용해 리서치팀을 자동화하는 방법을 배웁니다. 터미널에서 명령어 입력부터 Visual Builder를 통한 팀 구성, 그리고 실제 리서치 프로세스(구글 검색, 데이터 검증, 요약 등)를 단계별로 구현해봅니다.",
    thumbnail: "https://img.youtube.com/vi/zsjeupVa-Ks/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/zsjeupVa-Ks",
    duration: "15분 30초",
    level: "중급",
    instructor: "정원석 (AI멘토 Jay)",
    tags: ["AutoGen", "멀티 에이전트", "AI", "리서치 자동화", "Microsoft"],
    downloads: [
      { 
        name: "AutoGen 시작 코드", 
        url: "/downloads/autogen_starter.zip", 
        icon: <FaCode /> 
      },
      { 
        name: "리서치 에이전트 주피터 노트북", 
        url: "/downloads/research_agents.ipynb", 
        icon: <FaGithub /> 
      },
      { 
        name: "설치 및 활용 가이드", 
        url: "/downloads/autogen_guide.pdf", 
        icon: <FaFilePdf /> 
      }
    ],
    sections: [
      {
        title: "소개",
        content: "AI 에이전트가 사람 대신 업무를 수행하는 원리와 팀 구성 방법에 대해 설명합니다. Microsoft Autogen 0.4 버전의 주요 기능과 장점을 소개합니다."
      },
      {
        title: "설치 및 환경 설정",
        content: "Autogen 설치 방법과 API 키 설정, 필요한 패키지 설치 등 환경 구성 방법을 안내합니다."
      },
      {
        title: "리서치 에이전트 팀 구성",
        content: "리서치 매니저, 검색 전문가, 데이터 분석가, 요약 작성자 등 역할별 에이전트 설정 방법을 배웁니다."
      },
      {
        title: "실전 리서치 프로세스 구현",
        content: "구글 검색, 데이터 검증, 분석, 요약 등 리서치 프로세스를 자동화하는 방법을 단계별로 구현합니다."
      },
      {
        title: "확장 및 응용 방안",
        content: "마케팅, 디자인 등 다양한 부서에 적용 가능한 AI 자동화 전략과 비용 효율성, 인력 대체 효과에 대해 논의합니다."
      }
    ]
  }
];

// 코스 카드 컴포넌트
const CourseCard = ({ course, onClick }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Card 
        elevation={3} 
        onClick={() => onClick(course)}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
          borderRadius: 2,
          overflow: 'hidden',
          transition: 'transform 0.3s, box-shadow 0.3s',
          bgcolor: 'background.paper',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)'
          }
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            image={course.thumbnail}
            alt={course.title}
            sx={{
              height: 180,
              objectFit: 'cover',
            }}
          />
          {course.releaseDate && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                bgcolor: 'error.main',
                color: 'white',
                px: 1.5,
                py: 0.5,
                fontWeight: 'bold',
                borderBottomLeftRadius: 8
              }}
            >
              COMING SOON
            </Box>
          )}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              px: 2,
              py: 1,
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}
          >
            <Chip 
              label={course.level} 
              color="primary" 
              size="small" 
              sx={{ 
                fontWeight: 'bold',
                backgroundColor: 'rgba(33, 150, 243, 0.85)',
              }}
            />
            <Chip 
              icon={<FaPlay size={12} />} 
              label={course.duration} 
              size="small" 
              sx={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                '& .MuiChip-icon': {
                  color: 'white'
                }
              }}
            />
          </Box>
        </Box>
        <CardContent sx={{ flexGrow: 1, pt: 3 }}>
          <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
            {course.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, height: '4.5em', overflow: 'hidden' }}>
            {course.description}
          </Typography>
          
          {course.releaseDate && (
            <Typography 
              variant="body2" 
              color="error.main" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 0.5,
                fontWeight: 'medium',
                mt: 1 
              }}
            >
              <MdSchool /> {course.releaseDate}
            </Typography>
          )}
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
            {course.tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#aaa',
                  fontSize: '0.7rem',
                }}
              />
            ))}
          </Box>
        </CardContent>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          px: 2, 
          pb: 2,
          mt: 'auto'
        }}>
          <Avatar sx={{ width: 32, height: 32, mr: 1 }}>
            {course.instructor.charAt(0)}
          </Avatar>
          <Typography variant="body2" color="text.secondary">
            {course.instructor}
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="small" 
            sx={{ ml: 'auto', borderRadius: '20px' }}
            endIcon={<FaPlay />}
          >
            시작하기
          </Button>
        </Box>
      </Card>
    </motion.div>
  );
};

// 코스 상세 보기 컴포넌트
const CourseDetail = ({ course, onBack }) => {
  const [tabValue, setTabValue] = useState(0);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Button 
        startIcon={<MdArrowBack />} 
        onClick={onBack} 
        sx={{ mb: 3 }}
      >
        모든 강의로 돌아가기
      </Button>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
            {course.title}
          </Typography>
          
          <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
            {course.description}
          </Typography>
          
          {course.releaseDate ? (
            <Paper
              elevation={0}
              sx={{
                p: 3,
                mb: 4,
                borderRadius: 2,
                backgroundColor: 'rgba(211, 47, 47, 0.1)',
                border: '1px solid rgba(211, 47, 47, 0.3)',
              }}
            >
              <Typography variant="h6" color="error.main" fontWeight="bold" sx={{ mb: 1 }}>
                COMING SOON: {course.releaseDate}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                이 강의는 아직 준비 중입니다. 출시되면 알림을 받으시려면 아래에 이메일을 등록해주세요.
              </Typography>
              <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                <Button 
                  variant="outlined" 
                  color="primary"
                  size="small"
                  onClick={() => {
                    alert('알림 신청이 완료되었습니다!');
                  }}
                >
                  출시 알림 신청하기
                </Button>
              </Box>
            </Paper>
          ) : (
            <Box sx={{ position: 'relative', width: '100%', mb: 4, borderRadius: 2, overflow: 'hidden' }}>
              <Box sx={{ paddingTop: '56.25%', position: 'relative', bgcolor: 'black' }}>
                {course.videoUrl ? (
                  <iframe
                    src={course.videoUrl}
                    title={course.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 0,
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      bgcolor: 'rgba(0, 0, 0, 0.7)',
                    }}
                  >
                    <Typography variant="h6" color="white" sx={{ mb: 2 }}>
                      영상 준비중
                    </Typography>
                    <Button 
                      variant="outlined" 
                      color="primary"
                      startIcon={<MdNotifications />}
                    >
                      알림 신청하기
                    </Button>
                  </Box>
                )}
              </Box>
            </Box>
          )}
          
          <Box sx={{ mb: 4 }}>
            <Tabs 
              value={tabValue} 
              onChange={handleTabChange} 
              aria-label="course tabs"
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: 'primary.main',
                },
              }}
            >
              <Tab label="커리큘럼" />
              <Tab label="노트북 예제" />
              <Tab label="수강 전 준비사항" />
            </Tabs>
            
            <Box sx={{ py: 3 }}>
              {tabValue === 0 && (
                <List disablePadding>
                  {course.sections.map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <ListItem
                        sx={{
                          borderLeft: '2px solid',
                          borderColor: section.status === 'available' ? 'success.main' : 'primary.main',
                          pl: 3,
                          mb: 2,
                          bgcolor: 'rgba(255, 255, 255, 0.03)',
                          borderRadius: '0 8px 8px 0',
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          {section.status === 'available' ? (
                            <MdCheck color="#4CAF50" size={22} />
                          ) : (
                            <MdFilterNone color="#888" size={22} />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography variant="subtitle1" fontWeight="bold">
                              {section.title}
                            </Typography>
                          }
                          secondary={section.content}
                        />
                        <Chip 
                          size="small"
                          label={section.status === 'available' ? "시청 가능" : "준비 중"}
                          color={section.status === 'available' ? "success" : "default"}
                          sx={{ ml: 1 }}
                        />
                      </ListItem>
                    </motion.div>
                  ))}
                </List>
              )}
              
              {tabValue === 1 && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    Hugging Face 이미지 분류 완전 가이드
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Colab에서 Hugging Face의 이미지 분류 모델을 활용하여 이미지를 분석하는 전체 노트북 예제입니다.
                    각 셀을 복사하여 Colab에 붙여넣으시면 됩니다.
                  </Typography>
                  
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      mt: 3,
                      borderRadius: 2,
                      bgcolor: 'rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      maxHeight: '500px',
                      overflow: 'auto',
                      '& pre': {
                        margin: 0,
                        padding: '16px',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        overflowX: 'auto',
                        fontSize: '0.875rem',
                      },
                      '& code': {
                        fontFamily: 'monospace',
                      }
                    }}
                  >
                    {course.notebookContent && (
                      <div dangerouslySetInnerHTML={{ __html: course.notebookContent.replace(/\n/g, '<br>').replace(/`{3}python([\s\S]*?)`{3}/g, '<pre><code>$1</code></pre>').replace(/`{3}([\s\S]*?)`{3}/g, '<pre><code>$1</code></pre>').replace(/`(.*?)`/g, '<code>$1</code>') }} />
                    )}
                  </Paper>
                  
                  <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<FaDownload />}
                      component="a"
                      href="/downloads/이미지분석실습.ipynb"
                      target="_blank"
                      download
                      sx={{ mr: 2 }}
                    >
                      노트북 다운로드
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<FaCode />}
                      component="a"
                      href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/image_classification.ipynb"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Colab에서 열기
                    </Button>
                  </Box>
                </Box>
              )}
              
              {tabValue === 2 && (
                <Box>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    필요한 사전 지식
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {course.level === '왕초보' ? (
                      "이 강의는 왕초보를 위한 강의로, 사전 지식이 필요하지 않습니다. 처음부터 차근차근 설명합니다."
                    ) : (
                      "기본적인 Python 프로그래밍 지식과 AI에 대한 기초적인 이해가 도움이 됩니다."
                    )}
                  </Typography>
                  
                  <Typography variant="h6" sx={{ mb: 2, mt: 3 }}>
                    필요한 환경
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <MdCheck color="#4CAF50" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Google Colab 계정" 
                        secondary="별도의 환경 설정 없이 브라우저에서 바로 실습이 가능합니다."
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <MdCheck color="#4CAF50" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="인터넷 브라우저" 
                        secondary="최신 버전의, 크롬, 파이어폭스, 사파리, 엣지 등"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <MdCheck color="#4CAF50" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="분석할 이미지 파일" 
                        secondary="테스트에 사용할 이미지 파일을 몇 개 준비하세요. 어떤 이미지든 상관없습니다."
                      />
                    </ListItem>
                  </List>
                </Box>
              )}
            </Box>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, md: 3 },
              borderRadius: 2,
              background: 'linear-gradient(to bottom, rgba(30,30,30,0.9), rgba(20,20,20,0.95))',
              border: '1px solid rgba(255,255,255,0.1)',
              position: 'sticky',
              top: 20,
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
              코스 정보
            </Typography>
            
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  강사
                </Typography>
                <Typography variant="body1" fontWeight="medium">
                  {course.instructor}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  난이도
                </Typography>
                <Typography variant="body1" fontWeight="medium">
                  {course.level}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  소요 시간
                </Typography>
                <Typography variant="body1" fontWeight="medium">
                  {course.duration}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  {course.releaseDate ? "출시 예정일" : "최종 업데이트"}
                </Typography>
                <Typography variant="body1" fontWeight="medium">
                  {course.releaseDate || "2023년 12월"}
                </Typography>
              </Grid>
            </Grid>
            
            <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
            
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              다운로드 리소스
            </Typography>
            
            <List>
              {course.downloads.map((item, index) => (
                <ListItem key={index} disablePadding sx={{ mb: 2 }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    startIcon={item.icon}
                    endIcon={<FaDownload />}
                    sx={{
                      py: 1.5,
                      justifyContent: 'space-between',
                      borderRadius: '8px',
                      textAlign: 'left',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderColor: 'primary.main',
                      },
                    }}
                    component="a"
                    href={item.url}
                    target="_blank"
                  >
                    <Typography variant="body2" noWrap>{item.name}</Typography>
                  </Button>
                </ListItem>
              ))}
            </List>
            
            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{
                  py: 1.5,
                  fontWeight: 'bold',
                  borderRadius: '8px',
                  textTransform: 'none',
                  mb: 2,
                }}
                startIcon={<FaPlay />}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                지금 시청하기
              </Button>
              
              <Button
                variant="outlined"
                fullWidth
                size="large"
                sx={{
                  py: 1.5,
                  fontWeight: 'bold',
                  borderRadius: '8px',
                  textTransform: 'none',
                }}
                startIcon={<HiOutlineDocumentDownload />}
                component="a"
                href={course.downloads[0]?.url}
                target="_blank"
              >
                코드 다운로드
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

// 교육 페이지 메인 컴포넌트
const Education = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedCourse(null);
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
        color: '#fff',
        pt: { xs: 8, md: 12 },
        pb: 8,
      }}
    >
      <Container maxWidth="xl">
        {!selectedCourse ? (
          <>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <Typography 
                variant="h2" 
                component="h1" 
                sx={{ 
                  fontWeight: 800,
                  mb: 1,
                  fontSize: { xs: '2rem', md: '3rem' }
                }}
              >
                AI 교육 센터
              </Typography>
              <Typography 
                variant="h5" 
                color="primary.light" 
                sx={{ 
                  mb: 6,
                  maxWidth: '800px',
                  opacity: 0.9,
                  fontSize: { xs: '1rem', md: '1.25rem' }
                }}
              >
                AI 기술을 비즈니스에 적용하는 실용적인 튜토리얼과 코스를 제공합니다.
                쉽게 따라할 수 있는 코드 예제와 실제 비즈니스 사례를 통해 AI 역량을 강화하세요.
              </Typography>
            </motion.div>

            {/* 최신 튜토리얼 섹션 */}
            <Box sx={{ mb: 8 }}>
              <Typography 
                variant="h4" 
                component="h2" 
                sx={{ 
                  fontWeight: 700,
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box 
                  component="span" 
                  sx={{ 
                    width: 4, 
                    height: 24, 
                    backgroundColor: 'primary.main',
                    display: 'inline-block', 
                    mr: 2,
                    borderRadius: 1 
                  }} 
                />
                최신 튜토리얼
              </Typography>
              
              <Paper
                elevation={0}
                sx={{
                  mb: 4,
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ position: 'relative', width: '100%', height: '100%', minHeight: { xs: '200px', md: '360px' } }}>
                      <Box 
                        component="img"
                        src={courses[0].thumbnail}
                        alt={courses[0].title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'brightness(0.8)',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      >
                        <IconButton
                          aria-label="재생"
                          sx={{
                            width: 80,
                            height: 80,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            '&:hover': {
                              backgroundColor: 'primary.main',
                              transform: 'scale(1.1)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                          onClick={() => handleCourseSelect(courses[0])}
                        >
                          <FaPlay size={30} />
                        </IconButton>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box 
                      sx={{ 
                        p: { xs: 3, md: 5 },
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}
                    >
                      <Chip
                        label="NEW"
                        color="primary"
                        size="small"
                        sx={{ 
                          alignSelf: 'flex-start', 
                          mb: 2,
                          fontWeight: 'bold',
                        }}
                      />
                      <Typography 
                        variant="h4" 
                        component="h3" 
                        sx={{ 
                          fontWeight: 800,
                          mb: 2,
                          fontSize: { xs: '1.5rem', md: '2rem' }
                        }}
                      >
                        {courses[0].title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          mb: 4,
                          opacity: 0.8,
                          fontSize: { xs: '0.9rem', md: '1rem' }
                        }}
                      >
                        {courses[0].description}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                        <Chip 
                          icon={<FaVideo size={14} />} 
                          label={courses[0].duration} 
                          variant="outlined" 
                          size="small" 
                        />
                        <Chip 
                          label={courses[0].level} 
                          variant="outlined" 
                          size="small" 
                        />
                        <Chip 
                          label={courses[0].instructor} 
                          variant="outlined" 
                          size="small" 
                        />
                      </Box>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={<FaPlay />}
                        onClick={() => handleCourseSelect(courses[0])}
                        sx={{
                          alignSelf: 'flex-start',
                          px: 3,
                          py: 1,
                          borderRadius: 2,
                          fontWeight: 'bold',
                          textTransform: 'none',
                        }}
                      >
                        튜토리얼 보기
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Box>

            {/* 모든 튜토리얼 섹션 */}
            <Box>
              <Typography 
                variant="h4" 
                component="h2" 
                sx={{ 
                  fontWeight: 700,
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box 
                  component="span" 
                  sx={{ 
                    width: 4, 
                    height: 24, 
                    backgroundColor: 'primary.main',
                    display: 'inline-block', 
                    mr: 2,
                    borderRadius: 1 
                  }} 
                />
                모든 튜토리얼 & 코스
              </Typography>
              
              <Grid container spacing={3}>
                {courses.map((course) => (
                  <Grid item xs={12} sm={6} md={4} key={course.id}>
                    <CourseCard 
                      course={course} 
                      onClick={handleCourseSelect} 
                    />
                  </Grid>
                ))}
              </Grid>
              
              {/* 컨텐츠 준비 중 메시지 */}
              <Box 
                sx={{ 
                  mt: 8, 
                  p: 4, 
                  textAlign: 'center',
                  borderRadius: '16px',
                  border: '1px dashed rgba(255, 255, 255, 0.2)',
                  background: 'rgba(0, 0, 0, 0.2)',
                }}
              >
                <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                  더 많은 튜토리얼이 준비 중입니다
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, maxWidth: '700px', mx: 'auto' }}>
                  LLM, GPT, AI 기획, 프롬프트 엔지니어링 등 다양한 주제의 튜토리얼이 곧 추가될 예정입니다.
                  먼저 알림을 받고 싶으시면 이메일을 등록해주세요.
                </Typography>
                <Button 
                  variant="outlined" 
                  color="primary"
                  onClick={() => window.location.href = 'mailto:jay@connexionai.kr?subject=AI%20교육%20알림%20신청'}
                  sx={{ 
                    px: 3, 
                    py: 1, 
                    borderRadius: 2,
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                    }
                  }}
                >
                  알림 신청하기
                </Button>
              </Box>
            </Box>
          </>
        ) : (
          <CourseDetail course={selectedCourse} onBack={handleBackToList} />
        )}
      </Container>
    </Box>
  );
};

export default Education; 