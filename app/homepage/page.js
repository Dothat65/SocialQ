"use client"
import React, { useState } from 'react';
import { Box, Container, Typography, IconButton, Grid, Paper, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FlashcardModal from '../homepage/modal';
import { getAuth } from "firebase/auth";
import Flashcard from '../components/Flashcard';
const cleanFlashcardText = (text) => {
  return text.replace(/(\*\*Front:\*\*|\*\*Back:\*\*)/gi, '').trim();
};

export default function Homepage() {
  const [user, setUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [flashcards, setFlashcards] = useState([]);
  const [newFlashcard, setNewFlashcard] = useState({ front: '', back: '' });

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

  const handleAddFlashcard = () => {
    setFlashcards([...flashcards, newFlashcard]);
    setNewFlashcard({ front: '', back: '' });
  };

  const handleRemoveFlashcard = () => {
    if (flashcards.length > 0) {
      setFlashcards(flashcards.slice(0, -1));
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
          <Typography variant="h4">Aaron Don</Typography>
        </Box>

        {/* Flashcards Display */}
        {flashcards.length > 0 && (
          <Box sx={{ mt: 5 }}>
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
        <Button onClick={handleAddFlashcard} variant="contained" sx={{ mx: 1 }}>
          Add New Flashcard
        </Button>
        <Button onClick={handleRemoveFlashcard} variant="outlined" sx={{ mx: 1 }}>
          Remove Flashcard
        </Button>
        <IconButton>
          <PersonIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
