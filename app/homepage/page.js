"use client"
import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, IconButton, Button, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FlashcardModal from '../homepage/modal';
import Flashcard from '../components/Flashcard';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '../../firebase'; // Import auth and db from your firebase.js
import { handleCreateFlashcardSet, addflashCards } from '../../lib/firestoreFunctions';
import { doc, collection, getDoc, writeBatch } from 'firebase/firestore';

const cleanFlashcardText = (text) => {
  return text.replace(/(\*\*Front:\*\*|\*\*Back:\*\*)/gi, '').trim();
};

const generateFlashcards = async (prompt, flashcardSetId) => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, count: 10 }), 
    });

    const data = await response.json();

    if (!data.flashcards || !Array.isArray(data.flashcards)) {
      throw new Error('Invalid flashcards data received');
    }

    for (const flashcard of data.flashcards) {
      await addflashCards(flashcardSetId, flashcard);
    }
  } catch (error) {
    console.error('Error generating flashcards:', error);
  }
};

export default function Homepage() {
  const [user, setUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [flashcards, setFlashcards] = useState([]);
  const [newFlashcard, setNewFlashcard] = useState({ front: '', back: '' });
  const [setName, setSetName] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('Auth state changed:', user); // Log user
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User logged out');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleGenerateFlashcards = async (prompt, flashcardSetName) => {
    if (!user) {
      console.error('No user is logged in');
      return;
    }

    try {
      // Create a flashcard set and get its ID
      const flashcardSetId = await handleCreateFlashcardSet(user.uid, flashcardSetName);
      
      // Generate flashcards with the prompt
      await generateFlashcards(prompt, flashcardSetId);
    } catch (error) {
      console.error('Error generating flashcards:', error);
    }
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleAddFlashcard = () => {
    setFlashcards([...flashcards, newFlashcard]);
    setNewFlashcard({ front: '', back: '' });
  };

  const handleRemoveFlashcard = () => {
    if (flashcards.length > 0) {
      setFlashcards(flashcards.slice(0, -1));
    }
  };

  const saveFlashcards = async () => {
    if (!setName.trim()) {
        alert('Please enter a name for your flashcard set.');
        return;
    }

    try {
        const flashcardSetId = await handleCreateFlashcardSet(user.uid, setName);
        for (const flashcard of flashcards) {
            await addflashCards(flashcardSetId, flashcard);
        }
        alert('Flashcards saved successfully!');
        handleCloseModal();
        setSetName('');
    } catch (error) {
        console.error('Error saving flashcards:', error);
        alert('An error occurred while saving flashcards. Please try again.');
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
          <Typography variant="h4">Welcome, {user ? user.displayName || 'to SocialQ!': ''}</Typography>
          {user && (
            <Button onClick={handleLogout} variant="outlined">
              Logout
            </Button>
          )}
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
        generateFlashcards={handleGenerateFlashcards} // Pass the correct function
        setFlashcardSetName={setSetName} // Pass the setFlashcardSetName function
        user={user}
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
        <TextField
          label="Set Name"
          value={setName}
          onChange={(e) => setSetName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button onClick={saveFlashcards} variant="contained" sx={{ mx: 1 }}>
          Save Flashcards
        </Button>
        <IconButton>
          <PersonIcon />
        </IconButton>
      </Box>
    </Box>
  );
}