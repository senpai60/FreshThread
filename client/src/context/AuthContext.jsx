import { createContext, useContext, useEffect, useState } from "react";
import { authApi } from "../api/authApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const initialVerify = async () => {
      try {
        const data = await verify();
        setUser(data);
      } catch (err) {
        console.error("Verification failed:", err);
      } finally {
        setLoading(false);
      }
    };
    initialVerify();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await authApi.post("/login", { email, password });
      const data = await verify();
      setUser(data);
      return data;
    } catch (err) {
      console.error("Login failed:", err);
      throw err;
    }
  };

  const signup = async (
    email,
    username,
    firstName,
    lastName,
    password,
    gender
  ) => {
    try {
      const response = await authApi.post("/signup", {
        email,
        username,
        firstName,
        lastName,
        password,
        gender,
      });
      const data = await verify();
      setUser(data);
      return data;
    } catch (err) {
      console.error("Signup failed:", err);
      throw err;
    }
  };

  const verify = async () => {
    try {
      const response = await authApi.get("/verify");
      setUser(response.data?.data);
      return response.data?.data;
    } catch (err) {
      console.error("Verification error:", err);
      setUser(null);
      throw err;
    }
  };

  const logout = async () => {
    try {
      await authApi.post("/signout", {});
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, signup, verify, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)
