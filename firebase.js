// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';



// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: process.env.VITE_APP_API_KEY,
 authDomain: process.env.VITE_APP_AUTH_DOMAIN,
 projectId: process.env.VITE_APP_PROJECT_ID,
 storageBucket: process.env.VITE_APP_STORAGE_BUCKET,
 messagingSenderId: process.env.VITE_APP_MESSAGING_SENDER_ID,
 appId: process.env.VITE_APP_APP_ID,
 measurementId: process.env.VITE_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);

export { firestore };