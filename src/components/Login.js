import { useState, useRef } from "react";
import { checkValidData } from "./utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
import { USER_AVATAR } from "./utils/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Import the useNavigate hook
  
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
  
    const handleButtonClick = () => {
      const message = checkValidData(email.current.value, password.current.value);
      setErrorMessage(message);
      if (message) return;
  
      if (!isSignInForm) {
        // Sign Up Logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: USER_AVATAR,
            })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid,
                    email,
                    displayName,
                    photoURL,
                  })
                );
                navigate('/Home'); // Redirect to home page after successful signup
              })
              .catch((error) => setErrorMessage(error.message));
          })
          .catch((error) => setErrorMessage(`${error.code} - ${error.message}`));
      } else {
        // Sign In Logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const { uid, email, displayName, photoURL } = userCredential.user;
            console.log('The control has reached here...');
        
            dispatch(
              addUser({
                uid,
                email,
                displayName,
                photoURL,
              })
            );
            console.log('User etails: ', displayName);
            navigate('/Home'); // Redirect to home page after successful login
          })
          .catch((error) => setErrorMessage(`${error.code} - ${error.message}`));
      }
    };
  
    const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm);
    };
  
    return (
      <div className="font-man">
        <div className="logo m-2">
                    <h1 className="font-bold text-black">secret<span className="bg-pink-500 text-white rounded-md p-1 m-1">desires</span></h1>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full md:w-3/12 absolute p-12 bg-black my-18 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 mb-10"
        >
          <h1 className="font-bold font-man text-3xl py-4">
            {isSignInForm ? 'Welcome back' : 'Register to Secret Desires'}
          </h1>
  
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-black"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-black"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-black"
          />
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? 'New user? Sign Up Now' : 'Already registered? Sign In Now.'}
          </p>
        </form>
      </div>
    );
  };
  
  export default Login;