import React, { useState } from 'react';
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
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDownload, FaPlay, FaCode, FaFilePdf, FaGithub } from 'react-icons/fa';
import { MdSchool, MdFilterNone, MdCheck, MdArrowBack, MdNotifications } from 'react-icons/md';

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
    relatedBlogPosts: [
      {
        title: "AI 초보자를 위한 이미지 분류 완전 가이드",
        url: "/blog/beginners-guide-to-image-classification",
        date: "2025년 1월 15일 예정",
        readTime: 7,
        status: "upcoming"
      },
      {
        title: "Hugging Face Transformers로 5분 만에 이미지 인식하기",
        url: "/blog/image-recognition-in-5-minutes-with-hugging-face",
        date: "2025년 2월 1일 예정",
        readTime: 5,
        status: "upcoming"
      },
      {
        title: "왕초보도 할 수 있는 AI 이미지 분석 프로젝트 3가지",
        url: "/blog/3-image-analysis-projects-for-beginners",
        date: "2025년 2월 20일 예정",
        readTime: 10,
        status: "upcoming"
      }
    ],
    contentCalendar: [
      {
        week: "D-14",
        title: "이미지 분류란 무엇인가?",
        description: "키워드 기반 SEO 최적화 블로그 포스트",
        type: "블로그"
      },
      {
        week: "D-7",
        title: "Hugging Face 시작하기",
        description: "실용적인 팁 중심 블로그 포스트",
        type: "블로그"
      },
      {
        week: "D-Day",
        title: "이미지 분류 강의 공개",
        description: "강의 출시 및 상세 가이드 블로그 동시 공개",
        type: "강의 + 블로그"
      },
      {
        week: "D+7",
        title: "왕초보 AI 프로젝트 적용 사례",
        description: "실제 적용 사례와 사용자 피드백",
        type: "블로그"
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
    ],
    relatedBlogPosts: [
      {
        title: "AutoGen으로 24시간 작동하는 AI 리서치 팀 구축하기",
        url: "/blog/automate-research-team-with-autogen",
        date: "2023년 12월 15일",
        readTime: 8,
        status: "published"
      },
      {
        title: "AI 자동화로 리서치 비용 90% 절감한 사례 연구",
        url: "/blog/research-cost-reduction-with-ai-automation",
        date: "2023년 12월 22일",
        readTime: 12,
        status: "published"
      },
      {
        title: "Microsoft AutoGen vs. LangChain: AI 자동화 프레임워크 비교",
        url: "/blog/autogen-vs-langchain-comparison",
        date: "2024년 1월 5일",
        readTime: 10,
        status: "published"
      },
      {
        title: "초보자도 할 수 있는 5가지 AI 에이전트 자동화 프로젝트",
        url: "/blog/5-ai-agent-automation-projects-for-beginners",
        date: "2024년 1월 15일",
        readTime: 15,
        status: "published"
      }
    ],
    contentCalendar: [
      {
        week: "1주차",
        title: "AutoGen 시작하기",
        description: "기초 설명 및 설치 가이드",
        type: "블로그"
      },
      {
        week: "2주차",
        title: "AI 에이전트 역할 설계하기",
        description: "효과적인 팀 구성 방법 안내",
        type: "블로그"
      },
      {
        week: "3주차",
        title: "AI 리서치팀 자동화 강의 공개",
        description: "실전 활용법 안내 및 코드 예제",
        type: "강의 + 블로그"
      },
      {
        week: "4주차",
        title: "사례 연구: 리서치 비용 절감",
        description: "실제 비즈니스 적용 사례 및 ROI 분석",
        type: "블로그"
      }
    ]
  }
];

