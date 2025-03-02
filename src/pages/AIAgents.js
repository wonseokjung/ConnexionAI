import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  TextField,
  Avatar,
  Chip,
  Card,
  CardContent,
  LinearProgress,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaChartLine } from 'react-icons/fa';
import { GiBrain } from "react-icons/gi";
import { MdBusinessCenter, MdCelebration } from 'react-icons/md';

// 캐릭터 정의
const CHARACTERS = {
  marketing: {
    name: "마케팅 에이전트",
    icon: <FaChartLine size={30} />,
    color: "#4CAF50",
    avatar: "/images/marketing_agent.png",
    background: "linear-gradient(45deg, #4CAF50, #81C784)",
    description: "마케팅 전략 수립과 홍보 아이디어 제시를 담당합니다.",
    animation: "slideInRight"
  },
  product: {
    name: "제품 개발 에이전트",
    icon: <GiBrain size={30} />,
    color: "#2196F3",
    avatar: "/images/product_agent.png",
    background: "linear-gradient(45deg, #2196F3, #64B5F6)",
    description: "제품의 기술적 특장점과 개발 방향을 제시합니다.",
    animation: "slideInLeft"
  },
  ceo: {
    name: "CEO 에이전트",
    icon: <MdBusinessCenter size={30} />,
    color: "#9C27B0",
    avatar: "/images/ceo_agent.png",
    background: "linear-gradient(45deg, #9C27B0, #CE93D8)",
    description: "팀의 의견을 종합하여 최종 결정을 내립니다.",
    animation: "slideInTop"
  }
};

// 데모용 메시지 - 실제로는 API에서 받아와야 함
const DEMO_RESPONSES = {
  marketing: [
    "스마트컵의 '온도에 따라 색상이 변하는' 기능을 활용한 SNS 챌린지를 시작해보면 어떨까요?",
    "사용자가 컵에 담긴 음료의 온도에 따라 변하는 색상을 공유하고 #스마트컵챌린지 해시태그를 달아 공유하도록 유도합니다.",
    "또한, 건강관리 기능을 강조해 '하루 물 섭취량 목표 달성' 캠페인도 진행할 수 있습니다.",
    "제품 언박싱 경험을 특별하게 만들어, 소비자들이 자발적으로 SNS에 공유하도록 패키징을 디자인하는 것도 좋겠습니다."
  ],
  product: [
    "스마트컵은 온도 감지 센서와 연동된 특수 코팅 기술을 사용해 음료 온도에 따라 색상이 변합니다.",
    "블루투스 연결을 통해 전용 앱과 연동되어 물 섭취량을 자동으로 기록하고 개인별 수분 섭취 목표를 관리합니다.",
    "충전식 배터리는 한 번 충전으로 최대 2주간 사용 가능하며, IP67 등급의 방수 기능을 갖추고 있습니다.",
    "머신러닝 알고리즘을 통해 사용자의 음료 섭취 패턴을 분석하고 건강한 습관을 위한 맞춤형 조언을 제공합니다."
  ],
  ceo: [
    "두 팀의 제안을 종합해 볼 때, SNS 챌린지를 중심으로 한 마케팅 전략이 제품의 기술적 특장점을 효과적으로 보여줄 수 있을 것 같습니다.",
    "특히 온도 변화에 따른 색상 변화와 건강관리 기능은 우리 제품의 핵심 차별점입니다.",
    "마케팅 예산의 60%를 인플루언서 협업과 SNS 캠페인에 투자하고, 나머지 40%는 제품의 기술력을 강조하는 교육용 콘텐츠 제작에 사용하는 것이 좋겠습니다.",
    "출시 일정은 다가오는 여름 시즌을 겨냥해 5월 중순으로 확정하겠습니다. 모두 준비 부탁드립니다."
  ]
};

