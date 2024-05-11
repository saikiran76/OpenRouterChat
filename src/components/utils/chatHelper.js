/**
 * Firebase helper functions for managing database operations
 * To store the chats (both assistants and as well as the user's)
 * To load up the stored chats on the profile tab to view the recent history of conversations
 */


import { ref, push, set, onValue } from 'firebase/database';
import { database} from './firebase';
import { getDatabase } from 'firebase/database';

// helper for storing the conversations
export const storeMessageInFirebase = (userId, message) => {
    const chatRef = ref(database, `chats/${userId}/messages`);
    const newMessageRef = push(chatRef);
    set(newMessageRef, {
      content: message.content,
      role: message.role,
      timestamp: Date.now(),
    });
};

// helper for loading up the conversations
export const loadMessages = (userId, callback) => {
    const database = getDatabase();
    const messagesRef = ref(database, `chats/${userId}/messages`);
    onValue(messagesRef, (snapshot) => {
        const messagesData = snapshot.val();
        const messages = messagesData ? Object.values(messagesData) : [];
        callback(messages);
    });
};
