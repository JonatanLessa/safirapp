import { useState, useEffect } from 'react'

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Get user from local storage
    // const token = Storage.get(ACCESS_TOKEN)

    // TODO: Set authenticated
    // if (token) {
    //   setAuthenticated(true)
    // }

    // TODO: Set Loading
    // setLoading(false)
  }, [])

  const handleLogin =  async (cpf) => {
    setLoading(true)

    // TODO: Get/Create user on the firebase
    // TODO: Store user data on local storage
    // TODO: Navigate to correct page
  }

  const handleLogout = async () => {
    setLoading(true)
    setAuthenticated(false)

    // TODO: Clean local storage and navigate to login
  }

  return {
    authenticated,
    loading,
    handleLogin,
    handleLogout,
  }
}
