import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './utils/ErrorBoundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { CircularProgress } from '@mui/material';
//
// const App1 = React.lazy(() => import('app1/App'));
// const App2 = React.lazy(() => import('app2/App'));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
