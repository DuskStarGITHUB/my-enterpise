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
  const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");
  const routes = [
    {
      path: "/",
      element:
        hasVisitedBefore === "true" ? (
          <ProtectedRoute>
            <Client />
          </ProtectedRoute>
        ) : (
          <Home />
        ),
    },
    { path: "/me", element: <Home /> },
    {
      path: "/login",
      element: (
        <PublicRouter>
          <Login />
        </PublicRouter>
      ),
    },
    { path: "/register", element: <Register /> },
    { path: "*", element: <NotFoundPage /> },
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
