/**
 * Chat section component where we can chat seamlessly with Jessica about your secret desires (seamlessly integrated the openrouter api)
 */

import { FaCircleUser } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addResponses } from "./utils/openai";
import OpenAI from "openai";
import { OPENAI_KEY } from "./utils/constants";
import { useRef } from "react";
import { storeMessageInFirebase } from "./utils/chatHelper";
import { ref, push, set, getDatabase } from 'firebase/database';



// openrouter configuration for fetching responses
const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: OPENAI_KEY,
    dangerouslyAllowBrowser:true, 
    defaultHeaders: {
      "HTTP-Referer": "https://your-site-url.com", 
      "X-Title": "YourSiteName"
    },
  });

const Chat = () => {
    const [userInput, setUserInput] = useState('');
    const dispatch = useDispatch();
    const responses = useSelector((state) => state.open.responses);
    // const profile = useSelector((state) => state.user.photoURL);
    const user = useSelector((state)=>state.user)

  
    const lastMessageRef = useRef(null);
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  
    const handleSend = async () => {
      if (!userInput.trim()) return;
  
    const userMessage = { role: 'user', content: userInput };
      dispatch(addResponses([userMessage]));
      storeMessageInFirebase(user.uid, userMessage)

      const completion = await openai.chat.completions.create({
        model: "gryphe/mythomist-7b:free",
        messages: [userMessage]
    });
  
    const aiMessage = { role: 'assistant', content: completion.choices[0].message.content };
      dispatch(addResponses([aiMessage]));
      storeMessageInFirebase(user.uid, aiMessage)

      setUserInput('');
    };

    useEffect(() => {
        if (lastMessageRef.current) {
          lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, [responses]);

    const storeMesssage = (userId, message) =>{
      const database = getDatabase();
      const messageRef = ref(database,  `chats/${userId}/messages`);
      const newMessageRef = push(messageRef);
      set(newMessageRef, {
        content: message.content,
        role: message.role,
        timestamp: Date.now(),
      });
    }

    const renderProfile = (role) => {
      const isUser = role === 'user';
      return (
        <div className={`flex items-center gap-2 ${isUser ? 'justify-end' : 'justify-start'} m-4`}>
          {isUser?<div className={`${isUser ? 'order-2' : 'order-1'} rounded-[10em] w-[30%] flex justify-end items-center gap-2`}>
            <p className="text-white text-sm block">Cutie</p>
            <img className="rounded-[10em] w-[20%]" src="https://lh3.googleusercontent.com/proxy/d1jMyszcGEhmvSgVUWJHeDOSufTCpVRKO-O_6d-1ros2M3YJLw8xsRZQIFm9K7XknWHaJnVA4RAa8rLwDeH9tiAFXuOMNmaX2yEvQAElp18xH2wz_uo_3RBnb7kvvdY0FSAk" alt="profile"/>
          </div>:<FaCircleUser className={`${!isUser ? 'order-2' : 'order-1'} text-white`} />}
          <p className={`${isUser ? '' : 'order-2'} text-white text-sm block`}>{isUser ? '' : 'Jessica'}</p>
        </div>
      );
    };

    return (
      <div className={`chat ${ !isMenuOpen && 'w-screen'} w-[70em] bg-black h-screen font-man overflow-y-auto`}>
        {responses.map((msg, index) => (
          <div key={index}>
            {renderProfile(msg.role)}
            <div
              className={`mess ${msg.role === 'user' ? 'bg-gray-500' : 'bg-pink-600'} w-fit mx-auto rounded flex ${msg.role === 'user' ? 'mr-4' : 'ml-4'}`}
              ref={index === responses.length - 1 ? lastMessageRef : null}
            >
              <p className={`text-gray-200 p-4 text-sm font-semibold`}>{msg.content}</p>
              <div className="flex gap-2 h-[10%]"></div>
            </div>
          </div>
        ))}
  
        <div className="chatbox mt-[26rem] w-[100%] flex items-center justify-center">
              <input
              placeholder="Type a message here..."
              className="bg-black text-white w-[80%] p-2 mr-2 border-red-700 border-l-4 border-r-4 border-t-4 border-b-4 rounded-lg "
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSend(e); }}
              />
              <div className="cursor-pointer text-white hover:text-pink-500" onClick={handleSend}><IoMdSend /></div>
        </div>
      </div>
    );
  };
  
  export default Chat;