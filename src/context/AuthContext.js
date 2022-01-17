import React, { createContext } from 'react'
import useAuth from './hooks/useAuth'

const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const {
    authenticated,
    loading,
    handleLogin,
    handleLogout,
  } = useAuth()

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        loading,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext

export { AuthContextProvider }
