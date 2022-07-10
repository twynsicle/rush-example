import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
