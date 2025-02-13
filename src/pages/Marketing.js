import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  TextField,
  CircularProgress,
  Chip,
  Card,
  CardContent,
  Tabs,
  Tab,
  IconButton,
  Tooltip
} from '@mui/material';
import { motion } from 'framer-motion';
import { FaYoutube, FaChartLine, FaRobot, FaLinkedin, FaTwitter, FaInstagram, FaSearch, FaCopy, FaDownload } from 'react-icons/fa';
import { MdTrendingUp, MdAnalytics, MdContentCopy, MdEmail, MdBusiness, MdCampaign } from 'react-icons/md';

const MarketingService = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [contentType, setContentType] = useState('');
  const [generatedContent, setGeneratedContent] = useState(null);

  // 데모 데이터
  const demoAnalysis = {
    title: "10분만에 끝내는 주식투자 핵심 팁",
    metrics: {
      views: "283,421",
      likes: "15,234",
      comments: "1,234",
      engagement: "8.2%"
    },
    trends: [
      "투자 교육",
      "주식 초보",
      "재테크",
      "경제 교육"
    ],
    insights: [
      {
        title: "콘텐츠 최적화",
        points: [
          "영상 길이(10분)가 시청자 이탈률 감소에 효과적",
          "섬네일의 텍스트 가독성이 높아 CTR 상승",
          "초반 15초 인트로가 시청자 집중도 향상에 기여"
        ]
      },
      {
        title: "키워드 분석",
        points: [
          "'주식초보', '주식공부' 키워드 검색량 증가 추세",
          "관련 동영상 추천 노출 빈도 상위 20% 기록",
          "댓글 참여도가 유사 콘텐츠 대비 32% 높음"
        ]
      },
      {
        title: "시청자 행동 패턴",
        points: [
          "주요 시청 시간대: 저녁 8시-11시",
          "모바일 시청 비중: 76%",
          "영상 내 중요 포인트 타임스탬프 활용도 높음"
        ]
      }
    ],
    recommendations: [
      "시리즈 콘텐츠로 확장하여 구독자 유입 유도",
      "실전 투자 사례 중심의 후속 콘텐츠 제작 추천",
      "주 2회 정기적인 업로드로 구독자 충성도 강화",
      "댓글 피드백을 활용한 Q&A 콘텐츠 제작"
    ]
  };

  const demoLeads = {
    results: [
      {
        name: "김상우",
        position: "마케팅 매니저",
        company: "테크스타트",
        email: "sang.kim@techstart.kr",
        source: "LinkedIn",
        relevance: "92%",
        tags: ["B2B", "SaaS", "마케팅"]
      },
      {
        name: "이지현",
        position: "디지털 마케팅 책임자",
        company: "이노베이션랩",
        email: "jihyun@innovationlab.co.kr",
        source: "회사 웹사이트",
        relevance: "88%",
        tags: ["디지털마케팅", "스타트업"]
      },
      {
        name: "박준서",
        position: "대표이사",
        company: "퓨처테크",
        email: "jspark@futuretech.com",
        source: "Twitter",
        relevance: "85%",
        tags: ["AI", "기술혁신"]
      }
    ],
    summary: {
      totalFound: 127,
      relevanceAbove90: 45,
      topIndustries: ["IT/테크", "금융", "교육"],
      recommendedApproach: "기술 혁신과 효율성 향상에 중점을 둔 B2B 마케팅 접근 추천"
    }
  };

  const demoContent = {
    socialMedia: [
      {
        platform: "LinkedIn",
        content: "혁신적인 AI 기술로 비즈니스 효율성을 높이세요! ConnexionAI의 최신 솔루션으로 업무 자동화와 데이터 기반 의사결정을 실현하세요. #AI #비즈니스혁신 #디지털전환",
        hashtags: ["#AI", "#비즈니스혁신", "#디지털전환", "#업무자동화"],
        bestTime: "화요일 오전 10시",
        engagement: "예상 참여도 85%"
      },
      {
        platform: "Twitter",
        content: "AI로 비즈니스의 미래를 준비하세요 🚀 실시간 데이터 분석, 자동화된 의사결정으로 경쟁력을 높이세요!",
        hashtags: ["#AI솔루션", "#비즈니스자동화", "#미래기술"],
        bestTime: "평일 오후 2시",
        engagement: "예상 참여도 78%"
      }
    ],
    emailTemplate: {
      subject: "AI 솔루션으로 비즈니스 효율성을 높이세요",
      body: "안녕하세요, [이름]님\n\n귀사의 디지털 혁신을 위한 최적의 솔루션을 소개드립니다...",
      callToAction: "무료 상담 신청하기",
      expectedOpenRate: "32%"
    }
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleAnalyze = () => {
    setLoading(true);
    setTimeout(() => {
      setAnalysis(demoAnalysis);
      setLoading(false);
    }, 2000);
  };

  const handleLeadSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setSearchResults(demoLeads);
      setLoading(false);
    }, 2000);
  };

  const handleContentGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setGeneratedContent(demoContent);
      setLoading(false);
    }, 2000);
  };

  const ServiceSection = ({ title, description, icon, children }) => (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        mb: 4,
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        {icon} {title}
      </Typography>
      <Typography
        sx={{
          mb: 4,
          color: 'rgba(255, 255, 255, 0.7)'
        }}
      >
        {description}
      </Typography>
      {children}
    </Paper>
  );

  const LeadSearchSection = () => (
    <ServiceSection
      title="AI 잠재 고객 발굴"
      description="AI가 분석한 최적의 잠재 고객을 찾아드립니다."
      icon={<FaSearch />}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="찾고 계신 고객층을 설명해주세요 (예: B2B SaaS 기업 마케팅 담당자)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'white',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#4CAF50',
                },
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleLeadSearch}
            disabled={loading}
            sx={{
              py: 2,
              background: 'linear-gradient(45deg, #4CAF50, #81C784)',
              '&:hover': {
                background: 'linear-gradient(45deg, #81C784, #4CAF50)',
              },
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : '잠재 고객 찾기'}
          </Button>
        </Grid>
      </Grid>

      {searchResults && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                <Typography variant="h6" sx={{ mb: 3, color: 'white' }}>
                  검색 결과 ({searchResults.results.length})
                </Typography>
                <Grid container spacing={2}>
                  {searchResults.results.map((lead, index) => (
                    <Grid item xs={12} key={index}>
                      <Card
                        sx={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          borderRadius: '15px',
                          border: '1px solid rgba(255, 255, 255, 0.05)'
                        }}
                      >
                        <CardContent>
                          <Grid container alignItems="center" spacing={2}>
                            <Grid item xs={12} md={6}>
                              <Typography variant="subtitle1" sx={{ color: '#4CAF50' }}>
                                {lead.name}
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                {lead.position} at {lead.company}
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                {lead.tags.map((tag, idx) => (
                                  <Chip
                                    key={idx}
                                    label={tag}
                                    size="small"
                                    sx={{
                                      background: 'rgba(76, 175, 80, 0.1)',
                                      color: '#4CAF50',
                                    }}
                                  />
                                ))}
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={2}>
                              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                                <Tooltip title="이메일 복사">
                                  <IconButton
                                    size="small"
                                    sx={{ color: '#4CAF50' }}
                                    onClick={() => navigator.clipboard.writeText(lead.email)}
                                  >
                                    <MdContentCopy />
                                  </IconButton>
                                </Tooltip>
                                <Chip
                                  label={lead.relevance}
                                  size="small"
                                  sx={{
                                    background: 'rgba(76, 175, 80, 0.1)',
                                    color: '#4CAF50',
                                  }}
                                />
                              </Box>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '15px',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 3, color: 'white' }}>
                    분석 요약
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 1 }}>
                      총 발견된 잠재 고객
                    </Typography>
                    <Typography variant="h4" sx={{ color: '#4CAF50' }}>
                      {searchResults.summary.totalFound}
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 1 }}>
                      주요 산업군
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {searchResults.summary.topIndustries.map((industry, idx) => (
                        <Chip
                          key={idx}
                          label={industry}
                          size="small"
                          sx={{
                            background: 'rgba(76, 175, 80, 0.1)',
                            color: '#4CAF50',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                  <Box sx={{ mt: 3 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<FaDownload />}
                      sx={{
                        background: 'linear-gradient(45deg, #4CAF50, #81C784)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #81C784, #4CAF50)',
                        },
                      }}
                    >
                      전체 리스트 다운로드
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      )}
    </ServiceSection>
  );

  const ContentGenerationSection = () => (
    <ServiceSection
      title="AI 콘텐츠 생성"
      description="타겟에 최적화된 마케팅 콘텐츠를 생성합니다."
      icon={<MdCampaign />}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="홍보하고 싶은 제품이나 서비스에 대해 설명해주세요."
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'white',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#2196F3',
                },
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleContentGenerate}
            disabled={loading}
            sx={{
              py: 2,
              background: 'linear-gradient(45deg, #2196F3, #64B5F6)',
              '&:hover': {
                background: 'linear-gradient(45deg, #64B5F6, #2196F3)',
              },
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : '콘텐츠 생성하기'}
          </Button>
        </Grid>
      </Grid>

      {generatedContent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={4}>
              {generatedContent.socialMedia.map((platform, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card
                    sx={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '15px',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                        <Typography variant="h6" sx={{ color: '#2196F3' }}>
                          {platform.platform}
                        </Typography>
                        <IconButton
                          size="small"
                          sx={{ color: '#2196F3' }}
                          onClick={() => navigator.clipboard.writeText(platform.content)}
                        >
                          <FaCopy />
                        </IconButton>
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          mb: 2
                        }}
                      >
                        {platform.content}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                        {platform.hashtags.map((tag, idx) => (
                          <Chip
                            key={idx}
                            label={tag}
                            size="small"
                            sx={{
                              background: 'rgba(33, 150, 243, 0.1)',
                              color: '#2196F3',
                            }}
                          />
                        ))}
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontSize: '0.875rem'
                        }}
                      >
                        <span>{platform.bestTime}</span>
                        <span>{platform.engagement}</span>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
              <Grid item xs={12}>
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '15px',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Typography variant="h6" sx={{ color: '#2196F3' }}>
                        이메일 템플릿
                      </Typography>
                      <IconButton
                        size="small"
                        sx={{ color: '#2196F3' }}
                        onClick={() => navigator.clipboard.writeText(generatedContent.emailTemplate.body)}
                      >
                        <FaCopy />
                      </IconButton>
                    </Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: '#2196F3',
                        mb: 1
                      }}
                    >
                      제목: {generatedContent.emailTemplate.subject}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        mb: 2,
                        whiteSpace: 'pre-line'
                      }}
                    >
                      {generatedContent.emailTemplate.body}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.875rem'
                      }}
                    >
                      <span>예상 오픈율: {generatedContent.emailTemplate.expectedOpenRate}</span>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      )}
    </ServiceSection>
  );

  return (
    <Box sx={{
      background: 'linear-gradient(to bottom, #000000, #1a1a1a)',
      color: 'white',
      minHeight: '100vh',
      pt: 12,
      pb: 8
    }}>
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
              background: 'linear-gradient(45deg, #2196F3, #4CAF50)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            AI 마케팅 서비스
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 6,
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: 300
            }}
          >
            AI 기술로 최적화된 마케팅 전략을 구현하세요
          </Typography>

          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            sx={{
              mb: 4,
              '& .MuiTabs-indicator': {
                background: 'linear-gradient(45deg, #2196F3, #4CAF50)',
              },
              '& .MuiTab-root': {
                color: 'rgba(255, 255, 255, 0.7)',
                '&.Mui-selected': {
                  color: 'white',
                },
              },
            }}
          >
            <Tab icon={<FaYoutube />} label="YouTube 분석" />
            <Tab icon={<FaSearch />} label="잠재 고객 발굴" />
            <Tab icon={<MdCampaign />} label="콘텐츠 생성" />
          </Tabs>

          {activeTab === 0 && (
            <ServiceSection
              title="YouTube 트렌드 분석"
              description="AI가 분석하는 YouTube 트렌드와 콘텐츠 최적화 전략"
              icon={<FaYoutube />}
            >
              {/* 기존 YouTube 분석 컴포넌트 내용 */}
            </ServiceSection>
          )}
          {activeTab === 1 && <LeadSearchSection />}
          {activeTab === 2 && <ContentGenerationSection />}
        </motion.div>
      </Container>
    </Box>
  );
};

export default MarketingService; 