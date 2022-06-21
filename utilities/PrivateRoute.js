import { useRouter } from "next/router";
import React from "react";
import useAuth from "../hooks/useAuth";
import useFirebase from "../hooks/useFirebase";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  console.log("private user", user)

  if (!user.email) {
    console.log("going to loginssssssssssssssssss")
    router.push("/login");
  } else

  return <>{user ? children : null}</>;
};



export default PrivateRoute;
