
// import RouterAbout2 from "../../RouterAbout2";
import { lazy } from "react";
import RouterContact2 from "../../RouterContact2";
import RouterHome2 from "../../RouterHome2";
import Layout2 from "../components/Layout2";
import AuthGuard from "../guard/AuthGuard";
import RoleGuard from "../guard/RoleGuard";
import { settRouter } from "./settRouter";

const RouterAbout2 = lazy(() => import("../../RouterAbout2"));

export const indexRouter2: any = {
    path: '',
    element: (
        <AuthGuard>
            <Layout2 />
        </AuthGuard>
    ),
    children: [
        { path: 'dashboard', element: <RoleGuard role="R000,R001"><RouterHome2 /></RoleGuard> },
        { path: 'about', element: <RoleGuard role="R001"><RouterAbout2 /></RoleGuard> },
        { path: 'contact/:username', element: <RoleGuard role="R000"><RouterContact2 /></RoleGuard> },
        { ...settRouter },
        // add router module
    ],
};