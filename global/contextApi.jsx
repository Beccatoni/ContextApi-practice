// ContextApi.js
import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; 
import { setItemAsync, getItemAsync, deleteItemAsync } from 'expo-secure-store';

export const AppContext = createContext();

const ContextApi = ({ children }) => {
  const [language, setLanguage] = useState('english');
  const [user, setUser] = useState(null);
  const [isLog, setIsLog] = useState(false)

  const SignIn = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      setUser(response.user.stsTokenManager.accessToken);
      const userAccessToken = response.user.stsTokenManager.accessToken
      setIsLog(true)
      try {
        await setItemAsync('userToken', JSON.stringify(userAccessToken));
        await setItemAsync('email', JSON.stringify(email))
        
      } catch (error) {
        console.log(error);
        
      }
      
      console.log(response);
      return response.user; 
    } catch (error) {
      console.log(error);
      setIsLog(false);
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

  const logout = async () => {
    setLogLevel(false)
    await deleteItemAsync('useAccessToken')
    await deleteItemAsync('email')
    
  }

  return (
    <AppContext.Provider value={{ SignIn, SignUp, user, isLog, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextApi;
