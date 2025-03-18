import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
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
  Tabs,
  Tab,
  Avatar,
  IconButton,
  Divider,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  MdPlayCircle,
  MdDescription,
  MdCode,
  MdDownload,
  MdArrowBack,
  MdPlayArrow,
  MdCheckCircle,
  MdPlaylistPlay,
  MdNotes,
  MdOutlineChat,
  MdOutlineFileDownload,
  MdBookmark,
  MdOutlinePlayArrow
} from 'react-icons/md';
import NavigationBar from '../../components/layout/NavigationBar';

const LectureDetail = () => {
  const { lectureId, sectionId } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  
  // 상태 관리
  const [currentTab, setCurrentTab] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  
  // OpenAI Agent 강의 데이터
  const agentCourse = {
    id: 1,
    title: "[비즈니스 AI] OpenAI Agent로 혁신적인 비즈니스 AI 서비스 개발하기",
    description: "이 강의에서는 OpenAI Agent SDK를 활용하여 실제 비즈니스 문제를 해결하는 AI 서비스를 개발하는 방법을 배웁니다. 기업용 AI 솔루션 구축부터 배포까지 실무 중심으로 진행합니다.",
    longDescription: "OpenAI의 Agent SDK는 GPT-4 모델을 기반으로 자율적인 의사결정과 행동이 가능한 AI 에이전트를 손쉽게 구축할 수 있는 최신 도구입니다. 이 강의에서는 비즈니스 환경에서 이를 활용하여 실질적인 가치를 창출하는 방법을 배웁니다.\n\n강의를 통해 고객 서비스 자동화, 데이터 분석 자동화, 의사결정 지원 시스템 등 다양한 비즈니스 AI 서비스를 개발하는 방법을 배우게 됩니다. 실제 기업 사례를 기반으로 한 프로젝트를 함께 구현하면서 이론과 실습을 병행하여 효과적으로 학습할 수 있습니다.\n\n초보자부터 AI 개발 경험이 있는 중급자까지 모두 들을 수 있도록 구성되어 있으며, Python 기본 지식만 있으면 충분합니다.",
    thumbnail: "/images/aiagentclass.png",
    duration: "3시간 29분",
    uploadDate: "2024-06-15",
    views: "8.3만",
    author: "Connect AI LAB",
    authorAvatar: "/images/connect-ai-avatar.png",
    category: "agents",
    level: "중급",
    hasNotebook: true,
    hasCode: true,
    featured: true,
    notebookCount: 3,
    requirements: [
      "Python 기본 지식",
      "OpenAI API 키",
      "웹 개발 기초 지식 (선택사항)"
    ],
    objectives: [
      "OpenAI Agent SDK의 구조와 작동 방식 이해",
      "자율적인 AI 에이전트의 설계 및 구현 방법 학습",
      "도구 사용, 메모리 관리, 의사결정 등 주요 기능 구현",
      "실전 프로젝트를 통한 에이전트 개발 경험 습득"
    ],
    sections: [
      {
        id: 101,
        title: "비즈니스 AI 혁명: OpenAI Agent의 기업 활용 사례",
        duration: "18:45",
        description: "OpenAI Agent가 비즈니스 환경에서 어떻게 활용되고 있는지 살펴보고, 기업들이 이를 통해 얻을 수 있는 경쟁 우위와 혁신 사례를 분석합니다.",
        videoId: "M1w6r1G0cbQ",
        notes: "이 강의에서는 OpenAI Agent SDK의 비즈니스 활용 사례와 성공 사례를 살펴봅니다. 고객 서비스, 데이터 분석, 의사결정 지원 등 다양한 분야에서 AI 에이전트가 어떻게 기업 가치를 창출하는지 알아봅니다.",
        resources: [
          {
            name: "1_Setting_API.ipynb 실습파일",
            type: "notebook",
            size: "68KB",
            url: "https://opct.blob.core.windows.net/lecture-openai-aiagent/1_Setting_API.ipynb?sp=r&st=2025-03-17T08:32:59Z&se=2025-03-17T16:32:59Z&sv=2022-11-02&sr=b&sig=QsKL%2FBxkcCwicJTXSRY7hFRU6xCJimltg0YYXjn5l5g%3D"
          }
        ]
      },
      {
        id: 102,
        title: "Responses API 기초 다지기",
        duration: "22:30",
        description: "Responses API의 기본 개념과 기존 API와의 차이점을 알아보고, 간단한 코드로 첫 번째 에이전트를 만드는 방법을 배웁니다.",
        videoId: "assistant-intro",
        notes: "이 강의에서는 Responses API가 기존 API와 어떻게 다른지 비교하고, 코드 몇 줄로 첫 번째 에이전트를 만드는 방법을 배웁니다. API 호출 방식과 기본 구조를 이해하고, 간단한 질의응답 에이전트를 구현하는 실습을 진행합니다.",
        resources: [
          {
            name: "Responses API 가이드",
            type: "document",
            size: "280KB",
            url: "https://opct.blob.core.windows.net/lecture-openai-aiagent/agent_sdk_installation.pdf?sp=r&st=2025-03-17T08:32:59Z&se=2025-03-17T16:32:59Z&sv=2022-11-02&sr=b&sig=QsKL%2FBxkcCwicJTXSRY7hFRU6xCJimltg0YYXjn5l5g%3D"
          },
          {
            name: "첫 에이전트 코드",
            type: "code",
            size: "12KB",
            url: "https://opct.blob.core.windows.net/lecture-openai-aiagent/first_agent.py?sp=r&st=2025-03-17T08:32:59Z&se=2025-03-17T16:32:59Z&sv=2022-11-02&sr=b&sig=QsKL%2FBxkcCwicJTXSRY7hFRU6xCJimltg0YYXjn5l5g%3D"
          }
        ]
      },
      {
        id: 103,
        title: "웹 검색 도구 활용하기",
        duration: "24:15",
        description: "웹 검색 도구의 작동 방식과 장점을 소개하고, 실시간 정보를 활용한 에이전트 구축 방법과 정확한 인용 및 출처 표시 방법을 배웁니다.",
        videoId: "assistant-python",
        notes: "이 강의에서는 웹 검색 도구의 작동 방식과 장점을 소개하고, 실시간 정보를 활용한 에이전트를 구축하는 방법을 배웁니다. 정확한 인용과 출처 표시 방법을 익히고, 뉴스 요약 또는 리서치 에이전트를 만드는 실습을 진행합니다.",
        resources: [
          {
            name: "웹 검색 도구 노트북",
            type: "notebook",
            size: "145KB",
            url: "/notebooks/agent_tools.ipynb"
          },
          {
            name: "뉴스 요약 에이전트 코드",
            type: "code",
            size: "32KB",
            url: "/code/agent_tools.py"
          }
        ]
      },
      {
        id: 104,
        title: "파일 검색 도구로 지식 기반 에이전트 만들기",
        duration: "26:40",
        description: "문서에서 정보를 찾고 답변하는 RAG 시스템을 이해하고, 벡터 스토어 생성 및 관리 방법과 효과적인 문서 기반 에이전트 설계 원칙을 배웁니다.",
        videoId: "assistant-tools",
        notes: "이 강의에서는 문서에서 정보를 찾고 답변하는 RAG(Retrieval-Augmented Generation) 시스템의 원리를 이해하고, 벡터 스토어 생성 및 관리 방법을 배웁니다. 효과적인 문서 기반 에이전트 설계 원칙을 익히고, 기업 FAQ 문서를 활용한 고객 지원 에이전트를 구현하는 실습을 진행합니다.",
        resources: [
          {
            name: "RAG 시스템 노트북",
            type: "notebook",
            size: "168KB",
            url: "/notebooks/agent_memory.ipynb"
          },
          {
            name: "벡터 스토어 예제 코드",
            type: "code",
            size: "28KB",
            url: "/code/decision_making.py"
          },
          {
            name: "문서 기반 에이전트 가이드",
            type: "document",
            size: "420KB",
            url: "/docs/memory_management.pdf"
          }
        ]
      },
      {
        id: 105,
        title: "컴퓨터 사용 도구로 자동화 시스템 구축하기",
        duration: "28:20",
        description: "컴퓨터 사용 도구의 가능성과 제한점을 탐색하고, 브라우저 기반 자동화 태스크 설계 및 안전한 컴퓨터 제어 에이전트 개발 가이드라인을 배웁니다.",
        videoId: "computer-tools",
        notes: "이 강의에서는 컴퓨터 사용 도구의 가능성과 제한점을 탐색하고, 브라우저 기반 자동화 태스크를 설계하는 방법을 배웁니다. 안전한 컴퓨터 제어 에이전트 개발 가이드라인을 익히고, 간단한 웹 탐색 및 정보 수집 에이전트를 구현하는 실습을 진행합니다.",
        resources: [
          {
            name: "컴퓨터 제어 노트북",
            type: "notebook",
            size: "156KB",
            url: "/notebooks/computer_control.ipynb"
          },
          {
            name: "자동화 에이전트 코드",
            type: "code",
            size: "42KB",
            url: "/code/automation_agent.py"
          }
        ]
      },
      {
        id: 106,
        title: "Agents SDK로 복잡한 워크플로우 구축하기",
        duration: "32:15",
        description: "멀티 에이전트 시스템 아키텍처 설계, 에이전트 간 업무 분담 및 협업 설정 방법, 에이전트 간 핸드오프 구현 방법을 배웁니다.",
        videoId: "multi-agent",
        notes: "이 강의에서는 멀티 에이전트 시스템 아키텍처를 설계하는 방법과 에이전트 간 업무 분담 및 협업 설정 방법을 배웁니다. 에이전트 간 핸드오프를 구현하는 기술을 익히고, 여러 에이전트가 협업하는 고객 응대 시스템을 구축하는 실습을 진행합니다.",
        resources: [
          {
            name: "멀티 에이전트 노트북",
            type: "notebook",
            size: "185KB",
            url: "/notebooks/multi_agent.ipynb"
          },
          {
            name: "에이전트 협업 코드",
            type: "code",
            size: "56KB",
            url: "/code/agent_collaboration.py"
          }
        ]
      },
      {
        id: 107,
        title: "비즈니스 사례별 에이전트 솔루션 구현",
        duration: "30:50",
        description: "고객 서비스, 판매, 마케팅, 법률 등 다양한 분야별 에이전트 사례를 소개하고, 기업 데이터와 외부 도구 통합 방법 및 효과적인 비즈니스 에이전트 구축 팁을 배웁니다.",
        videoId: "business-cases",
        notes: "이 강의에서는 고객 서비스, 판매, 마케팅, 법률 등 다양한 분야별 에이전트 사례를 소개하고, 기업 데이터와 외부 도구를 통합하는 방법을 배웁니다. 효과적인 비즈니스 에이전트 구축을 위한 팁과 트릭을 익히고, 특정 산업 분야에 특화된 에이전트 프로젝트를 구현하는 실습을 진행합니다.",
        resources: [
          {
            name: "비즈니스 사례 연구",
            type: "document",
            size: "520KB",
            url: "/docs/business_cases.pdf"
          },
          {
            name: "산업별 에이전트 코드",
            type: "code",
            size: "48KB",
            url: "/code/industry_agents.py"
          }
        ]
      },
      {
        id: 108,
        title: "에이전트 배포 및 모니터링",
        duration: "25:30",
        description: "프로덕션 환경에서 에이전트 배포하기, 에이전트 성능 모니터링 및 개선 방법, 비용 효율적인 운영 전략과 스케일링 방법을 배웁니다.",
        videoId: "deployment",
        notes: "이 강의에서는 프로덕션 환경에서 에이전트를 배포하는 방법과 에이전트 성능을 모니터링하고 개선하는 방법을 배웁니다. 비용 효율적인 운영 전략과 스케일링 방법을 익히고, 배포 및 모니터링 시스템을 구축하는 실습을 진행합니다.",
        resources: [
          {
            name: "배포 가이드",
            type: "document",
            size: "380KB",
            url: "/docs/deployment_guide.pdf"
          },
          {
            name: "모니터링 시스템 코드",
            type: "code",
            size: "36KB",
            url: "/code/monitoring_system.py"
          },
          {
            name: "스케일링 전략 노트북",
            type: "notebook",
            size: "142KB",
            url: "/notebooks/scaling_strategies.ipynb"
          }
        ]
      }
    ]
  };
  
  // 현재 선택된 섹션 찾기
  const currentSection = sectionId 
    ? agentCourse.sections.find(section => section.id === parseInt(sectionId)) 
    : agentCourse.sections[0];
    
  // 탭 변경 핸들러
  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };
  
  // 비디오 로드 완료 핸들러
  const handleVideoReady = () => {
    setVideoReady(true);
  };
  
  // 이전 페이지로 이동
  const handleGoBack = () => {
    navigate('/lab');
  };
  
  // 다운로드 핸들러
  const handleDownload = (resource) => {
    console.log(`Downloading ${resource.name}`);
    
    // 파일명 추출 (URL에서 파일명 부분만 가져오기)
    const getFileName = (url, name) => {
      // URL에서 파일명 추출 시도
      if (url.includes('/')) {
        const urlParts = url.split('/');
        const fileNameWithParams = urlParts[urlParts.length - 1];
        const fileName = fileNameWithParams.split('?')[0]; // 쿼리 파라미터 제거
        return fileName;
      }
      // URL에서 추출 실패 시 resource.name에서 추출
      return name.split(' ')[0];
    };
    
    // 로컬 파일 경로인 경우
    if (resource.url.startsWith('/Users/')) {
      alert(`로컬 파일 ${resource.name}을 다운로드합니다. 실제 구현에서는 파일 시스템 접근 로직이 필요합니다.`);
    } 
    // 외부 URL인 경우 (Azure Blob Storage 포함)
    else if (resource.url.startsWith('http')) {
      const fileName = getFileName(resource.url, resource.name);
      
      // 다운로드 링크 생성 및 클릭
      const link = document.createElement('a');
      link.href = resource.url;
      link.download = fileName;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      alert(`${resource.name} 다운로드가 시작됩니다.`);
    }
    // 상대 경로인 경우
    else {
      alert(`${resource.name} 다운로드를 시작합니다.`);
      
      // 상대 경로를 절대 경로로 변환
      const baseUrl = window.location.origin;
      const absoluteUrl = `${baseUrl}${resource.url.startsWith('/') ? '' : '/'}${resource.url}`;
      
      // 다운로드 링크 생성 및 클릭
      const link = document.createElement('a');
      link.href = absoluteUrl;
      link.download = getFileName(resource.url, resource.name);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #000000 0%, #191919 100%)',
      color: '#fff',
      pb: 8
    }}>
      <NavigationBar />
      
      <Container maxWidth="xl" sx={{ pt: { xs: 4, md: 6 } }}>
        {/* 뒤로가기 버튼 */}
        <Button
          startIcon={<MdArrowBack />}
          onClick={handleGoBack}
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            mb: 3,
            '&:hover': {
              color: '#FFD700',
              backgroundColor: 'rgba(255, 215, 0, 0.1)',
            }
          }}
        >
          AI 실험실로 돌아가기
        </Button>
        
        <Grid container spacing={4}>
          {/* 왼쪽 컨텐츠 영역 */}
          <Grid item xs={12} md={8}>
            {/* 비디오 플레이어 */}
            <Box sx={{ 
              position: 'relative',
              width: '100%',
              paddingTop: '56.25%', // 16:9 비율
              backgroundColor: '#000',
              borderRadius: '12px',
              overflow: 'hidden',
              mb: 3
            }}>
              {currentSection.videoId === "M1w6r1G0cbQ" ? (
                <iframe
                  src={`https://www.youtube.com/embed/${currentSection.videoId}?autoplay=0&rel=0`}
                  title={currentSection.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  onLoad={handleVideoReady}
                />
              ) : (
                <Box sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                }}>
                  <MdPlayCircle size={60} color="#FFD700" />
                  <Typography variant="body1" sx={{ mt: 2, color: 'rgba(255, 255, 255, 0.7)' }}>
                    이 비디오는 준비 중입니다
                  </Typography>
                </Box>
              )}
              
              {!videoReady && currentSection.videoId === "M1w6r1G0cbQ" && (
                <Box sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                }}>
                  <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    비디오 로딩 중...
                  </Typography>
                </Box>
              )}
            </Box>
            
            {/* 강의 제목 및 정보 */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: '#FFD700',
                fontSize: { xs: '1.5rem', md: '2rem' },
              }}
            >
              {currentSection.title}
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              mb: 3,
              flexWrap: 'wrap',
              gap: 1
            }}>
              <Chip 
                size="small" 
                label={`${currentSection.duration}`} 
                icon={<MdPlayArrow size={16} />}
                sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'rgba(255, 255, 255, 0.9)',
                }} 
              />
              
              <Chip 
                size="small" 
                label="AI 에이전트" 
                sx={{ 
                  backgroundColor: 'rgba(255, 215, 0, 0.1)',
                  color: '#FFD700',
                }} 
              />
              
              <Chip 
                size="small" 
                label={agentCourse.level} 
                sx={{ 
                  backgroundColor: 'rgba(33, 150, 243, 0.1)',
                  color: '#2196f3',
                }} 
              />
            </Box>
            
            {/* 탭 메뉴 */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
              <Tabs 
                value={currentTab} 
                onChange={handleTabChange}
                sx={{
                  '& .MuiTabs-indicator': {
                    backgroundColor: '#FFD700',
                  },
                  '& .MuiTab-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-selected': {
                      color: '#FFD700',
                    },
                  },
                }}
              >
                <Tab label="강의 설명" icon={<MdDescription />} iconPosition="start" />
                <Tab label="강의 자료" icon={<MdOutlineFileDownload />} iconPosition="start" />
                <Tab label="노트" icon={<MdNotes />} iconPosition="start" />
              </Tabs>
            </Box>
            
            {/* 탭 컨텐츠 */}
            <Box sx={{ mb: 4 }}>
              {/* 강의 설명 탭 */}
              {currentTab === 0 && (
                <Box>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.9)' }}>
                    {currentSection.description}
                  </Typography>
                  
                  {currentTab === 0 && currentSection.id === 101 && (
                    <Box sx={{ mt: 4 }}>
                      <Typography variant="h6" sx={{ mb: 2, color: '#FFD700' }}>
                        강의 내용
                      </Typography>
                      
                      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.9)' }}>
                        {currentSection.notes}
                      </Typography>
                      
                      <Typography variant="h6" sx={{ mb: 2, mt: 4, color: '#FFD700' }}>
                        전체 강의 개요
                      </Typography>
                      
                      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.9)' }}>
                        {agentCourse.longDescription}
                      </Typography>
                      
                      <Box sx={{ mt: 4 }}>
                        <Typography variant="h6" sx={{ mb: 2, color: '#FFD700' }}>
                          학습 목표
                        </Typography>
                        
                        <List>
                          {agentCourse.objectives.map((objective, index) => (
                            <ListItem key={index} sx={{ px: 0 }}>
                              <ListItemIcon sx={{ minWidth: 36 }}>
                                <MdCheckCircle color="#FFD700" />
                              </ListItemIcon>
                              <ListItemText 
                                primary={objective} 
                                primaryTypographyProps={{ 
                                  color: 'rgba(255, 255, 255, 0.9)',
                                  fontSize: '1rem'
                                }} 
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                      
                      <Box sx={{ mt: 4 }}>
                        <Typography variant="h6" sx={{ mb: 2, color: '#FFD700' }}>
                          사전 요구사항
                        </Typography>
                        
                        <List>
                          {agentCourse.requirements.map((requirement, index) => (
                            <ListItem key={index} sx={{ px: 0 }}>
                              <ListItemIcon sx={{ minWidth: 36 }}>
                                <MdCheckCircle color="#FFD700" />
                              </ListItemIcon>
                              <ListItemText 
                                primary={requirement} 
                                primaryTypographyProps={{ 
                                  color: 'rgba(255, 255, 255, 0.9)',
                                  fontSize: '1rem'
                                }} 
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </Box>
                  )}
                </Box>
              )}
              
              {/* 강의 자료 탭 */}
              {currentTab === 1 && (
                <Box>
                  <Typography variant="h6" sx={{ mb: 3, color: '#FFD700' }}>
                    다운로드 가능한 자료
                  </Typography>
                  
                  {currentSection.resources && currentSection.resources.length > 0 ? (
                    <List sx={{ 
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '8px',
                      overflow: 'hidden'
                    }}>
                      {currentSection.resources.map((resource, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }} />}
                          <ListItemButton 
                            onClick={() => handleDownload(resource)}
                            sx={{
                              py: 2,
                              '&:hover': {
                                bgcolor: 'rgba(255, 215, 0, 0.1)',
                              }
                            }}
                          >
                            <ListItemIcon>
                              {resource.type === 'notebook' && <MdDescription color="#4CAF50" size={24} />}
                              {resource.type === 'code' && <MdCode color="#2196F3" size={24} />}
                              {resource.type === 'document' && <MdNotes color="#FF9800" size={24} />}
                            </ListItemIcon>
                            <ListItemText 
                              primary={resource.name} 
                              secondary={`${resource.size}`}
                              primaryTypographyProps={{ 
                                color: '#fff',
                                fontWeight: 500
                              }}
                              secondaryTypographyProps={{ 
                                color: 'rgba(255, 255, 255, 0.6)'
                              }}
                            />
                            <MdDownload size={20} color="rgba(255, 255, 255, 0.7)" />
                          </ListItemButton>
                        </React.Fragment>
                      ))}
                    </List>
                  ) : (
                    <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      이 강의에는 아직 다운로드 가능한 자료가 없습니다.
                    </Typography>
                  )}
                </Box>
              )}
              
              {/* 노트 탭 */}
              {currentTab === 2 && (
                <Box>
                  <Typography variant="h6" sx={{ mb: 3, color: '#FFD700' }}>
                    강의 노트
                  </Typography>
                  
                  <Paper sx={{ 
                    p: 3, 
                    bgcolor: 'rgba(255, 255, 255, 0.05)', 
                    color: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <Typography variant="body1" sx={{ whiteSpace: 'pre-line', lineHeight: 1.8 }}>
                      {currentSection.notes || "이 강의에 대한 노트가 아직 준비되지 않았습니다."}
                    </Typography>
                  </Paper>
                </Box>
              )}
            </Box>
          </Grid>
          
          {/* 오른쪽 사이드바 */}
          <Grid item xs={12} md={4}>
            {/* 강의 목록 */}
            <Paper sx={{ 
              bgcolor: 'rgba(15, 15, 15, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 215, 0, 0.1)',
              borderRadius: '12px',
              overflow: 'hidden',
              mb: 4
            }}>
              <Box sx={{ 
                p: 2, 
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}>
                <MdPlaylistPlay size={24} color="#FFD700" />
                <Typography variant="h6" sx={{ color: '#FFD700', fontWeight: 600 }}>
                  강의 목록
                </Typography>
              </Box>
              
              <List disablePadding>
                {agentCourse.sections.map((section, index) => {
                  const isActive = currentSection.id === section.id;
                  
                  return (
                    <ListItemButton
                      key={section.id}
                      selected={isActive}
                      onClick={() => navigate(`/lab/openai_agent/${section.id}`)}
                      sx={{
                        borderLeft: isActive ? '4px solid #FFD700' : '4px solid transparent',
                        bgcolor: isActive ? 'rgba(255, 215, 0, 0.1)' : 'transparent',
                        '&:hover': {
                          bgcolor: isActive ? 'rgba(255, 215, 0, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                        },
                        py: 2
                      }}
                    >
                      <Box sx={{ 
                        width: 28, 
                        height: 28, 
                        borderRadius: '50%', 
                        bgcolor: isActive ? 'rgba(255, 215, 0, 0.2)' : 'rgba(255, 255, 255, 0.1)', 
                        color: isActive ? '#FFD700' : 'rgba(255, 255, 255, 0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 600,
                        mr: 2,
                        fontSize: '0.9rem'
                      }}>
                        {index + 1}
                      </Box>
                      
                      <ListItemText
                        primary={section.title}
                        secondary={section.duration}
                        primaryTypographyProps={{ 
                          color: isActive ? '#FFD700' : '#fff',
                          fontWeight: isActive ? 600 : 400,
                          fontSize: '0.95rem'
                        }}
                        secondaryTypographyProps={{ 
                          color: 'rgba(255, 255, 255, 0.6)',
                          fontSize: '0.8rem'
                        }}
                      />
                      
                      {isActive && <MdOutlinePlayArrow color="#FFD700" size={20} />}
                    </ListItemButton>
                  );
                })}
              </List>
            </Paper>
            
            {/* 강의 정보 카드 */}
            <Paper sx={{ 
              bgcolor: 'rgba(15, 15, 15, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 215, 0, 0.1)',
              borderRadius: '12px',
              overflow: 'hidden',
              mb: 4
            }}>
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ color: '#FFD700', mb: 2, fontWeight: 600 }}>
                  강의 정보
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Avatar
                    src={agentCourse.authorAvatar}
                    alt={agentCourse.author}
                    sx={{ width: 48, height: 48, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 600 }}>
                      Jay Jung
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      AI Mentor
                    </Typography>
                  </Box>
                </Box>
                
                <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', my: 2 }} />
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    총 강의 시간
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#fff', fontWeight: 500 }}>
                    {agentCourse.duration}
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    난이도
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#2196f3', fontWeight: 500 }}>
                    {agentCourse.level}
                  </Typography>
                </Box>
                
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<MdBookmark />}
                  sx={{
                    color: '#FFD700',
                    borderColor: 'rgba(255, 215, 0, 0.5)',
                    '&:hover': {
                      borderColor: '#FFD700',
                      bgcolor: 'rgba(255, 215, 0, 0.1)',
                    },
                    py: 1
                  }}
                >
                  강의 북마크
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LectureDetail;