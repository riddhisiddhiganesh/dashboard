import React from 'react';
import { CssBaseline, Container, Box } from '@mui/material';
import Header from './header';
import Footer from './footer';
import bappaImg from '../assets/bappa.jpg'; // <-- Add this import
import { Routes, Route, Router } from 'react-router-dom';
import About from '../pages/about';



function App() {
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
      {/* Blurred background image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${bappaImg})`, // <-- Use // <-- Replace with your image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        //   filter: 'blur(8px)',
          zIndex: 0,
        }}
      />
      {/* Content */}
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
          <h1 style={{ color: 'white' }}>Welcoming Lord Ganesha with joy and devotion</h1>
          <p style={{ color: 'white' }}>Celebrating Culture, Faith & Community Since 1995</p>
        </Container>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
