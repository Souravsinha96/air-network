import { useEffect, useRef } from "react";

export const useGoogleAuth = () => {
  let auth = useRef("");
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOLE_CLIENT_ID,
          scope: "email",
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);
  const onAuthChange = (isSignedIn) => {
    console.log(auth.current);
  };
  const onSignInClick = () => {
    auth.current.signIn();
  };
  const onSignOutClick = () => {
    auth.current.signOut();
  };
  return { onSignInClick, onSignOutClick };
};
