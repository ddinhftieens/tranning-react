import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';

import './assets/css/spinner.css';
import { Navigate, useRoutes } from 'react-router-dom';
import NotPermission from './app/pages/error/NotPermission';
import Error500 from './app/pages/error/Error500';
import NotFound from './app/pages/error/NotFound';
import { ToastContainer } from 'react-toastify';
import { indexRouter } from './app/routers/indexRouter';

export const spinner = (
  <div className="progress-spinner text-center">
    <div className="swm-loader"></div>
  </div>
);

function App() {

  let router = useRoutes([
    { path: 'not-permission', element: <NotPermission /> }, //403
    { path: '/', element: <Navigate to="/dashboard" replace /> },
    indexRouter,
    { path: 'err-network', element: <Error500 /> }, //500
    { path: '*', element: <NotFound /> }, //404
  ]);

  return (
    <div>
      <ToastContainer></ToastContainer>
      <Suspense fallback={spinner}>{router}</Suspense>
    </div>
  );
}

export default App;
