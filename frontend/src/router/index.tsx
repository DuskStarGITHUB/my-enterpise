/**
 * =====================================================
 *  NAME    : index.tsx
 *  DATE      : 20/09/2025
 *  DATE_MODIFY       : 27/09/25
 *  DESCRIPTION: ROUTER FOR REACT
 * =====================================================
 */

// DEPENDENCIES
import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import ProtectedRoute from "@/router/ProtectedRoute";
import PublicRouter from "@/router/PublicRouter";
import { useTranslation } from "react-i18next";
import "../assets/css/loading.css";
import Loading from "@/components/containers/Loading";

// LOGIC
const Home = lazy(() => import("@/pages/home/home"));
const NotFoundPage = lazy(() => import("@/pages/not-found"));
const Login = lazy(() => import("@/pages/link/Login"));
const Register = lazy(() => import("@/pages/link/Register"));
const App = lazy(() => import("@/pages/client/App"));

// ROUTES
export const Router = () => {
  const { t } = useTranslation();
  const routes = [
    { path: "/", element: <Home t={t} /> },
    {
      path: "/login",
      element: (
        <PublicRouter requireBothTokens={true}>
          <Login t={t} />
        </PublicRouter>
      ),
    },
    { path: "/register", element: <Register t={t} /> },
    {
      path: "/App",
      element: (
        <ProtectedRoute requireBothTokens={true}>
          <App />
        </ProtectedRoute>
      ),
    },
    { path: "*", element: <NotFoundPage t={t} /> },
  ];
  return <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>;
};
export default Router;
