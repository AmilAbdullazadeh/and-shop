import React, { useState, useEffect, useMemo, useCallback } from "react";
import jwtDecode from "jwt-decode";

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [adminInfo, setAdminInfo] = useState({
  adminName: null,
    aid: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  // Init Loading
  useEffect(() => {
    function fetchData() {
      var token = localStorage.getItem("token");
      var aid = localStorage.getItem("aid")
      var name = localStorage.getItem("name")
      if (token) {
        // alert(token)
        const admin = jwtDecode(token);
        // alert(JSON.stringify(admin))
        setToken(token);
        setAdminInfo({
          adminName: name, 
          aid: aid
        });
        // alert(JSON.stringify(adminInfo))
      }
    }
    fetchData();
  }, []);
  // alert(JSON.stringify(adminInfo))

  const handleIsLoading = useCallback(
    (state) => {
      setIsLoading(state);
    },
    [isLoading]
  );

  const values = useMemo(
    () => ({
      isLoading,
      setIsLoading,
      token,
      setToken,
      adminInfo,
      setAdminInfo,
    }),
    [isLoading, token, adminInfo]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default function useAuth() {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth hook must be used with a AuthProvider component");
  }

  return context;
}