const AIAgents = () => {
  const [userQuery, setUserQuery] = useState('');
  const [messages, setMessages] = useState([]);
  const [currentAgent, setCurrentAgent] = useState(null);
  const [isThinking, setIsThinking] = useState(false);
  const [stage, setStage] = useState(0); // 0: 초기상태, 1: 마케팅, 2: 제품개발, 3: CEO, 4: 결과
  const messagesEndRef = useRef(null);

  // 새 메시지 추가
  const addMessage = (sender, content, isUser = false) => {
    const newMessage = {
      id: Date.now(),
      sender,
      content,
      isUser,
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  // 단계 진행 - useCallback으로 함수를 메모이제이션
  const proceedToNextStage = useCallback(() => {
    if (stage === 0) {
      // 사용자 질문 제출
      if (!userQuery.trim()) return;
      addMessage('사용자', userQuery, true);
      setIsThinking(true);
      setStage(1);
      setCurrentAgent('marketing');
      
      // 마케팅 에이전트 응답 시뮬레이션
      setTimeout(() => {
        setIsThinking(false);
        DEMO_RESPONSES.marketing.forEach((resp, idx) => {
          setTimeout(() => {
            addMessage(CHARACTERS.marketing.name, resp);
            if (idx === DEMO_RESPONSES.marketing.length - 1) {
              setStage(2);
              setCurrentAgent('product');
              setIsThinking(true);
            }
          }, idx * 1000);
        });
      }, 2000);
    } else if (stage === 2) {
      // 제품 개발 에이전트 응답 시뮬레이션
      setTimeout(() => {
        setIsThinking(false);
        DEMO_RESPONSES.product.forEach((resp, idx) => {
          setTimeout(() => {
            addMessage(CHARACTERS.product.name, resp);
            if (idx === DEMO_RESPONSES.product.length - 1) {
              setStage(3);
              setCurrentAgent('ceo');
              setIsThinking(true);
            }
          }, idx * 1000);
        });
      }, 2000);
    } else if (stage === 3) {
      // CEO 에이전트 응답 시뮬레이션
      setTimeout(() => {
        setIsThinking(false);
        DEMO_RESPONSES.ceo.forEach((resp, idx) => {
          setTimeout(() => {
            addMessage(CHARACTERS.ceo.name, resp);
            if (idx === DEMO_RESPONSES.ceo.length - 1) {
              setStage(4); // 완료
              setCurrentAgent(null);
            }
          }, idx * 1000);
        });
      }, 2000);
    }
  }, [stage, userQuery]);

  // 처음부터 다시 시작
  const resetSimulation = () => {
    setMessages([]);
    setUserQuery('');
    setStage(0);
    setCurrentAgent(null);
    setIsThinking(false);
  };

  // 메시지 자동 스크롤
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // 단계별 자동 진행 (데모용)
  useEffect(() => {
    if (stage > 0 && stage < 4) {
      const timer = setTimeout(() => {
        proceedToNextStage();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [stage, proceedToNextStage]);

  // 현재 활성화된 에이전트 컴포넌트
  const ActiveAgentCard = () => {
    if (!currentAgent) return null;

    const character = CHARACTERS[currentAgent];
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 3,
            background: character.background,
            borderRadius: '16px',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            mb: 4,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Box 
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.1,
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          />
          <motion.div
            animate={{ 
              rotate: isThinking ? [0, 5, 0, -5, 0] : 0 
            }}
            transition={{ 
              repeat: isThinking ? Infinity : 0, 
              duration: 1.5 
            }}
          >
            <Box 
              sx={{ 
                width: 60, 
                height: 60, 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                border: '2px solid rgba(255,255,255,0.3)'
              }}
            >
              {character.icon}
            </Box>
          </motion.div>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {character.name}
            </Typography>
            <Typography variant="body2">
              {character.description}
            </Typography>
            {isThinking && (
              <Box sx={{ mt: 1, width: '100%' }}>
                <LinearProgress color="inherit" sx={{ 
                  height: 6, 
                  borderRadius: 3,
                  '& .MuiLinearProgress-bar': {
                    backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)',
                    backgroundSize: '1rem 1rem',
                    animation: 'progress-bar-stripes 1s linear infinite',
                  },
                  '@keyframes progress-bar-stripes': {
                    '0%': { backgroundPosition: '1rem 0' },
                    '100%': { backgroundPosition: '0 0' }
                  }
                }} />
              </Box>
            )}
          </Box>
        </Paper>
      </motion.div>
    );
  };

  // 메시지 버블 컴포넌트
  const MessageBubble = ({ message }) => {
    const isUser = message.isUser;
    const character = Object.values(CHARACTERS).find(c => c.name === message.sender);
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20, x: isUser ? 20 : -20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
        style={{
          display: 'flex',
          justifyContent: isUser ? 'flex-end' : 'flex-start',
          marginBottom: '16px'
        }}
      >
        <Box sx={{ display: 'flex', maxWidth: '80%', alignItems: 'flex-start', flexDirection: isUser ? 'row-reverse' : 'row' }}>
          {!isUser && character && (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Avatar 
                sx={{ 
                  bgcolor: character.color,
                  mr: isUser ? 0 : 2,
                  ml: isUser ? 2 : 0,
                  width: 48,
                  height: 48,
                  border: `2px solid ${character.color}`,
                  boxShadow: `0 0 10px rgba(0,0,0,0.2)`
                }}
              >
                {character.icon}
              </Avatar>
            </motion.div>
          )}
          
          <Box>
            <Typography 
              variant="caption" 
              sx={{ 
                ml: isUser ? 0 : 1,
                mr: isUser ? 1 : 0,
                color: isUser ? 'rgba(255,255,255,0.7)' : character?.color || 'text.secondary',
                display: 'block',
                mb: 0.5,
                textAlign: isUser ? 'right' : 'left',
                fontWeight: 'bold'
              }}
            >
              {message.sender}
            </Typography>
            
            <Paper
              elevation={3}
              sx={{
                p: 2,
                borderRadius: '12px',
                backgroundColor: isUser ? '#2196F3' : character?.color ? `${character.color}22` : 'background.paper',
                border: isUser ? '1px solid rgba(255,255,255,0.1)' : `1px solid ${character?.color || 'rgba(255,255,255,0.1)'}`,
                color: isUser ? 'white' : 'text.primary',
                borderTopRightRadius: isUser ? 0 : '12px',
                borderTopLeftRadius: isUser ? '12px' : 0,
                position: 'relative',
                '&:before': !isUser ? {
                  content: '""',
                  position: 'absolute',
                  top: 10,
                  left: -8,
                  width: 0,
                  height: 0,
                  borderTop: '8px solid transparent',
                  borderBottom: '8px solid transparent',
                  borderRight: `8px solid ${character?.color ? `${character.color}22` : 'background.paper'}`,
                } : {
                  content: '""',
                  position: 'absolute',
                  top: 10,
                  right: -8,
                  width: 0,
                  height: 0,
                  borderTop: '8px solid transparent',
                  borderBottom: '8px solid transparent',
                  borderLeft: '8px solid #2196F3',
                }
              }}
            >
              <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                {message.content}
              </Typography>
            </Paper>
          </Box>
        </Box>
      </motion.div>
    );
  };

  // 결과 요약 리포트 컴포넌트 추가
  const ResultSummary = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Paper 
        elevation={0}
        sx={{ 
          p: 4, 
          mt: 4,
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 3, 
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #4CAF50, #2196F3, #9C27B0)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          <MdCelebration style={{ marginRight: 8, verticalAlign: 'middle' }} /> 
          시뮬레이션 결과 요약
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box sx={{ 
              p: 3, 
              borderRadius: 2, 
              background: 'rgba(76, 175, 80, 0.1)', 
              border: '1px solid rgba(76, 175, 80, 0.3)',
              height: '100%'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: CHARACTERS.marketing.color, mr: 1 }}>
                  {CHARACTERS.marketing.icon}
                </Avatar>
                <Typography variant="h6" sx={{ color: CHARACTERS.marketing.color }}>
                  마케팅 전략
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Chip 
                  label="SNS 챌린지" 
                  size="small" 
                  sx={{ mr: 1, mb: 1, background: 'rgba(76, 175, 80, 0.2)' }} 
                />
                <Chip 
                  label="온도 변화 컨셉" 
                  size="small" 
                  sx={{ mr: 1, mb: 1, background: 'rgba(76, 175, 80, 0.2)' }} 
                />
                <Chip 
                  label="건강관리 캠페인" 
                  size="small" 
                  sx={{ mr: 1, mb: 1, background: 'rgba(76, 175, 80, 0.2)' }} 
                />
              </Box>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                SNS 챌린지 기반 바이럴 마케팅 전략으로 사용자 참여를 유도하고 제품의 주요 기능을 자연스럽게 홍보
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ 
              p: 3, 
              borderRadius: 2, 
              background: 'rgba(33, 150, 243, 0.1)', 
              border: '1px solid rgba(33, 150, 243, 0.3)',
              height: '100%'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: CHARACTERS.product.color, mr: 1 }}>
                  {CHARACTERS.product.icon}
                </Avatar>
                <Typography variant="h6" sx={{ color: CHARACTERS.product.color }}>
                  제품 기술
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Chip 
                  label="온도 감지 센서" 
                  size="small" 
                  sx={{ mr: 1, mb: 1, background: 'rgba(33, 150, 243, 0.2)' }} 
                />
                <Chip 
                  label="블루투스 연동" 
                  size="small" 
                  sx={{ mr: 1, mb: 1, background: 'rgba(33, 150, 243, 0.2)' }} 
                />
                <Chip 
                  label="AI 분석 알고리즘" 
                  size="small" 
                  sx={{ mr: 1, mb: 1, background: 'rgba(33, 150, 243, 0.2)' }} 
                />
              </Box>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                온도 감지 센서와 앱 연동 기술을 통해 사용자 경험을 향상시키고 건강 데이터 분석으로 차별화
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ 
              p: 3, 
              borderRadius: 2, 
              background: 'rgba(156, 39, 176, 0.1)', 
              border: '1px solid rgba(156, 39, 176, 0.3)',
              height: '100%'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: CHARACTERS.ceo.color, mr: 1 }}>
                  {CHARACTERS.ceo.icon}
                </Avatar>
                <Typography variant="h6" sx={{ color: CHARACTERS.ceo.color }}>
                  최종 결정
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Chip 
                  label="5월 중순 출시" 
                  size="small" 
                  sx={{ mr: 1, mb: 1, background: 'rgba(156, 39, 176, 0.2)' }} 
                />
                <Chip 
                  label="인플루언서 협업" 
                  size="small" 
                  sx={{ mr: 1, mb: 1, background: 'rgba(156, 39, 176, 0.2)' }} 
                />
                <Chip 
                  label="60:40 예산 배분" 
                  size="small" 
                  sx={{ mr: 1, mb: 1, background: 'rgba(156, 39, 176, 0.2)' }} 
                />
              </Box>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                마케팅에 60%, 기술 교육 콘텐츠에 40%의 예산을 배분하고 여름 시즌을 겨냥한 5월 중순 출시 확정
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ 
              p: 3, 
              mt: 2,
              borderRadius: 2, 
              background: 'linear-gradient(to right, rgba(76, 175, 80, 0.1), rgba(33, 150, 243, 0.1), rgba(156, 39, 176, 0.1))', 
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>실행 계획</Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LinearProgress 
                  variant="determinate" 
                  value={100} 
                  sx={{ 
                    height: 10, 
                    borderRadius: 5,
                    flexGrow: 1,
                    mr: 2,
                    background: 'rgba(255,255,255,0.1)',
                    '& .MuiLinearProgress-bar': {
                      background: 'linear-gradient(45deg, #4CAF50, #2196F3, #9C27B0)',
                    }
                  }} 
                />
                <Typography variant="body2" sx={{ color: 'white', minWidth: 100, textAlign: 'right' }}>
                  완료
                </Typography>
              </Box>
              
              <Button
                variant="contained"
                fullWidth
                onClick={() => {}}
                sx={{ 
                  mt: 2,
                  py: 1.5, 
                  background: 'linear-gradient(45deg, #4CAF50, #2196F3, #9C27B0)',
                  fontWeight: 'bold',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #2196F3, #9C27B0, #4CAF50)',
                  }
                }}
              >
                프로젝트 결과 내보내기
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </motion.div>
  );

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        pt: 12,
        pb: 8,
        background: 'linear-gradient(135deg, #000000 0%, #121212 100%)',
        color: 'white'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
              background: 'linear-gradient(45deg, #4CAF50, #2196F3, #9C27B0)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center'
            }}
          >
            AI 에이전트 시뮬레이션
          </Typography>

          <Typography 
            variant="h5" 
            sx={{ 
              mb: 6, 
              textAlign: 'center',
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'monospace'
            }}
          >
            기업 의사결정 시뮬레이션을 AI 에이전트와 함께 체험해보세요
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* 에이전트 카드 섹션 */}
          <Grid item xs={12} md={4}>
            <Paper 
              elevation={0}
              sx={{ 
                p: 3, 
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)',
                height: '100%'
              }}
            >
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold', fontFamily: 'monospace' }}>
                AI 에이전트 팀
              </Typography>
              
              <Grid container spacing={2}>
                {Object.entries(CHARACTERS).map(([key, character]) => (
                  <Grid item xs={12} key={key}>
                    <Card 
                      sx={{ 
                        background: 'rgba(255,255,255,0.03)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                        transition: 'all 0.3s ease',
                        borderLeft: currentAgent === key ? `4px solid ${character.color}` : 'none',
                        transform: currentAgent === key ? 'translateX(8px)' : 'none',
                        '&:hover': {
                          background: 'rgba(255,255,255,0.05)',
                        }
                      }}
                    >
                      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ bgcolor: character.color, width: 48, height: 48 }}>
                          {character.icon}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                            {character.name}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>
                            {character.description}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 4 }}>
                <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.7)' }}>
                  시뮬레이션 진행 상태:
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={stage * 25} 
                  sx={{ 
                    height: 10, 
                    borderRadius: 5,
                    mb: 2,
                    background: 'rgba(255,255,255,0.1)',
                    '& .MuiLinearProgress-bar': {
                      background: 'linear-gradient(45deg, #4CAF50, #2196F3, #9C27B0)',
                    }
                  }} 
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>질문</Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>마케팅</Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>제품</Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>CEO</Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>결과</Typography>
                </Box>
              </Box>

              {stage === 4 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Chip 
                      icon={<MdCelebration />} 
                      label="시뮬레이션 완료!" 
                      color="success" 
                      sx={{ fontSize: '1rem', py: 2, px: 1 }} 
                    />
                    <Button 
                      variant="outlined" 
                      fullWidth 
                      onClick={resetSimulation} 
                      sx={{ mt: 2 }}
                    >
                      새 시뮬레이션 시작
                    </Button>
                  </Box>
                </motion.div>
              )}
            </Paper>
          </Grid>

          {/* 채팅 섹션 */}
          <Grid item xs={12} md={8}>
            <Paper 
              elevation={0}
              sx={{ 
                p: 3, 
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                flexDirection: 'column',
                height: '700px',
              }}
            >
              {/* 현재 활성화된 에이전트 */}
              <AnimatePresence>
                <ActiveAgentCard />
              </AnimatePresence>

              {/* 메시지 영역 */}
              <Box 
                sx={{ 
                  flexGrow: 1, 
                  overflowY: 'auto', 
                  mb: 3,
                  px: 2,
                  scrollbarWidth: 'thin',
                  '&::-webkit-scrollbar': {
                    width: '6px',
                  },
                  '&::-webkit-scrollbar-track': {
                    background: 'rgba(255,255,255,0.05)',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '3px',
                  }
                }}
              >
                {messages.length === 0 && stage === 0 ? (
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <FaRobot size={60} style={{ opacity: 0.3, marginBottom: '20px' }} />
                    <Typography sx={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>
                      스마트컵에 대한 질문이나 마케팅 아이디어를 입력하세요.<br/>
                      마케팅, 제품 개발, CEO 에이전트가 순차적으로 응답합니다.
                    </Typography>
                  </Box>
                ) : (
                  <>
                    {messages.map(message => (
                      <MessageBubble key={message.id} message={message} />
                    ))}
                    <div ref={messagesEndRef} />
                    
                    {/* 결과 리포트 - 모든 메시지 표시 후 렌더링 */}
                    {stage === 4 && messages.length >= 
                      (1 + DEMO_RESPONSES.marketing.length + 
                       DEMO_RESPONSES.product.length + 
                       DEMO_RESPONSES.ceo.length) && (
                      <ResultSummary />
                    )}
                  </>
                )}
              </Box>

              {/* 입력 영역 */}
              <Box>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  proceedToNextStage();
                }}>
                  <Grid container spacing={2}>
                    <Grid item xs>
                      <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="신제품 '스마트컵'에 대한 질문이나 아이디어를 입력하세요"
                        value={userQuery}
                        onChange={(e) => setUserQuery(e.target.value)}
                        disabled={stage !== 0}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: 'white',
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            '& fieldset': {
                              borderColor: 'rgba(255,255,255,0.2)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255,255,255,0.3)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                          }
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        type="submit"
                        disabled={stage !== 0 || !userQuery.trim()}
                        sx={{
                          height: '100%',
                          background: 'linear-gradient(45deg, #4CAF50, #2196F3)',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #2196F3, #4CAF50)',
                          },
                          '&.Mui-disabled': {
                            background: 'rgba(255,255,255,0.1)',
                            color: 'rgba(255,255,255,0.3)',
                          }
                        }}
                      >
                        {stage === 0 ? '시뮬레이션 시작' : '진행 중...'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Paper>

            {/* 단계별 설명 */}
            <Paper 
              elevation={0}
              sx={{ 
                p: 3, 
                mt: 3,
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                {stage === 0 && "신제품 개발 프로세스"}
                {stage === 1 && "마케팅 전략 수립 단계"}
                {stage === 2 && "제품 기술 분석 단계"}
                {stage === 3 && "경영진 의사결정 단계"}
                {stage === 4 && "프로젝트 결과 요약"}
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                {stage === 0 && "AI 에이전트 시뮬레이션은 실제 기업의 신제품 개발 과정을 모방합니다. 마케팅, 제품 개발, CEO 에이전트가 협업하여 최적의 솔루션을 도출합니다."}
                {stage === 1 && "마케팅 에이전트가 제품의 시장 포지셔닝, 타겟 고객, 홍보 전략을 분석하고 있습니다. 각종 시장 데이터와 트렌드를 고려한 전략을 제시합니다."}
                {stage === 2 && "제품 개발 에이전트가 기술적 가능성과 제약, 개발 일정, 비용 등을 고려한 의견을 제시합니다. 마케팅 전략을 기술적으로 뒷받침할 방법을 모색합니다."}
                {stage === 3 && "CEO 에이전트가 마케팅과 제품 개발 의견을 종합하여 최종 결정을 내립니다. 비즈니스 우선순위와 회사 전략에 맞는 방향을 설정합니다."}
                {stage === 4 && "모든 에이전트의 협업 결과가 도출되었습니다. 제시된 전략과 의사결정을 검토하고 실제 비즈니스에 어떻게 적용할지 고려해보세요."}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AIAgents; 