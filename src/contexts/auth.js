//todos os componentes que estiverem dentro do contexto podem acessar informações dele
import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = AsyncStorage.getItem('@RNAuth:token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }
    }
    loadStoragedData();
  }, []);

  async function signIn() {
    try {
      const response = await auth.signIn();
      setUser(response.user);
      await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
      await AsyncStorage.setItem('@RNAuth:token', response.token);
    } catch (error) {
      console.log(error);
    }
  }
  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }
  return (
    <AuthContext.Provider
      value={{signed: !!user, user, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
