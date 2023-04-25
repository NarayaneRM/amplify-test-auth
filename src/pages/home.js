
import React, { useState, useContext } from 'react';
import { Amplify, Auth } from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css';
import awsconfig from '../aws-exports';
import '../styles/home.css';
import { UserContext, IDTokenContext } from '../services/hooks';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

function Home() {

  const [appi_is_called, setAppi_is_called] = useState(false);
  const user = useContext(UserContext);
  const idtoken = useContext(IDTokenContext);

  async function callApi() {
    console.log('Token id: ', idtoken);
    setAppi_is_called(true);
  }

  function handleLogout() {
    Auth.signOut()
      .catch((error) => console.log("Sign out error: ", error));
  }

  return (
    <div className="Home">
      <header className="Home-header">
        <button className="buttom" onClick={callApi}>
          Call API
        </button>
        <button className="buttom" onClick={handleLogout}>Log Out</button>
        {appi_is_called && <h2>API was called</h2>}
      </header>
    </div>
  );
}

export default Home;
