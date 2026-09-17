import type { RouteRecord } from "vite-react-ssg";
import Layout from "./Layout";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "privatuma-politika", element: <PrivacyPolicy /> },
    ],
  },
];