// 코스 카드 컴포넌트
const CourseCard = ({ course, onClick }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 4,
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
        border: '1px solid',
        borderColor: 'divider',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          '& .courseImage': {
            transform: 'scale(1.05)',
          }
        },
      }}
      onClick={() => onClick(course)}
    >
      <Box sx={{ position: 'relative', paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
        <CardMedia
          component="img"
          image={course.thumbnail}
          alt={course.title}
          className="courseImage"
          sx={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s ease',
          }}
        />
        <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
          <Chip 
            label={course.level} 
            color={
              course.level === "왕초보" ? "primary" : 
              course.level === "중급" ? "secondary" : 
              "default"
            }
            size="small"
            sx={{ 
              fontWeight: 'bold',
              backgroundColor: 
                course.level === "왕초보" ? "#EFF6FF" : 
                course.level === "중급" ? "#EDE9FE" : 
                "#F1F5F9",
              color:
                course.level === "왕초보" ? "#2563EB" : 
                course.level === "중급" ? "#7C3AED" : 
                "#475569",
            }}
          />
        </Box>
      </Box>
      
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
        <Typography 
          variant="h6" 
          fontWeight="bold" 
          gutterBottom
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            mb: 2,
            minHeight: '3.6em',
          }}
        >
          {course.title}
        </Typography>
        
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            mb: 3,
            flexGrow: 1,
          }}
        >
          {course.description}
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          mt: 'auto',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <MdSchool style={{ color: 'rgba(0, 0, 0, 0.5)', marginRight: '6px' }} />
            <Typography variant="body2" color="text.secondary" mr={2}>
              {course.duration}
            </Typography>
          </Box>
          
          {course.videoUrl ? (
            <Chip
              icon={<FaPlay size={10} />}
              label="시청 가능"
              size="small"
              sx={{ 
                backgroundColor: '#EFF6FF',
                color: '#2563EB',
                fontWeight: 'medium',
                fontSize: '0.75rem',
              }}
            />
          ) : (
            <Chip
              label="출시 예정"
              size="small"
              sx={{ 
                backgroundColor: '#F1F5F9',
                color: '#64748B',
                fontWeight: 'medium',
                fontSize: '0.75rem',
              }}
            />
          )}
        </Box>
      </CardContent>
    </Paper>
  );
};

