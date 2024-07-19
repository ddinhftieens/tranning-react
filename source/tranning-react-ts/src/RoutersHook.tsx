import React, { Suspense } from 'react'
import { Navigate, useRoutes } from 'react-router-dom';
import NotPermission from './NotPermission';
import { indexRouter2 } from './app/routers/indexRouter2';
import Error500 from './Error500';
import NotFound from './NotFound';
import Home from './Home';

export const spinner = (
    <div className="progress-spinner text-center">
        <div className="swm-loader"></div>
    </div>
);

export default function RoutersHook() {
    let router = useRoutes([
        { path: 'not-permission', element: <NotPermission /> }, //403
        { path: '', element: <Navigate to="/dashboard" replace /> },
        indexRouter2,
        { path: 'err-network', element: <Error500 /> }, //500
        {path: 'home', element: <Home />},
        { path: '*', element: <NotFound /> }, //404
    ]);

    return (
        <div>
            <Suspense fallback={spinner}>{router}</Suspense>
        </div>
    )
}
