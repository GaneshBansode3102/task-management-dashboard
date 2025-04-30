
import React from 'react';
import Board from './components/Board';
import DnDProviderWrapper from './dnd/DnDProviderWrapper';
import { CssBaseline, Container, Box, Typography } from '@mui/material';

const App = () => (
  <DnDProviderWrapper>
    <CssBaseline />
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h3" gutterBottom align="center" color="primary.main">
          Task Management Dashboard
        </Typography>
        <Board />
      </Box>
    </Container>
  </DnDProviderWrapper>
);

export default App;
