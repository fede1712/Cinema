import React from 'react'

import { NavBar } from './Layout/NavBar/NavBar';
import { PublicRoutes } from './Layout/Routes/Index';

function App() {
  return (
    <div className="App">
      <NavBar />
      <PublicRoutes />
    </div>
  );
}

export default App;
