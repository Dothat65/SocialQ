'use client'
import React, { useState } from 'react';
import { Box, Typography, IconButton, Container, Card, CardContent, CardActions, TextField, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const Flashcard = ({ flashcardsData }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedFlashcard, setEditedFlashcard] = useState({ front: '', back: '' });

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcardsData.length);
    setIsExpanded(false);
    setIsEditing(false);
  };

  const handlePrevious = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + flashcardsData.length) % flashcardsData.length);
    setIsExpanded(false);
    setIsEditing(false);
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedFlashcard(flashcardsData[currentCardIndex]);
  };

  const handleSave = () => {
    flashcardsData[currentCardIndex] = editedFlashcard;
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedFlashcard({ ...editedFlashcard, [name]: value });
  };

  // Check if flashcardsData is defined and not empty
  if (!flashcardsData || flashcardsData.length === 0) {
    return <Typography>No flashcards available</Typography>;
  }

  const currentCard = flashcardsData[currentCardIndex];
  const prevCard = flashcardsData[(currentCardIndex - 1 + flashcardsData.length) % flashcardsData.length];
  const nextCard = flashcardsData[(currentCardIndex + 1) % flashcardsData.length];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {flashcardsData.length > 0 && (
        <>
          <Box display="flex" justifyContent="space-between" alignItems="center" mt={4} mb={4}>
            <IconButton onClick={handlePrevious}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>Conversational Flashcards</Typography>
            <IconButton onClick={handleNext}>
              <ArrowForwardIcon />
            </IconButton>
          </Box>

          <Box mt={4} display="flex" justifyContent="center" alignItems="center" position="relative" sx={{ height: '500px' }}>
            <AnimatePresence initial={false} custom={currentCardIndex}>
              {/* Main Card */}
              <motion.div
                key={currentCardIndex}
                custom={currentCardIndex}
                initial={{ opacity: 0, scale: 0.8, x: 400 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -400 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                style={{
                  position: 'absolute',
                  width: 350,
                  zIndex: 2,
                }}
              >
                <Card sx={{ bgcolor: '#11144c', color: '#f4fffd', textAlign: 'center', borderRadius: 3 }}>
                  <CardContent>
                    {isEditing ? (
                      <>
                        <TextField
                          fullWidth
                          name="front"
                          value={editedFlashcard.front}
                          onChange={handleChange}
                          variant="outlined"
                          sx={{ mb: 2, bgcolor: 'white' }}
                        />
                        <TextField
                          fullWidth
                          name="back"
                          value={editedFlashcard.back}
                          onChange={handleChange}
                          variant="outlined"
                          sx={{ mb: 2, bgcolor: 'white' }}
                          multiline
                          rows={4}
                        />
                      </>
                    ) : (
                      <>
                        <Typography variant="h4">{currentCard?.front}</Typography>
                        {isExpanded && (
                          <Box mt={2}>
                            <Typography variant="body1">{currentCard?.back?.split('\n')[0]}</Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>{currentCard?.back?.split('\n')[1]}</Typography>
                          </Box>
                        )}
                      </>
                    )}
                  </CardContent>
                  <CardActions>
                    {isEditing ? (
                      <Button onClick={handleSave} sx={{ mx: 'auto', color: '#f4fffd' }} startIcon={<SaveIcon />}>
                        Save
                      </Button>
                    ) : (
                      <>
                        <IconButton onClick={handleExpand} sx={{ mx: 'auto', bgcolor: '#f4fffd', borderRadius: 2 }}>
                          {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton>
                        <IconButton onClick={handleEdit} sx={{ mx: 'auto', color: '#f4fffd' }}>
                          <EditIcon />
                        </IconButton>
                      </>
                    )}
                  </CardActions>
                </Card>
              </motion.div>

              {/* Previous Card */}
              <motion.div
                key={`prev-${currentCardIndex}`}
                initial={{ opacity: 0.5, scale: 0.7, x: -450 }}
                animate={{ opacity: 0.5, scale: 0.7, x: -200 }}
                exit={{ opacity: 0, scale: 0.5, x: -650 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                style={{
                  position: 'absolute',
                  width: 300,
                  zIndex: 1,
                }}
              >
                <Card sx={{ bgcolor: '#4a4a7e', color: '#f4fffd', textAlign: 'center', borderRadius: 3 }}>
                  <CardContent>
                    <Typography variant="h6">{prevCard?.front}</Typography>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Next Card */}
              <motion.div
                key={`next-${currentCardIndex}`}
                initial={{ opacity: 0.5, scale: 0.7, x: 450 }}
                animate={{ opacity: 0.5, scale: 0.7, x: 200 }}
                exit={{ opacity: 0, scale: 0.5, x: 650 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                style={{
                  position: 'absolute',
                  width: 300,
                  zIndex: 1,
                }}
              >
                <Card sx={{ bgcolor: '#4a4a7e', color: '#f4fffd', textAlign: 'center', borderRadius: 3 }}>
                  <CardContent>
                    <Typography variant="h6">{nextCard?.front}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </Box>

          <Typography variant="body2" align="center" sx={{ mt: 4 }}>
            {currentCardIndex + 1} / {flashcardsData.length}
          </Typography>
          <Box mt={2} sx={{ bgcolor: '#11144c59', height: 10, width: '100%', borderRadius: 2 }}>
            <Box
              sx={{
                bgcolor: '#11144c',
                height: '100%',
                width: `${((currentCardIndex + 1) / flashcardsData.length) * 100}%`,
                borderRadius: 2,
              }}
            />
          </Box>
        </>
      )}
    </Container>
  );
};

export default Flashcard;
