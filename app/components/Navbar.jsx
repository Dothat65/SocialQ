import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Flashcard App
          </Typography>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/login">Login</Button>
          <Button color="inherit" href="/signup">Sign Up</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
