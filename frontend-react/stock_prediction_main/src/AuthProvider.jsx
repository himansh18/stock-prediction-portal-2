import { createContext, useState } from "react";

// Create a context for authentication
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Check if access token is present in localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("access_Token");
  });

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };