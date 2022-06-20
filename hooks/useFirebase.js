import initialization from "../utilities/firebase.int";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

initialization();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const router = useRouter();

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const googleSign = () => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUser(user);
        setAuthError("");
        router.push("/");
        // ...
      })
      .catch((error) => {
        setAuthError(error.message);
        // ...
      })

      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        /*  getIdToken(user)
                .then(idToken => {
                    setToken(idToken);
                }) */
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        /*         setUser({}); */
        router.push("/login");
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };

  return { user, googleSign, authError, isLoading, logout };
};

export default useFirebase;
