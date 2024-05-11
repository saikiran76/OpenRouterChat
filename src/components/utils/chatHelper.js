import { ref, push, set } from 'firebase/database';
import { database } from './firebase';

export const sendMessage = (userId, message) => {
  const chatRef = ref(database, `chats/${userId}`);
  const newMessageRef = push(chatRef);
  set(newMessageRef, {
    ...message,
    timestamp: Date.now()
  });
};