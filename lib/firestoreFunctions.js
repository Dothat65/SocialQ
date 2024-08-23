import { NestCamWiredStand } from '@mui/icons-material';
import { db } from '../firebase';
import { collection, doc, addDoc, setDoc, serverTimestamp, writeBatch } from 'firebase/firestore';


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


export const handleCreateFlashcardSet = async (userUid, flashcardSetName) => {
    try {
        const flashcardSetDocRef = doc(collection(db, 'flashcardSets'));
        await setDoc(flashcardSetDocRef, {
            name: flashcardSetName,
            userId: userUid, // Store the user's UID
            createdAt: new Date(),
        });
        return flashcardSetDocRef.id; // Return the ID of the new set
    } catch (error) {
        console.error('Error adding flashcard set:', error);
        throw error;
    }
};



export const addflashCards = async (setId, flashcard) =>{
    try{
        // creating a reference to the flashcard sub collection within the flashcardset collection
        const flashcardsCollectionRef = collection(db, 'flashcardSets', setId, 'flashcards')
        // creating a document within the flashcard sub collection
        const newFlashcardRef = doc(flashcardsCollectionRef)
        // setting the values for the flashcards
        await setDoc(newFlashcardRef,{
            front: flashcard.front,
            back: flashcard.back
        });
        console.log('added flashcards to the flashcard set')
    }
    catch(error){
        console.log('Error adding flashcards: ', error)
    }
}