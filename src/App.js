import React from 'react';
import './styles/globals.css';
import Routing from './services/routes.js';
import { UserContextProvider } from './services/hooks';

function App() {
  return (
    <UserContextProvider>
      <Routing />
    </UserContextProvider>
  );
}

export default App;