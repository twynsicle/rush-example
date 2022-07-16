import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import { CircularProgress } from '@mui/material';
import ErrorBoundary from './utils/ErrorBoundary';
import RemotesProvider, { useRemotes } from './utils/Remotes';
import RemoteComponent from './utils/RemoteComponent';

export type RemoteModuleProps = {
  url: string;
  scope: string;
  module: string;
};

function App() {
  const [remotes, updateRemoteUrl] = useRemotes();
  updateRemoteUrl('app1', 'http://localhost:3001');
  updateRemoteUrl('app2', 'http://localhost:3002');

  return (
    <RemotesProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <Navigation />
                <Outlet />
              </div>
            }
          >
            <Route
              path="app1"
              element={<RemoteComponent fallback="Loading app1..." remote="app1" component="App" />}
            />
            <Route
              path="app2"
              element={<RemoteComponent fallback="Loading app2..." remote="app2" component="App" />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </RemotesProvider>
  );
}

export default App;
