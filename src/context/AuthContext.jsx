
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Create Context
const AuthContext = createContext();

// Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken") || "");
  const [loading, setLoading] = useState(true);

  // Set default axios config
  axios.defaults.baseURL = "https://e-commerce-1-jztd.onrender.com/api/v1";
  axios.defaults.withCredentials = true; // Send cookies for refresh token

  // Fetch user profile using access token
  const fetchUser = async (token = accessToken) => {
    if (!token) return;
    try {
      const res = await axios.get("/auth/me", {
        headers: { Authorization: `${token}` },
      });
      setUser(res.data.data);
    } catch (err) {
      console.error("Failed to fetch profile:", err);
      logout();
    }
  };

  // Login function
  const login = async (email, password) => {
    const res = await axios.post("/auth/login", { email, password });
    const token = res.data.accessToken;
    setAccessToken(token);
    localStorage.setItem("accessToken", token);
    await fetchUser(token);
  };

  // Register function
  const register = async (userData) => {
    await axios.post("/auth/register", userData);
  };

  // Logout
  const logout = () => {
    setUser(null);
    setAccessToken("");
    localStorage.removeItem("accessToken");
    axios.post("/auth/logout"); // Clears the refreshToken cookie
  };

  // Refresh token
  const refreshAccessToken = async () => {
    try {
      const res = await axios.post("/auth/refresh-token");
      const newToken = res.data.accessToken;
      setAccessToken(newToken);
      localStorage.setItem("accessToken", newToken);
      return newToken;
    } catch (err) {
        console.log(err)
      logout();
    }
  };

  // On mount: fetch user if token exists
  useEffect(() => {
    const init = async () => {
      if (!accessToken) {
        await refreshAccessToken();
      }
      await fetchUser();
      setLoading(false);
    };
    init();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, register, accessToken, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook
export const useAuth = () => useContext(AuthContext);
