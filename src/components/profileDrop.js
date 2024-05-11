import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSignOutAlt } from 'react-icons/fa';
import { FaCircleUser } from "react-icons/fa6";
import { signOut } from 'firebase/auth';
import { auth } from './utils/firebase';
import { removeUser } from './utils/userSlice';
import { FaCaretDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { loadMessages } from './utils/chatHelper';

const ProfileDropdown = () => {
  const dispatch = useDispatch();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [chats, setChats] = useState([]);
  const user = useSelector(state => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && isDropdownOpen) {
      loadMessages(user.uid, setChats);
    }
  }, [user, isDropdownOpen]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(removeUser());
      navigate('/');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <div className="relative">
      <button
        className="profile flex items-center m-2 gap-1"
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      >
        <FaSignOutAlt style={{ color: '#fff' }} />
        <h2 className="text-white">{user && (user.displayName || 'My Profile')}</h2>
        <FaCaretDown style={{ color: '#fff' }} />
      </button>
      {user && isDropdownOpen && (
        <div className="absolute right-0 mt-2 bg-zinc-800 text-white p-4 rounded-md shadow-lg w-[25em]">
          <p className="text-xs flex items-center gap-2"><FaCircleUser style={{"color":"pink"}}/>{user.email}</p>
          <button onClick={handleLogout} className="block w-full text-left mt-2 text-pink-500">
            <FaSignOutAlt className="mr-2" /> Log Out
          </button>
          <hr className="my-2" />
          <div className="chat-messages max-h-60 overflow-auto">
            <h1 className='font-bold'>Recent Chat</h1>
            {chats.map((chat, index) => (
              <div key={index} className={`message ${chat.role === 'user' ? 'user-message' : 'assistant-message'}`}>
                <p className="text-sm p-2 rounded-lg">{chat.role === 'user' ? (<h1 className='font-semibold text-sm'>User:</h1>) : (<h1 className='font-semibold text-sm'>AI:</h1>)}{chat.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
