import React, { useState } from 'react';
import { Box, Button, Modal, TextField, Typography, CircularProgress } from '@mui/material';
import { handleCreateFlashcardSet, addflashCards } from '../../lib/firestoreFunctions';
const FlashcardModal = ({ open, handleClose, generateFlashcards, setFlashcardSetName, user }) => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [flashcardSetNameInput, setFlashcardSetNameInput] = useState('');

  const handleGenerate = async () => {
    if (prompt && flashcardSetNameInput) {
      setLoading(true);
      try {
        // Create the flashcard set and get its ID
        const flashcardSetId = await handleCreateFlashcardSet(user.uid, flashcardSetNameInput);

        // Generate flashcards with the prompt and flashcard set ID
        await generateFlashcards(prompt, flashcardSetId);

        setFlashcardSetName(flashcardSetNameInput);
        console.log('flashcardSetNameInput:', flashcardSetNameInput);
      } catch (error) {
        console.error('Error generating flashcards:', error);
      } finally {
        setLoading(false);
        setPrompt('');
        setFlashcardSetNameInput('');
        handleClose();
      }
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Generate Flashcards
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter flashcard set name..."
          value={flashcardSetNameInput}
          onChange={(e) => setFlashcardSetNameInput(e.target.value)}
          sx={{ mb: 3 }}
        />
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter your prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          multiline
          rows={4}
          sx={{ mb: 3 }}
        />
        <Button
          variant="contained"
          onClick={handleGenerate}
          disabled={!prompt || !flashcardSetNameInput || loading}
          startIcon={loading && <CircularProgress size={20} />}
        >
          {loading ? 'Loading...' : 'Generate Flashcards'}
        </Button>
      </Box>
    </Modal>
  );
};

export default FlashcardModal;
