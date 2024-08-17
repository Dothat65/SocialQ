import { db } from '../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, setDoc } from 'firebase/firestore';

// Function to add a user to Firestore
export const addUserToFirestore = async (user) => {
    try {
        await setDoc(doc(db, 'users', user.uid), {
            email: user.email,
            uid: user.uid,
            flashcardSets: {}
        });
        console.log('User added to Firestore');
    } catch (error) {
        console.error('Error adding document: ', error);
    }
};


export const addFlashcardSet = async (user, flashcardSet) => {
    try {
        // Ensure `user.uid` and `flashcardSet.id` are defined and valid
        const userDocRef = doc(db, "users", user.uid);

        // Use template literals correctly for dynamic field names
        await updateDoc(userDocRef, {
            [`flashcardSets.${flashcardSet.id}`]: flashcardSet
        });

        console.log("Flashcard set added successfully");
    } catch (error) {
        console.error("Error adding flashcard set: ", error);
    }
}

