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
    animation: "slideInRight",
    position: { x: 20, y: 60 },
    sprite: "marketing-sprite"
  },
  product: {
    name: "제품 개발 에이전트",
    icon: <GiBrain size={30} />,
    color: "#2196F3",
    avatar: "/images/product_agent.png",
    background: "linear-gradient(45deg, #2196F3, #64B5F6)",
    description: "제품의 기술적 특장점과 개발 방향을 제시합니다.",
    animation: "slideInLeft",
    position: { x: 60, y: 40 },
    sprite: "product-sprite"
  },
  ceo: {
    name: "CEO 에이전트",
    icon: <MdBusinessCenter size={30} />,
    color: "#9C27B0",
    avatar: "/images/ceo_agent.png",
    background: "linear-gradient(45deg, #9C27B0, #CE93D8)",
    description: "팀의 의견을 종합하여 최종 결정을 내립니다.",
    animation: "slideInTop",
    position: { x: 40, y: 20 },
    sprite: "ceo-sprite"
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

// 타이핑 효과 컴포넌트
const TypedMessage = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30); // 타이핑 속도
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text]);
  
  return <span>{displayText}</span>;
};

// 입력 중... 표시 컴포넌트
const TypingIndicator = () => (
  <div style={{ 
    display: 'flex', 
    gap: '5px', 
    padding: '8px', 
    borderRadius: '8px', 
    background: 'rgba(0,0,0,0.5)',
    width: 'fit-content',
    margin: '10px 0'
  }}>
    <motion.div
      animate={{
        opacity: [0.3, 1, 0.3],
        scale: [0.8, 1, 0.8]
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "loop"
      }}
      style={{ 
        width: '8px', 
        height: '8px', 
        borderRadius: '50%', 
        background: 'white' 
      }}
    />
    <motion.div
      animate={{
        opacity: [0.3, 1, 0.3],
        scale: [0.8, 1, 0.8]
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        delay: 0.2
      }}
      style={{ 
        width: '8px', 
        height: '8px', 
        borderRadius: '50%', 
        background: 'white' 
      }}
    />
    <motion.div
      animate={{
        opacity: [0.3, 1, 0.3],
        scale: [0.8, 1, 0.8]
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        delay: 0.4
      }}
      style={{ 
        width: '8px', 
        height: '8px', 
        borderRadius: '50%', 
        background: 'white' 
      }}
    />
  </div>
);

// 픽셀 아트 캐릭터 컴포넌트
const PixelCharacter = ({ character, isActive, isSpeaking }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: isSpeaking ? [-5, 0, -5] : 0 
      }}
      transition={{ 
        duration: 0.5,
        y: {
          duration: 1,
          repeat: isSpeaking ? Infinity : 0,
          repeatType: "reverse"
        }
      }}
      style={{
        position: 'absolute',
        left: `${character.position.x}%`,
        top: `${character.position.y}%`,
        zIndex: isActive ? 10 : 5,
        filter: isActive ? 'brightness(1)' : 'brightness(0.7)',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{
        width: '80px',
        height: '80px',
        background: character.color,
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '3px solid white',
        boxShadow: isActive ? '0 0 20px rgba(255,255,255,0.5)' : 'none',
        imageRendering: 'pixelated'
      }}>
        {character.icon}
      </div>
      {isActive && (
        <Typography 
          variant="caption" 
          sx={{ 
            position: 'absolute', 
            top: '-25px', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            background: 'rgba(0,0,0,0.7)', 
            padding: '2px 8px', 
            borderRadius: '10px',
            border: '1px solid white',
            color: 'white',
            fontFamily: '"Press Start 2P", cursive',
            fontSize: '8px',
            whiteSpace: 'nowrap'
          }}
        >
          {character.name}
        </Typography>
      )}
      {isSpeaking && (
        <Box sx={{
          position: 'absolute',
          top: '-15px',
          right: '-10px',
          background: 'white',
          borderRadius: '50%',
          width: '20px',
          height: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px solid black',
          fontWeight: 'bold',
          fontFamily: '"Press Start 2P", cursive',
          fontSize: '12px'
        }}>
          !
        </Box>
      )}
    </motion.div>
  );
};

