/**
 * =====================================================
 *  NAME    : index.tsx
 *  DATE      : 20/09/2025
 *  DATE_MODIFY       : 08/10/2025
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
import Loading from "@/components/main/Loading";

// LOGIC
const Home = lazy(() => import("@/pages/home/home"));
const NotFoundPage = lazy(() => import("@/pages/not-found"));
const Login = lazy(() => import("@/pages/link/Login"));
const Register = lazy(() => import("@/pages/link/Register"));
const Client = lazy(() => import("@/pages/client/Client"));

// ROUTES
const CheckUser = () => {
  const { t } = useTranslation();
  const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");
  const routes = [
    {
      path: "/",
      element: hasVisitedBefore === "true" ? (
        <ProtectedRoute>
          <Client t={t} />
        </ProtectedRoute>
      ) : (
        <Home t={t} />
      ),
    },
    { path: "/me", element: <Home t={t} /> },
    {
      path: "/login",
      element: (
        <PublicRouter>
          <Login t={t} />
        </PublicRouter>
      ),
    },
    { path: "/register", element: <Register t={t} /> },
    { path: "*", element: <NotFoundPage t={t} /> },
  ];
  return useRoutes(routes);
};

// ROUTER
export const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <CheckUser />
    </Suspense>
  );
};

export default Router;