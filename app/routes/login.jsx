import React, { useState, useEffect } from 'react';
import { signUp, signIn, signInWithGoogle, signOut } from '../../lib/firebaseAuth';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);

    const handleAuth = async () => {
        try {
            if (isSignUp) {
                await signUp(email, password);
            } else {
                await signIn(email, password);
            }
            alert(`Successfully ${isSignUp ? 'signed up' : 'signed in'}`);
        } catch (error) {
            console.error("Error signing in:", error);
            alert(`Error: ${error.message}`);
        }
    };

    const handleGoogleAuth = async () => {
        try {
            await signInWithGoogle();
            alert('Successfully signed in with Google');
        } catch (error) {
            console.error("Error signing in with Google:", error);
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <Container>
            <Box>
                <Typography variant="h4">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={handleAuth}>
                    {isSignUp ? 'Sign Up' : 'Sign In'}
                </Button>
                <Button onClick={handleGoogleAuth}>
                    Sign In with Google
                </Button>
                <Button onClick={() => setIsSignUp(!isSignUp)}>
                    {isSignUp ? 'Switch to Sign In' : 'Switch to Sign Up'}
                </Button>
            </Box>
        </Container>
    );
};