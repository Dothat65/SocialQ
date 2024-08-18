import { Box, Button, Container, Divider, Grid, TextField, Typography, IconButton } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

export default function SignUp() {
  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ width: '100%', textAlign: 'center', padding: 4, bgcolor: 'white', borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>

        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Username"
            variant="filled"
            margin="normal"
            sx={{ bgcolor: '#f2f1f1', borderRadius: 1 }}
          />
          <TextField
            fullWidth
            label="Email"
            variant="filled"
            margin="normal"
            sx={{ bgcolor: '#f2f1f1', borderRadius: 1 }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="filled"
            margin="normal"
            sx={{ bgcolor: '#f2f1f1', borderRadius: 1 }}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <LockIcon />
                </IconButton>
              ),
            }}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              bgcolor: '#11144c',
              height: 56,
              borderRadius: 1.5,
              fontSize: '16px',
            }}
          >
            Sign Up
          </Button>

          <Typography variant="body2" sx={{ mt: 2, color: '#00000080' }}>
            Already Have An Account?{' '}
            <Typography component="a" href="/login" variant="body2" sx={{ color: '#11144c', fontWeight: 'bold', cursor: 'pointer' }}>
              Login
            </Typography>
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Typography variant="body2" sx={{ color: '#11144c8a', mb: 2 }}>
          OR
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FacebookIcon />}
              sx={{
                borderColor: '#01193640',
                borderRadius: 1.5,
                color: '#252525',
                fontSize: '14px',
              }}
            >
              Sign Up with Facebook
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              sx={{
                borderColor: '#01193640',
                borderRadius: 1.5,
                color: '#252525',
                fontSize: '14px',
              }}
            >
              Sign Up with Google
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
