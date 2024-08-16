import {react, useState} from 'react';
import {signUp, signIn, signInWithGoogle, signOut} from '../lib/firebaseAuth';


const Login = () => {
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
            alert(`Error: ${error.message}`); // Added alert for user-friendly error message
        }
    };    

}