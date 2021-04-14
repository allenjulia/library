import React from 'react'
import logo from './logo.svg';
import UpdateLibrary from './components/UpdateLibrary'
// import UpdateLibrary from './components/UpdateLibrary'
// import Library from './components/Library'
// import OrganizeLibrary from './components/OrganizeLibrary'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Library</h1>
      <UpdateLibrary/>
    </div>
  );
}

export default App;
