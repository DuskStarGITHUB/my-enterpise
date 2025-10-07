/**
 * =====================================================
 *  NAME    : PublicRouter.tsx
 *  DATE      : 27/09/2025
 *  DATE_MODIFY       : 27/09/25
 *  DESCRIPTION: ROUTER VALIDATION FOR COMPONETS , DEFAULT FALSE BACKEND
 * =====================================================
 */

// DEPENDENCIES
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "../assets/css/loading.css";
import Loading from "@/components/containers/Loading";

// LOGIC
type Props = {
  children: React.ReactNode;
  requireBothTokens?: boolean;
};

// PUBLIC ROUTER
const PublicRouter: React.FC<Props> = ({
  children,
  requireBothTokens = false,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const validateToken = async (token: string) => {
    try {
      const res = await fetch("http://localhost:3001/auth/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "validate", data: token }),
      });
      if (!res.ok) return false;
      const data = await res.json();
      return data.valid;
    } catch {
      return false;
    }
  };
  useEffect(() => {
    const checkLogin = async () => {
      const access_token = localStorage.getItem("access_token");
      const r_token = localStorage.getItem("r_token");
      if (!access_token || !r_token) {
        setIsLoading(false);
        return;
      }
      try {
        const accessDecoded: any = jwtDecode(access_token);
        const rDecoded: any = jwtDecode(r_token);
        const now = Date.now() / 1000;
        if (accessDecoded.exp < now || rDecoded.exp < now) {
          setIsLoading(false);
          return;
        }
      } catch {
        setIsLoading(false);
        return;
      }
      if (requireBothTokens) {
        const validAccess = await validateToken(access_token);
        const validR = await validateToken(r_token);
        setIsLoggedIn(validAccess && validR);
      } else {
        setIsLoggedIn(true);
      }
      setIsLoading(false);
    };
    checkLogin();
  }, [requireBothTokens]);
  if (isLoading) return <Loading />;
  if (isLoggedIn) {
    return <Navigate to="/client" replace />;
  }
  return <>{children}</>;
};
export default PublicRouter;
