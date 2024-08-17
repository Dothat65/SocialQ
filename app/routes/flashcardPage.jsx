import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const FlashcardPage = () => {
  const [prompt, setPrompt] = useState('');
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerateFlashcard = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/generate-flashcard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate flashcard');
      }

      const data = await response.json();
      const newFlashcard = {
        front: data.front,
        back: data.back,
        flipped: false,
      };
      setFlashcards([...flashcards, newFlashcard]);
      setPrompt('');
    } catch (error) {
      console.error('Error generating flashcard:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFlip = (index) => {
    setFlashcards(flashcards.map((flashcard, i) =>
      i === index ? { ...flashcard, flipped: !flashcard.flipped } : flashcard
    ));
  };

  const handleReset = () => {
    setFlashcards([]);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>SocialQ Flashcard Generator</Typography>
      <TextField
        fullWidth
        variant="outlined"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter the context for your flashcard"
        sx={{ mb: 2 }}
      />
      <Button onClick={handleGenerateFlashcard} variant="contained" color="primary" disabled={loading}>
        {loading ? 'Generating...' : 'Generate Flashcard'}
      </Button>
      <Button onClick={handleReset} variant="outlined" color="secondary" sx={{ ml: 2 }}>
        Reset All
      </Button>

      {flashcards.map((flashcard, index) => (
        <div key={index} onClick={() => handleFlip(index)}>
          <Typography variant="h6">{flashcard.flipped ? flashcard.back : flashcard.front}</Typography>
        </div>
      ))}
    </Container>
  );
};

export default FlashcardPage;