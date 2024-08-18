import React, { useState } from 'react';
import { useRouter } from 'next/navigation'

import { signUp, signIn, signInWithGoogle, signOut } from '../../lib/firebaseAuth';
import { Box, Button, Container, Divider, Grid, TextField, Typography, IconButton } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleAuth = async (event) => {
        event.preventDefault();
        try {
            if (isSignUp) {
                await signUp(email, password);
            } else {
                await signIn(email, password);
            }
            setMessage(`Successfully ${isSignUp ? 'signed up' : 'signed in'}`);
            router.push('/home'); // Navigate to the home after successful login/signup
        } catch (error) {
            console.error("Error signing in:", error);
            setMessage(`Error: ${error.message}`);
        }
    };

    const handleGoogleAuth = async () => {
        try {
            await signInWithGoogle();
            setMessage('Successfully signed in with Google');
            router.push('/home'); // Navigate to the dashboard after successful Google sign-in
        } catch (error) {
            console.error("Error signing in with Google:", error);
            setMessage(`Error: ${error.message}`);
        }
    };

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
        setMessage('');
    };

    return (
        <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ width: '100%', textAlign: 'center', padding: 4, bgcolor: 'white', borderRadius: 2, boxShadow: 3 }}>
                <Typography variant="h4" gutterBottom>
                    {isSignUp ? 'Sign Up' : 'Login'}
                </Typography>

                <Box component="form" noValidate autoComplete="off" onSubmit={handleAuth}>
                    <TextField
                        fullWidth
                        label="Email"
                        variant="filled"
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ bgcolor: '#f2f1f1', borderRadius: 1 }}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        variant="filled"
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        type="submit"
                        sx={{
                            mt: 3,
                            bgcolor: '#11144c',
                            height: 56,
                            borderRadius: 1.5,
                            fontSize: '16px',
                        }}
                    >
                        {isSignUp ? 'Sign Up' : 'Login'}
                    </Button>

                    <Typography variant="body2" sx={{ mt: 2, color: '#00000080' }}>
                        {isSignUp ? 'Already an account?' : "Don't have an account?"}{' '}
                        <Typography component="span" onClick={toggleForm} variant="body2" sx={{ color: '#11144c', fontWeight: 'bold', cursor: 'pointer' }}>
                            {isSignUp ? 'Login' : 'Sign Up'}
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
                            startIcon={<GoogleIcon />}
                            onClick={handleGoogleAuth}
                            sx={{
                                borderColor: '#01193640',
                                borderRadius: 1.5,
                                color: '#252525',
                                fontSize: '14px',
                            }}
                        >
                            {isSignUp ? 'Sign Up with Google' : 'Login with Google'}
                        </Button>
                    </Grid>
                </Grid>

                {message && (
                    <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                        {message}
                    </Typography>
                )}
            </Box>
        </Container>
    );
};

export default Login;