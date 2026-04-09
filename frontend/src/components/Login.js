import React from 'react';
import { Typography, Container } from '@mui/material';

function Login() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <Typography variant="body1">
        Login form will be implemented here.
      </Typography>
    </Container>
  );
}

export default Login;