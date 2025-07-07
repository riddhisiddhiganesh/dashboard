import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './component/header';
import Footer from './component/footer';
import About from './pages/about';
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import { CssBaseline, Container, Box, useTheme, useMediaQuery } from '@mui/material';
import Home from './component/home';
import backGroundImg from '../src/assets/backgroundImage2.png'
import mobileImage from '../src/assets/IMG_7374.jpg'

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const imageUrl = isMobile ? mobileImage : backGroundImg;

    return (
        <Box
          display="flex"
          flexDirection="column"
          minHeight="100vh"
          sx={{
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* 🔁 Blurred Background Image */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              // height: '100%',
              height: { xs: '100%', sm: '100vh' },
              // backgroundImage: `url(${backGroundImg})`,
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(2px)', // uncomment for blur effect
            //   opacity: 0.1,
              zIndex: 0,
            }}
          />
       
          {/* 🔳 Content Layer */}
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <CssBaseline />
            <Header />
            
            <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
           
              <Routes>
                <Route path="/dashboard" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Container>
  
            <Footer />
          </Box>
        </Box>
    );
  }
  
  export default App;
