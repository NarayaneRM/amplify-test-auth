import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { Amplify, Auth } from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);
const UserContext = createContext();
const TokenContext = createContext();
const IDTokenContext = createContext();

function UserContextProvider({ children }) {
  const [idToken, setIdToken] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function check() {
      try {
        const user = await Auth.currentAuthenticatedUser();

        const id_token = user.signInUserSession.idToken.jwtToken;
        setIdToken(id_token);

        const access_token = user.signInUserSession.accessToken.jwtToken;
        setAccessToken(access_token);

        const user_email = user.signInUserSession.idToken.payload.email;
        setUserEmail(user_email);
      } catch (error) {
        console.log(error);
        navigate('/', { replace: true });
      }
    }

    check();
  }, []);
  return (
    <UserContext.Provider value={userEmail}>
      <TokenContext.Provider value={accessToken}>
        <IDTokenContext.Provider value={idToken}>
          {children}
        </IDTokenContext.Provider>
      </TokenContext.Provider>
    </UserContext.Provider>
  );

}

export { UserContext, TokenContext, IDTokenContext, UserContextProvider };

