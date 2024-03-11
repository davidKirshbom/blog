import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { login, profile, register as registerUser } from "../server/user";

function useProvideAuth() {
  const { user, setUser } = useAuth();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoading(true);
      profile(token)
        .then((user) => {
          setUser({ user, token });
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    if (!user && !loading) localStorage.removeItem("token");
  }, [user, loading]);
  const handleSetUser = (user) => {
    setUser(user);
    localStorage.setItem("token", user.token);
  };
  const signIn = async (email, password) => {
    setLoading(true);
    const registerResponse = await login(email, password);

    handleSetUser(registerResponse);
    setLoading(false);
  };
  const signOut = () => {
    setUser(null);
    localStorage.removeItem("token");
  };
  const register = async (email, password) => {
    setLoading(true);
    const registerResponse = await registerUser(email, password);
    handleSetUser(registerResponse);
    setLoading(false);
  };
  return {
    user,
    register,
    signIn,
    signOut,
    loading,
  };
}

export default useProvideAuth;
