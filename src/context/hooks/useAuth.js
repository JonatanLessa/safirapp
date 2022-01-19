import { useState, useEffect } from 'react'
import { getDatabase, ref, update } from 'firebase/database'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const setCurrentUser = async (cpf) => {
    return AsyncStorage.setItem('current_user', cpf);
  };

  const getCurrentUser = async () => {
    return AsyncStorage.getItem('current_user');
  };

  const clearCurrentUser = () => {
    AsyncStorage.clear();
  }

  useEffect(() => {
    setLoading(true);

    getCurrentUser().then(cpf => {
      if (cpf) {
        setAuthenticated(true)
      }
    }).finally(() => setLoading(false))
  }, [])

  const handleLogin =  async (navigation, cpf) => {
    setLoading(true)

    const database = getDatabase();
    const currentUserRef = ref(database, `users/${cpf}`);
    update(currentUserRef, { 'cpf': cpf });

    setCurrentUser(cpf)
      .then(() => setAuthenticated(true))
      .catch(() => setAuthenticated(false))
      .finally(() => navigation.navigate('LoginScreen'))
  }

  const handleLogout = async () => {
    setLoading(true);
    setAuthenticated(false);
    clearCurrentUser();
  }

  return {
    authenticated,
    loading,
    handleLogin,
    handleLogout,
    getCurrentUser,
  }
}