// 게임 배경 컴포넌트
const GameBackground = ({ children }) => {
  return (
    <Box sx={{
      position: 'relative',
      width: '100%',
      height: '500px',
      background: '#2D2D2D',
      backgroundImage: 'linear-gradient(rgba(32, 32, 32, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(32, 32, 32, 0.5) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
      borderRadius: '10px',
      border: '4px solid #333',
      boxShadow: 'inset 0 0 50px rgba(0,0,0,0.5)',
      overflow: 'hidden',
      marginBottom: '20px',
      imageRendering: 'pixelated'
    }}>
      {/* 게임 테이블 */}
      <Box sx={{
        position: 'absolute',
        width: '60%',
        height: '40%',
        bottom: '10%',
        left: '20%',
        background: '#8B4513',
        borderRadius: '8px',
        border: '4px solid #5D2906',
        boxShadow: '0 10px 5px rgba(0,0,0,0.2)',
        '&:before': {
          content: '""',
          position: 'absolute',
          width: '90%',
          height: '10px',
          bottom: '-15px',
          left: '5%',
          background: '#5D2906',
          borderRadius: '5px'
        }
      }}/>
      
      {/* 배경 장식들 */}
      <Box sx={{
        position: 'absolute',
        width: '30px',
        height: '70px',
        top: '10%',
        left: '10%',
        background: '#0A623E',
        borderRadius: '3px',
        '&:before': {
          content: '""',
          position: 'absolute',
          width: '40px',
          height: '30px',
          top: '-15px',
          left: '-5px',
          background: '#0C8651',
          borderRadius: '50%'
        }
      }}/>
      
      <Box sx={{
        position: 'absolute',
        width: '40px',
        height: '60px',
        top: '15%',
        right: '15%',
        background: '#0A623E',
        borderRadius: '3px',
        '&:before': {
          content: '""',
          position: 'absolute',
          width: '50px',
          height: '35px',
          top: '-15px',
          left: '-5px',
          background: '#0C8651',
          borderRadius: '50%'
        }
      }}/>
      
      {/* 컴퓨터 모니터 */}
      <Box sx={{
        position: 'absolute',
        width: '100px',
        height: '80px',
        top: '30%',
        right: '10%',
        background: '#333',
        border: '5px solid #111',
        borderRadius: '5px',
        '&:after': {
          content: '""',
          position: 'absolute',
          width: '30px',
          height: '15px',
          bottom: '-15px',
          left: '35px',
          background: '#111',
          borderRadius: '3px'
        }
      }}>
        <Box sx={{
          width: '90%',
          height: '70px',
          margin: '5px auto',
          background: '#007BFF',
          borderRadius: '2px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '8px',
          fontFamily: '"Press Start 2P", cursive',
          textAlign: 'center'
        }}>
          AI Meeting
        </Box>
      </Box>
      
      {children}
    </Box>
  );
};

// 게임 스타일 대화창 컴포넌트
const GameDialogBox = ({ messages, currentMessage, isTyping, currentAgent }) => {
  const messagesEndRef = useRef(null);
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  
  return (
    <Paper
      elevation={0}
      sx={{ 
        p: 3, 
        background: 'rgba(0,0,0,0.8)',
        border: '4px solid white',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(255,255,255,0.3), inset 0 0 20px rgba(0,0,0,0.5)',
        height: '200px',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '4px'
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(255,255,255,0.3)',
          borderRadius: '4px',
          border: '2px solid rgba(0,0,0,0.2)'
        },
        fontFamily: '"Press Start 2P", cursive',
        fontSize: '10px',
        color: 'white',
        lineHeight: 1.6
      }}
    >
      {messages.map((message, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Typography 
            variant="caption" 
            sx={{ 
              color: message.isUser ? 'yellow' : 
                     CHARACTERS[currentAgent]?.color || 'white',
              fontWeight: 'bold',
              display: 'block',
              mb: 1
            }}
          >
            {message.sender}:
          </Typography>
          <Typography variant="body2" sx={{ pl: 2 }}>
            {message.content}
          </Typography>
        </Box>
      ))}
      
      {currentMessage && (
        <Box sx={{ mb: 2 }}>
          <Typography 
            variant="caption" 
            sx={{ 
              color: CHARACTERS[currentAgent]?.color || 'white',
              fontWeight: 'bold',
              display: 'block',
              mb: 1
            }}
          >
            {CHARACTERS[currentAgent]?.name || 'Agent'}:
          </Typography>
          <Typography variant="body2" sx={{ pl: 2 }}>
            <TypedMessage text={currentMessage} />
          </Typography>
        </Box>
      )}
      
      {isTyping && <TypingIndicator />}
      
      <div ref={messagesEndRef} />
    </Paper>
  );
};

