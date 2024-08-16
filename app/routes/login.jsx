import React, { useState } from 'react';
import { signUp, signIn, signInWithGoogle, signOut } from '../../lib/firebaseAuth';

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

    const handleSignOut = async () => {
        try {
            await signOut();
            alert('Successfully signed out');
        } catch (error) {
            console.error("Error signing out:", error);
            alert(`Error: ${error.message}`);
        }
    };
}


export default Login;