/* eslint-disable */
import { createContext, useContext, useEffect, useState } from "react";
import { userService } from "../services/user.service";

export const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [me, setMe] = useState(null);
    const [loading, setLoading] = useState(true); 
  
    const refreshMe = async () => {
      try {
        const res = await userService().me();
        setMe(res.data?.user ?? null);
      } catch {
        setMe(null);
      } finally {
        setLoading(false); 
      }
    };
  
    const login = async (username: string, password: string) => {
      await userService().login(username, password);
      await refreshMe();
    };
  
    const logout = async () => {
      await userService().logout();
      setMe(null);
    };
  
    useEffect(() => {
      refreshMe();
    }, []);
  
    return (
      <AuthContext.Provider value={{ me, loading, login, logout, refreshMe }}>
        {children}
      </AuthContext.Provider>
    );
  };
  

export const useAuth = () => useContext(AuthContext);
