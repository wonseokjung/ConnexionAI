import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
            Privacy Policy
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 6,
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: 300
            }}
          >
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </Typography>

          {/* Introduction */}
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
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 2 }}>
              At Connexion AI ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our Instagram auto-comment bot service.
            </Typography>
          </Paper>

          {/* Information Collection */}
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
            <Typography variant="h4" sx={{ color: 'white', mb: 3 }}>
              Information We Collect
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 2 }}>
              Instagram Data
            </Typography>
            <Box component="ul" sx={{ color: 'rgba(255, 255, 255, 0.8)', pl: 4 }}>
              <li>Comment content and metadata</li>
              <li>Post engagement metrics</li>
              <li>Timestamp information</li>
              <li>Public profile information of commenters</li>
            </Box>
          </Paper>

          {/* How We Use Information */}
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
            <Typography variant="h4" sx={{ color: 'white', mb: 3 }}>
              How We Use Your Information
            </Typography>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 2 }}>
              We use the collected information for the following purposes:
            </Typography>
            <Box component="ul" sx={{ color: 'rgba(255, 255, 255, 0.8)', pl: 4 }}>
              <li>Providing automated response services to Instagram comments</li>
              <li>Analyzing comment patterns to improve response accuracy</li>
              <li>Generating engagement metrics and performance reports</li>
              <li>Enhancing the functionality of our auto-comment bot</li>
            </Box>
          </Paper>

          {/* Data Retention */}
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
            <Typography variant="h4" sx={{ color: 'white', mb: 3 }}>
              Data Retention
            </Typography>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              We retain your Instagram comment data for a period of 90 days from the date of collection. After this period, the data is automatically deleted from our systems unless required to be retained for legal compliance purposes.
            </Typography>
          </Paper>

          {/* Third-Party Sharing */}
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
            <Typography variant="h4" sx={{ color: 'white', mb: 3 }}>
              Third-Party Sharing
            </Typography>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 2 }}>
              We do not sell, trade, or otherwise transfer your information to third parties. However, we may share data with trusted service providers who assist us in operating our service, conducting our business, or serving our users, so long as they agree to keep this information confidential.
            </Typography>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 2 }}>
              These service providers may include:
            </Typography>
            <Box component="ul" sx={{ color: 'rgba(255, 255, 255, 0.8)', pl: 4 }}>
              <li>Cloud hosting providers</li>
              <li>Analytics services</li>
              <li>Customer support platforms</li>
            </Box>
          </Paper>

          {/* Contact Information */}
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
            <Typography variant="h4" sx={{ color: 'white', mb: 3 }}>
              Contact Us
            </Typography>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 2 }}>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </Typography>
            <Box sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              <Typography variant="h6" sx={{ mb: 1 }}>Connexion AI</Typography>
              <Typography>Email: wonseokjung@hotmail.com</Typography>
              <Typography>Website: www.connexionai.kr</Typography>
            </Box>
          </Paper>

          {/* Updates to Privacy Policy */}
          <Paper
            elevation={0}
            sx={{
              p: 4,
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <Typography variant="h4" sx={{ color: 'white', mb: 3 }}>
              Updates to This Policy
            </Typography>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify users of any material changes by posting the updated Privacy Policy on our website and updating the "Last updated" date at the top of this policy.
            </Typography>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy; 