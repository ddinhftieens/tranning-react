import Layout from "../components/layout/Layout";
import Dashboard from "../pages/Dashboard";

export const indexRouter: any = {
    path: '/',
    element: (
        <Layout />
    ),
    children: [
      { path: '/dashboard', element: <Dashboard /> },
    ],
  };