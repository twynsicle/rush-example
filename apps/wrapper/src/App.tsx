import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import { CircularProgress } from '@mui/material';
import ErrorBoundary from './ErrorBoundary';

const App1 = React.lazy(() => import('app1/App1'));
const App2 = React.lazy(() => import('app2/App2'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <div>test3</div>
              <Navigation />
              <Outlet />
            </div>
          }
        >
          <Route
            path="app1"
            element={
              <React.Suspense fallback={<CircularProgress />}>
                <ErrorBoundary>
                  <App1 />
                </ErrorBoundary>
              </React.Suspense>
            }
          />
          <Route
            path="app2"
            element={
              <React.Suspense fallback={<CircularProgress />}>
                <ErrorBoundary>
                  <App2 />
                </ErrorBoundary>
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
