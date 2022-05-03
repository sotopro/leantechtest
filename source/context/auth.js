import React, {useState, createContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({});
const initialState = {
  email: '',
  token: '',
};

const AuthProvider = ({children}) => {
  const [auth, setAuthState] = useState(initialState);

  const getAuthState = async () => {
    try {
      const authDataString = await AsyncStorage.getItem('auth');
      const authData = JSON.parse(authDataString || {});
      setAuthState(authData);
    } catch (err) {
      setAuthState(initialState);
    }
  };

  const setAuth = async authData => {
    try {
      await AsyncStorage.setItem('auth', JSON.stringify(authData));
      setAuthState(authData);
    } catch (error) {
      Promise.reject(error);
    }
  };

  const removeAuth = async () => {
    try {
      await AsyncStorage.removeItem('auth');
      setAuthState(initialState);
    } catch (error) {
      Promise.reject(error);
    }
  };

  useEffect(() => {
    getAuthState();
  }, []);

  return (
    <AuthContext.Provider value={{auth, setAuth, removeAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
