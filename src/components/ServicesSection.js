import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button,
  useTheme,
  useMediaQuery,
  Chip
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBrain, FaChalkboardTeacher, FaRobot, FaCode, FaGraduationCap, FaLaptopCode, FaBookReader, FaUsers } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description, delay, onClick }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: delay }}
      style={{ height: '100%' }}
    >
      <Card
        sx={{
          height: '100%',
          borderRadius: '16px',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
            '& .service-icon': {
              transform: 'scale(1.1) rotate(5deg)',
              color: theme.palette.primary.main,
            },
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '5px',
            background: theme.palette.gradient.primary,
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
          },
        }}
      >
        <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box
            className="service-icon"
            sx={{
              fontSize: '3rem',
              color: theme.palette.primary.main,
              mb: 3,
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
              borderRadius: '20px',
              background: theme.palette.education.light,
              mx: 'auto',
            }}
          >
            {icon}
          </Box>
          
          <Typography 
            variant="h5" 
            component="h3" 
            gutterBottom
            sx={{ 
              textAlign: 'center',
              fontWeight: 600,
              mb: 2
            }}
          >
            {title}
          </Typography>
          
          <Typography 
            sx={{ 
              mb: 3, 
              textAlign: 'center',
              color: 'text.secondary',
              lineHeight: 1.7,
              flex: 1
            }}
          >
            {description}
          </Typography>
          
          <Button
            variant="outlined"
            color="primary"
            sx={{
              borderRadius: '30px',
              mt: 'auto',
              textTransform: 'none',
              '&:hover': {
                background: 'rgba(59, 130, 246, 0.1)',
              }
            }}
            onClick={onClick}
          >
            자세히 보기
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ServicesSection = ({ onServiceClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <FaLaptopCode size={40} />,
      title: "AI 개발 클래스",
      description: "실무 중심의 AI 개발 교육을 제공합니다. 프로젝트 기반의 학습으로 실제 개발 환경에서 활용 가능한 스킬을 습득합니다.",
    },
    {
      icon: <FaChalkboardTeacher size={40} />,
      title: "맞춤형 교육 과정",
      description: "개인의 수준과 목표에 맞는 맞춤형 교육을 제공합니다. 입문자부터 전문가까지 단계별로 성장할 수 있는 체계적인 커리큘럼을 제공합니다.",
    },
    {
      icon: <FaBookReader size={40} />,
      title: "AI 학습 자료",
      description: "최신 AI 기술과 트렌드에 관한 고품질 학습 자료를 제공합니다. 이론부터 실습까지 체계적으로 정리된 자료로 자기주도 학습을 지원합니다.",
    },
    {
      icon: <FaUsers size={40} />,
      title: "AI 커뮤니티",
      description: "비슷한 관심사를 가진 학습자들과 함께 성장할 수 있는 커뮤니티입니다. 질문, 토론, 프로젝트 협업 등 다양한 방식으로 상호작용할 수 있습니다.",
    }
  ];

  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip 
              label="교육 프로그램" 
              color="primary" 
              variant="filled" 
              sx={{ mb: 2, fontSize: '0.85rem', fontWeight: 500 }}
            />
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom
              sx={{ 
                fontWeight: 700,
                mb: 3
              }}
            >
              AI 교육 프로그램
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                maxWidth: '800px', 
                mx: 'auto',
                color: 'text.secondary',
                fontSize: '1.1rem',
                lineHeight: 1.7
              }}
            >
              Connect AI LAB은 다양한 AI 교육 프로그램을 통해 누구나 인공지능 기술을 배우고
              활용할 수 있도록 돕습니다. 실무 중심의 커리큘럼으로 AI 개발 역량을 키워보세요.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.2}
                onClick={() => onServiceClick && onServiceClick(service)}
              />
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                borderRadius: '30px',
                px: 5,
                py: 1.5,
                background: theme.palette.gradient.primary,
                '&:hover': {
                  background: theme.palette.gradient.primary,
                  transform: 'translateY(-3px)',
                  boxShadow: '0 7px 14px rgba(59, 130, 246, 0.3)',
                },
                transition: 'all 0.3s ease',
              }}
              onClick={() => onServiceClick && onServiceClick('all')}
            >
              모든 클래스 보기
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection; 