import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";
import useAuth from "../hooks/useAuth";
import useFirebase from "../hooks/useFirebase";
import Login from "../pages/login";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  console.log("private user", user);

  useEffect(() => {
    if (!isLoading) {
      //auth is initialized and there is no user
      if (!user.email) {
        // remember the page that user tried to access
        //setRedirect(router.route);
        // redirect
        router.push("/login");
      }
    }
  }, [user]);

  // if(!user) {
  //   console.log("going to loginssssssssssssssssss")
  //   router.push("/login");
  // }

  // return <>{user ? children : null}</>;
  if (isLoading) {
    return <h1>Application Loading</h1>;
  }

  if (user) {
    return <>{children}</>;
  }

  return null;

  // If user is logged in, return original component
};

export default PrivateRoute;
