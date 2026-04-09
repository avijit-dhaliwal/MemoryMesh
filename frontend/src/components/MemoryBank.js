import React from 'react';
import { Typography, Container } from '@mui/material';

function MemoryBank() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Memory Bank
      </Typography>
      <Typography variant="body1">
        This is where stored memories will be displayed and managed.
      </Typography>
    </Container>
  );
}

export default MemoryBank;