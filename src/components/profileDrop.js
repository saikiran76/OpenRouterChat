import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSignOutAlt } from 'react-icons/fa';
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
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(removeUser());
      navigate('/')
      
    } catch (error) {
      console.error('Logout failed', error);
    }
  };
  
  useEffect(()=>{
    if(user && isDropdownOpen){
      loadMessages(user.uid, setChats)
    }
  }, [user, isDropdownOpen])

  // console.log("USER NAME>", user.displayName)

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
        <div className="absolute right-0 mt-2 w-48 bg-zinc-800 text-white p-4 rounded-md shadow-lg">
          <p className="text-sm">Signed in as {user.email}</p>
          <hr className="my-2" />
          <button onClick={handleLogout} className="block w-full text-left mt-2 text-pink-500">
            <FaSignOutAlt className="mr-2" /> Log Out
          </button>
          <hr className='my-2'/>
          {chats.map((chat, index)=>(
            <p key={index}>{chat.content} ({chat.role})</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;