import { ref, push, set, onValue } from 'firebase/database';
import { database} from './firebase';
import { getDatabase } from 'firebase/database';


export const storeMessageInFirebase = (userId, message) => {
    const chatRef = ref(database, `chats/${userId}/messages`);
    const newMessageRef = push(chatRef);
    set(newMessageRef, {
      content: message.content,
      role: message.role,
      timestamp: Date.now(),
    });
};


export const sendMessage = (userId, message) => {
  const chatRef = ref(database, `chats/${userId}`);
  const newMessageRef = push(chatRef);
  set(newMessageRef, {
    ...message,
    timestamp: Date.now()
  });
};

export const receiveMessages = (userId, setMessages) => {
    const messagesRef = ref(database, `chats/${userId}`);
    onValue(messagesRef, (snapshot) => {
      const messages = snapshot.val();
      const parsedMessages = messages ? Object.keys(messages).map(key => ({
        ...messages[key],
        id: key
      })) : [];
      setMessages(parsedMessages);
    });
  };

export const loadMessages = (userId, callback) => {
    const database = getDatabase();
    const messagesRef = ref(database, `chats/${userId}/messages`);
    onValue(messagesRef, (snapshot) => {
        const messagesData = snapshot.val();
        const messages = messagesData ? Object.values(messagesData) : [];
        callback(messages);
    });
};
