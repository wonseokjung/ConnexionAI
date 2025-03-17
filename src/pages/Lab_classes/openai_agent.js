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
    title: "OpenAI Agent SDK로 강력한 AI 에이전트 만들기",
    description: "이 강의에서는 OpenAI의 새로운 Agent SDK를 활용하여 자율적인 AI 에이전트를 구축하는 방법을 배웁니다. 실제 프로젝트로 이론과 실습을 함께 진행합니다.",
    longDescription: "OpenAI의 Agent SDK는 GPT-4 모델을 기반으로 자율적인 의사결정과 행동이 가능한 AI 에이전트를 손쉽게 구축할 수 있는 최신 도구입니다. 이 강의에서는 SDK의 기본 개념부터 고급 응용까지 단계별로 알아봅니다.\n\n강의를 통해 자율적인 의사결정, 도구 사용, 멀티턴 대화, 메모리 관리 등의 기능을 갖춘 강력한 AI 에이전트를 만드는 방법을 배우게 됩니다. 실제 프로젝트를 함께 구현하면서 이론과 실습을 병행하여 효과적으로 학습할 수 있습니다.\n\n초보자부터 AI 개발 경험이 있는 중급자까지 모두 들을 수 있도록 구성되어 있으며, Python 기본 지식만 있으면 충분합니다.",
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
        title: "Manus AI: 세계 최초의 자율형 AI 에이전트",
        duration: "18:45",
        description: "OpenAI의 새로운 Agent SDK를 소개하고, 기존의 Assistant API와 어떻게 다른지, 어떤 새로운 기능을 제공하는지 살펴봅니다.",
        videoId: "M1w6r1G0cbQ",
        notes: "이 강의에서는 OpenAI Agent SDK의 주요 기능과 특징을 살펴보고, 기존의 Assistant API와 어떻게 다른지 비교합니다. 자율 에이전트의 개념과 미래 발전 방향에 대해서도 논의합니다.",
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
        title: "OpenAI AI Agent로 만들기 첫걸음",
        duration: "24:30",
        description: "Agent SDK를 설치하고 기본적인 에이전트를 만드는 과정을 단계별로 알아봅니다. 에이전트의 기본 구성 요소와 설정 방법을 배웁니다.",
        videoId: "assistant-intro",
        notes: "이 강의에서는 Agent SDK의 설치 방법부터 시작하여 기본적인 에이전트를 만드는 과정을 단계별로 알아봅니다. 에이전트의 기본 구성 요소인 모델 설정, 도구 연결, 메모리 관리 등에 대해 자세히 설명합니다.",
        resources: [
          {
            name: "Agent SDK 설치 가이드",
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
        title: "에이전트에 도구(Tools) 연결하기",
        duration: "28:42",
        description: "Agent SDK에서 제공하는 다양한 도구들을 에이전트에 연결하고 활용하는 방법을 배웁니다. 웹 검색, 코드 실행, 파일 처리 등의 도구를 구현합니다.",
        videoId: "assistant-python",
        notes: "이 강의에서는 Agent SDK에서 제공하는 다양한 도구들을 에이전트에 연결하고 활용하는 방법을 배웁니다. 웹 검색, 코드 실행, 파일 처리 등의 도구를 구현하고, 에이전트가 이를 자율적으로 사용하도록 설정하는 방법을 알아봅니다.",
        resources: [
          {
            name: "도구 연결 노트북",
            type: "notebook",
            size: "145KB",
            url: "/notebooks/agent_tools.ipynb"
          },
          {
            name: "도구 구현 코드",
            type: "code",
            size: "32KB",
            url: "/code/agent_tools.py"
          }
        ]
      },
      {
        id: 104,
        title: "에이전트 메모리 및 의사결정 관리",
        duration: "31:18",
        description: "에이전트의 메모리 관리와 의사결정 프로세스를 구현하는 방법을 배웁니다. 장기 기억, 컨텍스트 관리, 의사결정 전략 등을 다룹니다.",
        videoId: "assistant-tools",
        notes: "이 강의에서는 에이전트의 메모리 관리와 의사결정 프로세스를 구현하는 방법을 배웁니다. 장기 기억, 컨텍스트 관리, 의사결정 전략 등을 다루며, 에이전트가 복잡한 작업을 수행할 때 필요한 기억력과 판단력을 향상시키는 방법을 알아봅니다.",
        resources: [
          {
            name: "메모리 관리 노트북",
            type: "notebook",
            size: "168KB",
            url: "/notebooks/agent_memory.ipynb"
          },
          {
            name: "의사결정 예제 코드",
            type: "code",
            size: "28KB",
            url: "/code/decision_making.py"
          },
          {
            name: "메모리 관리 참조 문서",
            type: "document",
            size: "420KB",
            url: "/docs/memory_management.pdf"
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
                      {agentCourse.author}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      강사
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
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    업로드 날짜
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#fff', fontWeight: 500 }}>
                    {agentCourse.uploadDate}
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    조회수
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#fff', fontWeight: 500 }}>
                    {agentCourse.views}
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
            
            {/* 커뮤니티 카드 */}
            <Paper sx={{ 
              bgcolor: 'rgba(15, 15, 15, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 215, 0, 0.1)',
              borderRadius: '12px',
              overflow: 'hidden'
            }}>
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ color: '#FFD700', mb: 2, fontWeight: 600 }}>
                  커뮤니티
                </Typography>
                
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 3 }}>
                  질문이 있으신가요? 다른 수강생들과 함께 토론하고 도움을 받아보세요.
                </Typography>
                
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<MdOutlineChat />}
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.2)',
                    },
                    py: 1
                  }}
                >
                  토론방 입장하기
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