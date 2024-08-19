'use client';
import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, IconButton, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
<<<<<<< HEAD
import React from 'react';
=======
import FlashcardModal from '../homepage/modal';
import Flashcard from '../dashboard/Flashcard';

const cleanFlashcardText = (text) => {
  return text.replace(/(\*\*Front:\*\*|\*\*Back:\*\*)/gi, '').trim();
};
>>>>>>> 8c60c473a5fdbe061a794af93a1171052a0ea95a

export default function Homepage() {
  const [openModal, setOpenModal] = useState(false);
  const [flashcards, setFlashcards] = useState([]);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const generateFlashcards = async (prompt) => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, count: 5 }), 
      });

      const data = await response.json();
      console.log('API Response:', data);

      if (!data.flashcards || !Array.isArray(data.flashcards)) {
        throw new Error('Invalid flashcards data received');
      }

      const uniqueFlashcards = data.flashcards.filter((flashcard, index, self) =>
        index === self.findIndex(f => f.front === flashcard.front && f.back === flashcard.back)
      ).map(flashcard => ({
        front: cleanFlashcardText(flashcard.front),
        back: cleanFlashcardText(flashcard.back)
      }));

      setFlashcards(uniqueFlashcards);
    } catch (error) {
      console.error('Error generating flashcards:', error);
    }
  };

  return (
    <Box sx={{ bgcolor: 'white', minHeight: '100vh', padding: 2 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: '#11144c',
            color: '#f4fffd',
            borderRadius: 2,
            padding: 3,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4,
          }}
        >
          <Box>
            <Typography variant="h4">Aaron Don</Typography>
          </Box>
          <Box>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Paper sx={{ p: 2, borderRadius: 2 }}>
                  <FlashOnIcon sx={{ color: '#11144c' }} />
                  <Typography variant="h6" align="center">
                    37
                  </Typography>
                  <Typography variant="body2" align="center">
                    Flashcards Added
                  </Typography>
                </Paper>
              </Grid>
              <Grid item>
                <Paper sx={{ p: 2, borderRadius: 2 }}>
                  <AccessTimeIcon sx={{ color: '#11144c' }} />
                  <Typography variant="h6" align="center">
                    122+
                  </Typography>
                  <Typography variant="body2" align="center">
                    Hours Spent
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* Search Flashcards */}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
              <Typography variant="h6">Search Flashcards</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Use our AI tool to generate your own prompts, questions, and more for you to be entertained by...
              </Typography>
              <TextField
                fullWidth
                placeholder="Search Here"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Paper>
          </Grid>

          {/* Daily Time Spent */}
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
              <Typography variant="h6">6 hrs, 16 Mins</Typography>
              <Typography variant="body2">Today</Typography>
              <Box sx={{ mt: 2 }}>
                {/* Bar Chart Placeholder */}
                <Box sx={{ height: 100, backgroundColor: '#f4f4f4', borderRadius: 2 }}></Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Flashcard Categories */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" align="center" gutterBottom>
            Flashcard Categories
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {['Science', 'Computer', 'Mathematics', 'Literature', 'Language', 'Business'].map((category) => (
              <Grid item key={category}>
                <Paper
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    boxShadow: 3,
                    textAlign: 'center',
                    minWidth: 100,
                  }}
                >
                  <Typography variant="body1" align="center">
                    {category}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Flashcards Display */}
        {flashcards.length > 0 && (
          <Box sx={{ mt: 5 }}>
            <Typography variant="h5" align="center" gutterBottom>
              Generated Flashcards
            </Typography>
            <Flashcard flashcardsData={flashcards} />
          </Box>
        )}
      </Container>

      {/* Flashcard Generation Modal */}
      <FlashcardModal
        open={openModal}
        handleClose={handleCloseModal}
        generateFlashcards={generateFlashcards}
      />

      {/* Navigation Bar */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: 'white',
          boxShadow: '0 -1px 10px rgba(0, 0, 0, 0.1)',
          padding: 1,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <IconButton>
          <HomeIcon />
        </IconButton>
        <IconButton onClick={handleOpenModal}>
          <AddCircleIcon fontSize="large" sx={{ color: '#11144c' }} />
        </IconButton>
        <IconButton>
          <PersonIcon />
        </IconButton>
      </Box>
    </Box>
  );
}