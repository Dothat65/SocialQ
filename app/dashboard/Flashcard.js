import React, { useState } from 'react';
import { Box, Typography, IconButton, Container, Card, CardContent, CardActions, TextField, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
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

  const currentCard = flashcardsData[currentCardIndex];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {flashcardsData.length > 0 && (
        <>
          <Box display="flex" justifyContent="space-between" alignItems="center" mt={4}>
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
          </Box>

          <Typography variant="body2" align="center" sx={{ mt: 4 }}>{currentCardIndex + 1} / {flashcardsData.length}</Typography>
          <Box mt={2} sx={{ bgcolor: '#11144c59', height: 10, width: '100%', borderRadius: 2 }}>
            <Box sx={{ bgcolor: '#11144c', height: '100%', width: `${((currentCardIndex + 1) / flashcardsData.length) * 100}%`, borderRadius: 2 }} />
          </Box>
        </>
      )}
    </Container>
  );
};

export default Flashcard;