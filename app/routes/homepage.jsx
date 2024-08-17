import { Box, Typography, TextField, Button, Grid, Avatar, Container } from '@mui/material';
import React from 'react';

export default function Home() {
  return (

    //gonna add more functionality to this page for specifc user profile soon
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Avatar
          sx={{ width: 100, height: 100, margin: '0 auto', backgroundColor: '#3f51b5' }}
        >
          AD
        </Avatar>
        <Typography variant="h4" sx={{ mt: 2 }}>Aaron Don</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Typography sx={{ mx: 2, fontWeight: 'bold' }}>37 Flashcards</Typography>
          <Typography sx={{ mx: 2, fontWeight: 'bold' }}>122+ Interactions</Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 4 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search Flashcards"
          sx={{ mb: 4 }}
        />
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>Flashcard Categories</Typography>
        <Grid container spacing={2}>
          {['Science', 'Computer', 'Mathematics', 'Literature', 'Language', 'Business'].map((category) => (
            <Grid item xs={6} sm={4} key={category}>
              <Button
                variant="contained"
                fullWidth
                sx={{ padding: '16px', fontSize: '18px', backgroundColor: '#3f51b5' }}
              >
                {category}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}