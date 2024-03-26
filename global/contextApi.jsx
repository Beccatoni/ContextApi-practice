// ContextApi.js
import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; 

export const AppContext = createContext();

const ContextApi = ({ children }) => {
  const [language, setLanguage] = useState('english');
  const [user, setUser] = useState(null);
  const [isLog, setIsLog] = useState(false)

  const SignIn = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      setUser(response.user.stsTokenManager.accessToken);
      const userToken = response.user.stsTokenManager.accessToken
      try {
        await AsynStorage.setItem('userToken', JSON.stringify(userToken));
        setIsLog(true)
      } catch (error) {
        console.log(error);
        setIsLog(false);
      }
      
      console.log(response);
      return response.user; 
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const SignUp = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      setUser(response.user);
      return response.user; 
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return (
    <AppContext.Provider value={{ SignIn, SignUp, user, isLog }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextApi;
