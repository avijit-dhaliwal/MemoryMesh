import React from 'react';
import { Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to MemoryMesh
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Your AI-Enhanced Personal Memory Bank
      </Typography>
      <Button component={Link} to="/login" variant="contained" color="primary">
        Login
      </Button>
      <Button component={Link} to="/register" variant="outlined" color="primary" style={{ marginLeft: '10px' }}>
        Register
      </Button>
    </Container>
  );
}

export default Home;