const AIAgents = () => {
  const [userQuery, setUserQuery] = useState('');
  const [messages, setMessages] = useState([]);
  const [currentAgent, setCurrentAgent] = useState(null);
  const [isThinking, setIsThinking] = useState(false);
  const [stage, setStage] = useState(0); // 0: 초기상태, 1: 마케팅, 2: 제품개발, 3: CEO, 4: 결과
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [speakingAgent, setSpeakingAgent] = useState(null);
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

  // 타이핑 효과로 메시지 표시
  const typeMessage = (sender, content, isUser = false) => {
    return new Promise((resolve) => {
      setIsTyping(true);
      setSpeakingAgent(isUser ? null : currentAgent);
      
      // 타이핑 효과를 위해 한 글자씩 표시
      let i = 0;
      const interval = setInterval(() => {
        if (i <= content.length) {
          setCurrentMessage(content.substring(0, i));
          i++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
          setSpeakingAgent(null);
          setCurrentMessage('');
          addMessage(sender, content, isUser);
          resolve();
        }
      }, 30); // 타이핑 속도
    });
  };

  // 단계 진행 - useCallback으로 함수를 메모이제이션
  const proceedToNextStage = useCallback(() => {
    if (stage === 0) {
      // 사용자 질문 제출
      if (!userQuery.trim()) return;
      
      // 사용자 메시지 추가 (타이핑 효과 없이)
      addMessage('사용자', userQuery, true);
      setIsThinking(true);
      setStage(1);
      setCurrentAgent('marketing');
      
      // 마케팅 에이전트 응답 시뮬레이션
      setTimeout(async () => {
        setIsThinking(false);
        
        // 각 응답을 타이핑 효과로 순차적으로 표시
        for (const resp of DEMO_RESPONSES.marketing) {
          await typeMessage(CHARACTERS.marketing.name, resp);
          await new Promise(resolve => setTimeout(resolve, 500)); // 메시지 사이 대기 시간
        }
        
        setStage(2);
        setCurrentAgent('product');
        setIsThinking(true);
      }, 1000);
    } else if (stage === 2) {
      // 제품 개발 에이전트 응답 시뮬레이션
      setTimeout(async () => {
        setIsThinking(false);
        
        for (const resp of DEMO_RESPONSES.product) {
          await typeMessage(CHARACTERS.product.name, resp);
          await new Promise(resolve => setTimeout(resolve, 500));
        }
        
        setStage(3);
        setCurrentAgent('ceo');
        setIsThinking(true);
      }, 1000);
    } else if (stage === 3) {
      // CEO 에이전트 응답 시뮬레이션
      setTimeout(async () => {
        setIsThinking(false);
        
        for (const resp of DEMO_RESPONSES.ceo) {
          await typeMessage(CHARACTERS.ceo.name, resp);
          await new Promise(resolve => setTimeout(resolve, 500));
        }
        
        setStage(4); // 완료
        setCurrentAgent(null);
      }, 1000);
    }
  }, [stage, userQuery]);

  // 처음부터 다시 시작
  const resetSimulation = () => {
    setMessages([]);
    setUserQuery('');
    setStage(0);
    setCurrentAgent(null);
    setIsThinking(false);
    setCurrentMessage('');
    setIsTyping(false);
    setSpeakingAgent(null);
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

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        pt: 12,
        pb: 8,
        background: '#000000',
        color: 'white',
        fontFamily: '"Press Start 2P", cursive',
        backgroundImage: 'radial-gradient(rgba(50, 50, 50, 0.15) 2px, transparent 0)',
        backgroundSize: '30px 30px',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h3"
            sx={{
              mb: 3,
              fontWeight: 700,
              textAlign: 'center',
              fontFamily: '"Press Start 2P", cursive',
              color: 'white',
              textShadow: '0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)',
              fontSize: { xs: '1.5rem', md: '2.5rem' }
            }}
          >
            AI 에이전트 시뮬레이션
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              mb: 6, 
              textAlign: 'center',
              color: 'rgba(255,255,255,0.7)',
              fontFamily: '"Press Start 2P", cursive',
              fontSize: { xs: '0.6rem', md: '0.8rem' }
            }}
          >
            &gt; 기업 의사결정 프로세스를 시뮬레이션합니다 &lt;
          </Typography>

          {/* 게임 화면 */}
          <Box sx={{ mb: 4 }}>
            <GameBackground>
              {/* 캐릭터들 */}
              {Object.entries(CHARACTERS).map(([key, character]) => (
                <PixelCharacter 
                  key={key}
                  character={character}
                  isActive={currentAgent === key}
                  isSpeaking={speakingAgent === key}
                />
              ))}
              
              {/* 중앙 로고 */}
              <Box sx={{
                position: 'absolute',
                top: '45%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'rgba(0,0,0,0.7)',
                padding: '10px 20px',
                borderRadius: '10px',
                border: '2px solid white',
                zIndex: 5,
                textAlign: 'center'
              }}>
                <Typography variant="h6" sx={{ 
                  color: 'white', 
                  fontFamily: '"Press Start 2P", cursive',
                  fontSize: '16px'
                }}>
                  CONNEXION AI
                </Typography>
              </Box>
            </GameBackground>
            
            {/* 대화창 */}
            <GameDialogBox 
              messages={messages} 
              currentMessage={currentMessage}
              isTyping={isTyping}
              currentAgent={currentAgent}
            />
            
            {/* 입력 영역 */}
            <Box sx={{ mt: 4 }}>
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
                          backgroundColor: 'rgba(0,0,0,0.8)',
                          borderRadius: '5px',
                          fontFamily: '"Press Start 2P", cursive',
                          fontSize: '12px',
                          border: '3px solid white',
                          '& fieldset': {
                            border: 'none',
                          },
                          '&:hover fieldset': {
                            border: 'none',
                          },
                          '&.Mui-focused fieldset': {
                            border: 'none',
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
                        background: '#4CAF50',
                        border: '3px solid white',
                        borderRadius: '5px',
                        color: 'white',
                        fontFamily: '"Press Start 2P", cursive',
                        fontSize: '12px',
                        textTransform: 'none',
                        px: 3,
                        '&:hover': {
                          background: '#66BB6A',
                        },
                        '&.Mui-disabled': {
                          background: '#333',
                          color: 'rgba(255,255,255,0.3)',
                          border: '3px solid rgba(255,255,255,0.2)',
                        }
                      }}
                    >
                      {stage === 0 ? 'START' : '진행 중...'}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Box>
          
          {/* 게임 컨트롤 */}
          <Box sx={{ 
            textAlign: 'center', 
            mb: 4,
            display: 'flex',
            justifyContent: 'center',
            gap: 2
          }}>
            <Button
              variant="contained"
              onClick={resetSimulation}
              sx={{
                background: '#333',
                border: '2px solid white',
                borderRadius: '5px',
                color: 'white',
                fontFamily: '"Press Start 2P", cursive',
                fontSize: '10px',
                textTransform: 'none',
                '&:hover': {
                  background: '#555',
                }
              }}
            >
              RESET
            </Button>
            
            {stage === 4 && (
              <Button
                variant="contained"
                onClick={() => {}}
                sx={{
                  background: '#9C27B0',
                  border: '2px solid white',
                  borderRadius: '5px',
                  color: 'white',
                  fontFamily: '"Press Start 2P", cursive',
                  fontSize: '10px',
                  textTransform: 'none',
                  '&:hover': {
                    background: '#BA68C8',
                  }
                }}
              >
                EXPORT RESULTS
              </Button>
            )}
          </Box>
          
          {/* 진행 상태 표시 */}
          <Box sx={{
            width: '100%',
            p: 2,
            background: 'rgba(0,0,0,0.8)',
            border: '2px solid white',
            borderRadius: '5px',
            mb: 4
          }}>
            <Typography variant="caption" sx={{ 
              mb: 1, 
              display: 'block',
              color: 'white',
              fontFamily: '"Press Start 2P", cursive',
              fontSize: '8px'
            }}>
              SIMULATION PROGRESS
            </Typography>
            
            <LinearProgress 
              variant="determinate" 
              value={stage * 25} 
              sx={{ 
                height: 15, 
                borderRadius: 2,
                mb: 1,
                background: '#333',
                border: '1px solid white',
                '& .MuiLinearProgress-bar': {
                  background: stage < 2 ? '#4CAF50' : 
                           stage < 3 ? '#2196F3' : 
                           stage < 4 ? '#9C27B0' : 
                           'linear-gradient(to right, #4CAF50, #2196F3, #9C27B0)',
                }
              }} 
            />
            
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: '"Press Start 2P", cursive',
              fontSize: '8px',
              color: 'rgba(255,255,255,0.7)'
            }}>
              <span>START</span>
              <span>MARKETING</span>
              <span>PRODUCT</span>
              <span>CEO</span>
              <span>COMPLETE</span>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AIAgents; 