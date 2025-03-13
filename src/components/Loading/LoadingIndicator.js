import React from 'react';
import { Box, Typography, CircularProgress, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const LoadingIndicator = ({ message, fullScreen = false }) => {
  const theme = useTheme();

  // Animation variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Dots animation
  const dotsVariants = {
    initial: { 
      opacity: 0.2,
      y: 0
    },
    animate: index => ({
      opacity: 1,
      y: [0, -10, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: 'loop',
        delay: index * 0.2
      }
    })
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: fullScreen ? '100vw' : '100%',
        height: fullScreen ? '100vh' : '300px',
        position: fullScreen ? 'fixed' : 'relative',
        top: fullScreen ? 0 : 'auto',
        left: fullScreen ? 0 : 'auto',
        zIndex: fullScreen ? 9999 : 1,
        background: fullScreen ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: fullScreen ? 'blur(5px)' : 'none',
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={itemVariants}>
          <Box
            sx={{
              position: 'relative',
              width: 80,
              height: 80,
              mb: 3,
            }}
          >
            <CircularProgress
              size={80}
              thickness={3}
              sx={{
                color: theme.palette.primary.main,
                position: 'absolute',
              }}
            />
            <CircularProgress
              size={80}
              thickness={3}
              variant="determinate"
              value={100}
              sx={{
                color: theme.palette.grey[200],
                position: 'absolute',
              }}
            />
          </Box>
        </motion.div>

        {message && (
          <motion.div variants={itemVariants}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                textAlign: 'center',
                mb: 1,
                color: theme.palette.text.primary,
              }}
            >
              {message}
            </Typography>
          </motion.div>
        )}

        <motion.div variants={itemVariants}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                custom={i}
                variants={dotsVariants}
                initial="initial"
                animate="animate"
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: theme.palette.primary.main,
                    mx: 0.5,
                  }}
                />
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default LoadingIndicator; 