"use client";

import React, { useState } from 'react';
import { Box, Button, Typography, IconButton, Container, Card, CardContent, CardActions } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const Flashcard = () => {
  const flashcardsData = [
    { id: 1, front: 'YOOO', back: 'Heyy whats up\nSome description about this card phrase etc' },
    { id: 2, front: 'HELLO', back: 'How are you?\nA typical greeting.' },
    { id: 3, front: 'WHAT\'S UP', back: 'A casual greeting or way to ask what someone is doing.' },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcardsData.length);
    setIsExpanded(false);
  };

  const handlePrevious = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + flashcardsData.length) % flashcardsData.length);
    setIsExpanded(false);
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const currentCard = flashcardsData[currentCardIndex];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <IconButton onClick={handlePrevious}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>Conversational Flashcards</Typography>
        <IconButton onClick={handleNext}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>

      <Box mt={4} display="flex" justifyContent="center">
        <Card sx={{ width: 300, bgcolor: '#11144c', color: '#f4fffd', textAlign: 'center', borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h4">{currentCard.front}</Typography>
            {isExpanded && (
              <Box mt={2}>
                <Typography variant="body1">{currentCard.back.split('\n')[0]}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>{currentCard.back.split('\n')[1]}</Typography>
              </Box>
            )}
          </CardContent>
          <CardActions>
            <IconButton onClick={handleExpand} sx={{ mx: 'auto', bgcolor: '#f4fffd', borderRadius: 2 }}>
              {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </CardActions>
        </Card>
      </Box>

      <Typography variant="body2" align="center" sx={{ mt: 4 }}>{currentCardIndex + 1} / {flashcardsData.length}</Typography>
      <Box mt={2} sx={{ bgcolor: '#11144c59', height: 10, width: '100%', borderRadius: 2 }}>
        <Box sx={{ bgcolor: '#11144c', height: '100%', width: `${((currentCardIndex + 1) / flashcardsData.length) * 100}%`, borderRadius: 2 }} />
      </Box>
    </Container>
  );
};

export default Flashcard;
