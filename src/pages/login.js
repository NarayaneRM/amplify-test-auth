import React, { useEffect, useState } from 'react';
import { Amplify, Auth, Hub } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import awsConfig from '../aws-exports.js';
import '../styles/login.css';

Amplify.configure(awsConfig);
Auth.configure(awsConfig);

function Login() {
  const [user, setUser] = useState(null);
  const [customState, setCustomState] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          setUser(data);
          break;
        case "signOut":
          setUser(null);
          break;
        case "customOAuthState":
          setCustomState(data);
          break;
      }
    });



    Auth.currentAuthenticatedUser()
      .then(currentUser => setUser(currentUser))
      .catch(() => console.log("Not signed in"));

    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    const token = urlParams.get('access_token');

    if (token) {
      setAccessToken(token);
    }

    return unsubscribe;
  }, []);

  return (
    <div className="Login">
      <header className="Login-header">
        <div className="SignIn">
          <div>
            <button
              className="Google"
              onClick={() =>
                Auth.federatedSignIn({
                  provider: CognitoHostedUIIdentityProvider.Google
                })
              }
            >
              Login in
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Login;
