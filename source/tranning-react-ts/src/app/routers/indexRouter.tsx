// import RouterAbout from "../../RouterAbout";
import { lazy } from "react";
import RouterContact from "../../RouterContact";
import RouterHome from "../../RouterHome";
import Layout from "../components/Layout";

const RouterAbout = lazy(() => import("../../RouterAbout"));

export const indexRouter: any = {
    path: '',
    element: (
        <Layout />
    ),
    children: [
        { path: 'dashboard', element: <RouterHome /> },
        { path: 'about', element: <RouterAbout /> },
        // { path: '/contact/:username', element: <RouterContact /> },
        { path: 'contact', element: <RouterContact /> },
    ],
  };