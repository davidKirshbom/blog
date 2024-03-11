import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useProvideAuth from "../hooks/useProvideAuth";

const ProtectedRoute = () => {
  const { user, loading } = useProvideAuth() || { user: null };
  console.log({ user });

  const navigation = useNavigate();
  useEffect(() => {
    if (!user && !loading) navigation("/login");
  }, [user, loading]);
  return <Outlet />;
};

export default ProtectedRoute;
