import { Box, Typography } from '@mui/material';

export default function FlashcardExpanded({ front, back }) {
  return (
    <Box
      sx={{
        mt: 4,
        p: 3,
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        Expanded Flashcard
      </Typography>
      <Box>
        <Typography variant="h6">Front:</Typography>
        <Typography>{front}</Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Back:</Typography>
        <Typography>{back}</Typography>
      </Box>
    </Box>
  );
}