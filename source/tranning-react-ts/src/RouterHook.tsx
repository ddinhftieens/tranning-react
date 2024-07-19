import React, { Suspense } from 'react'
import { Navigate, useRoutes } from 'react-router-dom';
import Error500 from './Error500';
import NotFound from './NotFound';
import { indexRouter } from './app/routers/indexRouter';
import NotPermission from './NotPermission';

export const spinner = (
    <div className="progress-spinner text-center">
      <div className="swm-loader"></div>
    </div>
  );

export default function RouterHook() {

    let router = useRoutes([
        { path: 'not-permission', element: <NotPermission /> }, //403
        { path: '/', element: <Navigate to="/dashboard" replace /> },
        indexRouter,
        { path: 'err-network', element: <Error500 /> }, //500
        { path: '*', element: <NotFound /> }, //404
      ]);

    return (
        <div>
            <Suspense fallback={spinner}>{router}</Suspense>
        </div>
    )
}