// 코스 상세 컴포넌트
const CourseDetail = ({ course, onBack }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      <Button
        startIcon={<MdArrowBack />}
        onClick={onBack}
        sx={{ 
          mb: 3, 
          fontWeight: 'medium',
          color: 'text.secondary',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
          }
        }}
      >
        모든 클래스로 돌아가기
      </Button>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper 
              elevation={0} 
              sx={{ 
                borderRadius: 4, 
                overflow: 'hidden',
                border: '1px solid',
                borderColor: 'divider', 
              }}
            >
              {course.videoUrl ? (
                <Box sx={{ position: 'relative', height: 0, paddingBottom: '56.25%' }}>
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
                </Box>
              ) : (
                <Box
                  sx={{
                    position: 'relative',
                    height: 0,
                    paddingBottom: '56.25%',
                    backgroundColor: '#f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      p: 3,
                    }}
                  >
                    <MdFilterNone style={{ fontSize: '3.5rem', color: '#64748B', marginBottom: '1rem' }} />
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                      비디오 준비 중
                    </Typography>
                    <Typography color="text.secondary" sx={{ maxWidth: '400px' }}>
                      이 강의의 비디오 콘텐츠는 현재 준비 중입니다.
                      <br />출시 예정일: {course.releaseDate || '곧 공개'}
                    </Typography>
                  </Box>
                </Box>
              )}
              
              <Box sx={{ p: 4 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  {course.title}
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
                  {course.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      sx={{ 
                        backgroundColor: '#F1F5F9',
                        color: '#64748B',
                      }}
                    />
                  ))}
                </Box>
                
                <Typography color="text.secondary" paragraph>
                  {course.description}
                </Typography>
                
                <Divider sx={{ my: 4 }} />
                
                <Box sx={{ mb: 4 }}>
                  <Tabs 
                    value={activeTab} 
                    onChange={handleTabChange}
                    sx={{ 
                      borderBottom: 1, 
                      borderColor: 'divider',
                      '& .MuiTabs-indicator': {
                        backgroundColor: 'primary.main',
                      }
                    }}
                  >
                    <Tab label="커리큘럼" />
                    <Tab label="관련 블로그" />
                    {course.contentCalendar && <Tab label="콘텐츠 일정" />}
                    {course.notebookContent && <Tab label="노트북 미리보기" />}
                  </Tabs>
                  
                  <Box sx={{ mt: 3 }}>
                    {/* 커리큘럼 탭 */}
                    {activeTab === 0 && (
                      <Box>
                        {course.sections.map((section, index) => (
                          <Box key={index} sx={{ mb: 4 }}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                              <Box
                                sx={{
                                  width: 28,
                                  height: 28,
                                  borderRadius: '50%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  backgroundColor: section.status === 'available' ? '#EFF6FF' : '#F1F5F9',
                                  color: section.status === 'available' ? '#2563EB' : '#64748B',
                                  mr: 1.5,
                                  flexShrink: 0,
                                }}
                              >
                                {section.status === 'available' ? (
                                  <MdCheck size={16} />
                                ) : (
                                  <Typography variant="body2">{index + 1}</Typography>
                                )}
                              </Box>
                              <Box>
                                <Typography 
                                  variant="h6" 
                                  gutterBottom
                                  sx={{ 
                                    fontWeight: 'bold',
                                    color: section.status === 'available' ? 'text.primary' : 'text.secondary',
                                  }}
                                >
                                  {section.title}
                                </Typography>
                                <Typography 
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {section.content}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    )}
                    
                    {/* 관련 블로그 탭 */}
                    {activeTab === 1 && (
                      <Box>
                        {course.relatedBlogPosts.map((post, index) => (
                          <Box 
                            key={index} 
                            sx={{ 
                              mb: 3,
                              p: 2.5,
                              borderRadius: 2,
                              border: '1px solid',
                              borderColor: 'divider',
                              transition: 'all 0.2s',
                              '&:hover': {
                                backgroundColor: '#F8FAFC',
                                borderColor: 'primary.light',
                              }
                            }}
                          >
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                              <Typography variant="h6" fontWeight="medium">
                                {post.title}
                              </Typography>
                              <Chip 
                                label={post.status === 'published' ? '게시됨' : '예정'} 
                                size="small"
                                sx={{ 
                                  backgroundColor: post.status === 'published' ? '#EFF6FF' : '#F1F5F9',
                                  color: post.status === 'published' ? '#2563EB' : '#64748B',
                                  fontWeight: 'medium',
                                }}
                              />
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1, color: 'text.secondary', fontSize: '0.875rem' }}>
                              <Typography variant="body2">
                                {post.date}
                              </Typography>
                              <Typography variant="body2">•</Typography>
                              <Typography variant="body2">
                                {post.readTime}분 소요
                              </Typography>
                            </Box>
                            {post.status === 'published' && (
                              <Button
                                variant="text"
                                color="primary"
                                size="small"
                                component="a"
                                href={post.url}
                                sx={{ mt: 1, fontWeight: 'medium', p: 0, minWidth: 'auto' }}
                              >
                                블로그 읽기 →
                              </Button>
                            )}
                          </Box>
                        ))}
                      </Box>
                    )}
                    
                    {/* 콘텐츠 일정 탭 */}
                    {activeTab === 2 && course.contentCalendar && (
                      <Box>
                        {course.contentCalendar.map((item, index) => (
                          <Box 
                            key={index} 
                            sx={{ 
                              mb: 3,
                              display: 'flex',
                              alignItems: 'flex-start',
                            }}
                          >
                            <Chip 
                              label={item.week} 
                              size="small"
                              sx={{ 
                                backgroundColor: '#F1F5F9',
                                color: '#64748B',
                                fontWeight: 'medium',
                                mr: 2,
                                minWidth: '60px',
                              }}
                            />
                            <Box>
                              <Typography variant="subtitle1" fontWeight="medium">
                                {item.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {item.description}
                              </Typography>
                              <Chip 
                                label={item.type} 
                                size="small"
                                sx={{ 
                                  backgroundColor: '#EFF6FF',
                                  color: '#2563EB',
                                  fontWeight: 'medium',
                                  mt: 1,
                                  fontSize: '0.75rem',
                                }}
                              />
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    )}
                    
                    {/* 노트북 미리보기 탭 */}
                    {activeTab === 3 && course.notebookContent && (
                      <Box
                        sx={{
                          backgroundColor: '#F8FAFC',
                          borderRadius: 2,
                          p: 3,
                          fontFamily: 'monospace',
                          fontSize: '0.9rem',
                          overflowX: 'auto',
                          whiteSpace: 'pre-wrap',
                          border: '1px solid',
                          borderColor: 'divider',
                        }}
                      >
                        {course.notebookContent}
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            </Paper>
          </motion.div>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4, 
                borderRadius: 4,
                position: 'sticky',
                top: 100,
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
                강의 정보
              </Typography>
              
              <Grid container spacing={2} sx={{ mb: 2 }}>
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
                    강사
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    {course.instructor}
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
              
              <Divider sx={{ my: 3 }} />
              
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                다운로드 리소스
              </Typography>
              
              <List>
                {course.downloads.map((item, index) => (
                  <ListItem key={index} disablePadding sx={{ mb: 2 }}>
                    <Button
                      variant="outlined"
                      fullWidth
                      startIcon={item.icon}
                      endIcon={<FaDownload />}
                      sx={{
                        py: 1.5,
                        justifyContent: 'space-between',
                        borderRadius: 2,
                        textAlign: 'left',
                        color: 'text.primary',
                        borderColor: 'divider',
                        '&:hover': {
                          backgroundColor: '#F8FAFC',
                          borderColor: 'primary.main',
                        },
                      }}
                      component="a"
                      href={`${process.env.PUBLIC_URL}${item.url}`}
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
                    borderRadius: 8,
                    textTransform: 'none',
                    mb: 2,
                    background: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #3B82F6 30%, #8B5CF6 100%)',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 7px 14px rgba(59, 130, 246, 0.3)',
                    },
                    transition: 'all 0.3s ease',
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
                    borderRadius: 8,
                    textTransform: 'none',
                    borderColor: '#3B82F6',
                    color: '#3B82F6',
                    '&:hover': {
                      borderColor: '#8B5CF6',
                      color: '#8B5CF6',
                      backgroundColor: 'rgba(59, 130, 246, 0.05)',
                    }
                  }}
                  startIcon={<FaDownload />}
                  component="a"
                  href={course.downloads[0]?.url}
                  target="_blank"
                >
                  코드 다운로드
                </Button>
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

// 교육 페이지 메인 컴포넌트
const Education = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedCourse(null);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // 코스 카테고리
  const categories = [
    { label: "전체", value: "all" },
    { label: "왕초보", value: "beginner" },
    { label: "중급", value: "intermediate" },
    { label: "고급", value: "advanced" },
  ];

  // 카테고리에 따른 코스 필터링
  const filteredCourses = activeTab === 0 
    ? courses 
    : courses.filter(course => {
        if (activeTab === 1) return course.level === "왕초보";
        if (activeTab === 2) return course.level === "중급";
        if (activeTab === 3) return course.level === "고급";
        return true;
      });

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        background: 'white',
        color: 'text.primary',
        pt: { xs: 12, md: 14 },
        pb: 10,
      }}
    >
      <Container maxWidth="lg">
        {!selectedCourse ? (
          <>
            {/* 헤더 섹션 */}
            <Box sx={{ mb: 8, textAlign: 'center' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography 
                  variant="h2" 
                  component="h1" 
                  sx={{ 
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    background: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  AI 교육 센터
                </Typography>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: 4,
                    maxWidth: '800px',
                    mx: 'auto',
                    color: 'text.secondary',
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    lineHeight: 1.6,
                  }}
                >
                  AI 기술로 삶과 비즈니스, 학업의 패러다임을 변화시키는 교육을 제공합니다.
                  실무 중심의 체계적인 커리큘럼으로 AI 역량을 키워보세요.
                </Typography>
              </motion.div>

              {/* 필터 탭 */}
              <Box sx={{ 
                border: '1px solid', 
                borderColor: 'divider', 
                borderRadius: 2, 
                display: 'inline-flex',
                backgroundColor: 'background.paper',
                p: 0.5,
                mb: 6,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
              }}>
                <Tabs 
                  value={activeTab} 
                  onChange={handleTabChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  sx={{
                    '& .MuiTab-root': {
                      textTransform: 'none',
                      fontWeight: 500,
                      mx: 0.5,
                      borderRadius: 1.5,
                      minHeight: '40px',
                      fontSize: '0.95rem',
                    },
                    '& .Mui-selected': {
                      backgroundColor: 'primary.light',
                      color: 'primary.main',
                    },
                  }}
                >
                  {categories.map((category, index) => (
                    <Tab key={index} label={category.label} />
                  ))}
                </Tabs>
              </Box>
            </Box>

            {/* 특별 추천 코스 */}
            {filteredCourses.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Box sx={{ mb: 8 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                    <Typography variant="h4" fontWeight="700">
                      추천 클래스
                    </Typography>
                    <Chip 
                      label="NEW" 
                      color="primary" 
                      size="small" 
                      sx={{ fontWeight: 'bold' }} 
                    />
                  </Box>
                  
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                      <Paper
                        elevation={0}
                        sx={{
                          position: 'relative',
                          borderRadius: 4,
                          overflow: 'hidden',
                          height: {xs: 320, md: 400},
                          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url(${filteredCourses[0].thumbnail})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-end',
                          p: 4,
                          transition: 'all 0.3s ease-in-out',
                          cursor: 'pointer',
                          border: '1px solid',
                          borderColor: 'divider',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                          }
                        }}
                        onClick={() => handleCourseSelect(filteredCourses[0])}
                      >
                        <Box sx={{ position: 'relative', zIndex: 2 }}>
                          <Chip 
                            label={filteredCourses[0].level} 
                            color="primary" 
                            size="small" 
                            sx={{ mb: 2, fontWeight: 'bold' }}
                          />
                          <Typography variant="h4" fontWeight="bold" gutterBottom color="white">
                            {filteredCourses[0].title}
                          </Typography>
                          <Typography
                            variant="body1"
                            color="rgba(255, 255, 255, 0.8)"
                            sx={{
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              display: '-webkit-box',
                              mb: 3
                            }}
                          >
                            {filteredCourses[0].description}
                          </Typography>
                          <Button
                            variant="contained"
                            color="primary"
                            startIcon={<FaPlay />}
                            sx={{ 
                              borderRadius: '30px',
                              px: 3,
                              py: 1.2,
                              background: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)',
                              '&:hover': {
                                background: 'linear-gradient(90deg, #3B82F6 30%, #8B5CF6 100%)',
                              }
                            }}
                          >
                            강의 보기
                          </Button>
                        </Box>
                      </Paper>
                    </Grid>
                    
                    <Grid item xs={12} md={4}>
                      <Paper
                        elevation={0}
                        sx={{
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          p: 4,
                          borderRadius: 4,
                          border: '1px solid',
                          borderColor: 'divider',
                          background: 'linear-gradient(135deg, #EFF6FF 0%, #EDE9FE 100%)',
                          transition: 'all 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                          }
                        }}
                      >
                        <Typography variant="h5" fontWeight="bold" gutterBottom color="text.primary">
                          새로운 AI 클래스를 기다리고 계신가요?
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                          AI 비즈니스 활용, 개발 튜토리얼, 그리고 최신 AI 트렌드에 대한 
                          새로운 교육 콘텐츠가 정기적으로 업데이트됩니다.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                          <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<MdNotifications />}
                            sx={{ 
                              borderRadius: '30px',
                              px: 3,
                              py: 1.2,
                              borderColor: '#3B82F6',
                              '&:hover': {
                                borderColor: '#8B5CF6',
                                backgroundColor: 'rgba(59, 130, 246, 0.05)',
                              }
                            }}
                            onClick={() => {
                              alert('알림 신청이 완료되었습니다!');
                            }}
                          >
                            새 강의 알림 신청
                          </Button>
                        </Box>
                      </Paper>
                    </Grid>
                  </Grid>
                </Box>
              </motion.div>
            )}

            {/* 모든 클래스 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box>
                <Typography variant="h4" fontWeight="700" sx={{ mb: 4 }}>
                  모든 클래스
                </Typography>
                
                <Grid container spacing={4}>
                  {filteredCourses.map((course, index) => (
                    <Grid item xs={12} sm={6} md={4} key={course.id}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                      >
                        <CourseCard 
                          course={course} 
                          onClick={handleCourseSelect} 
                        />
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
          </>
        ) : (
          <CourseDetail course={selectedCourse} onBack={handleBackToList} />
        )}
      </Container>
    </Box>
  );
};

export default Education; 