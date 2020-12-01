import React, { createContext, useContext, useEffect, useState } from 'react';
import { getUserInfo } from '../utils/authService';

const AuthContext = createContext();

const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchUserdata = async () => {
      console.log(user);
      if (user === null) {
        setLoading(true);
        const { data } = await getUserInfo();
        if (data?.success) {
          const currentUser = data.data;
          setUser(currentUser);
        } else {
          setUser(null);
        }
        setLoading(false);
      }
    };
    fetchUserdata();
  }, [user]);
  return (
    <Provider
      value={{
        isLoading: loading,
        isAdmin: user?.role === 'admin',
        isLoggedIn: !!user,
        user,
        setUser,
      }}
    >
      {children}
    </Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
