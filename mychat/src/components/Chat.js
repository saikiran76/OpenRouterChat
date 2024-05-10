/**
 * Chat section component where we can chat seamlessly with Jessica about your secret desires
 */

import { FaCircleUser } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addResponses } from "./utils/openai";
import OpenAI from "openai";
import { OPENAI_KEY } from "./utils/constants";
import { useRef } from "react";

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
    const lastMessageRef = useRef(null);
  
    const handleSend = async () => {
      if (!userInput.trim()) return;
  
      const userMessage = { role: 'user', content: userInput };
      dispatch(addResponses([userMessage]));
  
      const completion = await openai.chat.completions.create({
        model: "gryphe/mythomist-7b:free",
        messages: [userMessage]
      });
  
      const aiMessage = { role: 'assistant', content: completion.choices[0].message.content };
      dispatch(addResponses([aiMessage]));
  
      setUserInput('');
    };

    useEffect(() => {
        if (lastMessageRef.current) {
          lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, [responses]);

      const renderProfile = (role) => {
        const isUser = role === 'user';
        return (
          <div className={`flex items-center gap-2 ${isUser ? 'justify-end' : 'justify-start'} m-4`}>
            <FaCircleUser className={`${isUser ? 'order-2' : 'order-1'} text-white`} />
            <p className={`${isUser ? 'order-1' : 'order-2'} text-white text-sm`}>{isUser ? 'You' : 'Jessica'}</p>
          </div>
        );
      };

      return (
        <div className="chat w-[70em] bg-gray-900 h-screen font-man overflow-y-auto">
          {responses.map((msg, index) => (
            <div key={index}>
              {renderProfile(msg.role)}
              <div
                className={`mess ${msg.role === 'user' ? 'bg-gray-500' : 'bg-pink-600'} w-[50em] mx-auto rounded flex ${msg.role === 'user' ? 'mr-4' : 'ml-4'}`}
                ref={index === responses.length - 1 ? lastMessageRef : null}
              >
                <p className={`text-gray-200 p-6 text-sm`}>{msg.content}</p>
              </div>
            </div>
          ))}
    
          <div className="chatbox mt-[13rem] w-[100%] flex items-center justify-center">
            <input
              placeholder="Type a message here..."
              className="bg-gray-400 text-white p-2 mr-2 border-red-700 border-l-4 border-r-4 border-t-4 border-b-4 rounded-lg w-[70%]"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <div className="cursor-pointer text-white" onClick={handleSend}><IoMdSend /></div>
          </div>
        </div>
      );
    };
  
  export default Chat;