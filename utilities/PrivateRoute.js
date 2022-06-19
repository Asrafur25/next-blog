import { useRouter, useEffect } from "next/router";
import React from "react";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("/login");
  }

  return <>{user ? children : null}</>;
};

export default PrivateRoute;
