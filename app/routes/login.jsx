import React, { useState } from 'react';
import { signUp, signIn, signInWithGoogle, signOut } from '../../lib/firebaseAuth';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [message, setMessage] = useState('');

    const handleAuth = async () => {
        try {
            if (isSignUp) {
                await signUp(email, password);
            } else {
                await signIn(email, password);
            }
            setMessage(`Successfully ${isSignUp ? 'signed up' : 'signed in'}`);
        } catch (error) {
            console.error("Error signing in:", error);
            setMessage(`Error: ${error.message}`);
        }
    };

    const handleGoogleAuth = async () => {
        try {
            await signInWithGoogle();
            setMessage('Successfully signed in with Google');
        } catch (error) {
            console.error("Error signing in with Google:", error);
            setMessage(`Error: ${error.message}`);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut();
            setMessage('Successfully signed out');
        } catch (error) {
            console.error("Error signing out:", error);
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
       <div></div>
    );
};

export default Login;