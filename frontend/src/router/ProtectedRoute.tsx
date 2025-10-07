/**
 * =====================================================
 *  NAME    : PrivateRouter.tsx
 *  DATE      : 27/09/2025
 *  DATE_MODIFY       : 07/10/2025
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
type ProtectedRouteProps = {
  children: React.ReactNode;
  requireBothTokens?: boolean;
};

// PRIVATE ROUTER
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requireBothTokens = false,
}) => {
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const validateToken = async (token: string) => {
    try {
      const res = await fetch("http://localhost:3001/auth/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "validate", data: token }),
      });
      if (!res.ok) throw new Error("Error validando token");
      const data = await res.json();
      return data.valid;
    } catch (err) {
      console.error(err);
      return false;
    }
  };
  useEffect(() => {
    const checkTokens = async () => {
      const access_token = localStorage.getItem("access_token");
      const r_token = localStorage.getItem("r_token");
      if (!access_token || !r_token) {
        setIsValid(false);
        return;
      }
      try {
        const accessDecoded: any = jwtDecode(access_token);
        const rDecoded: any = jwtDecode(r_token);
        const now = Date.now() / 1000;
        if (accessDecoded.exp < now || rDecoded.exp < now) {
          setIsValid(false);
          return;
        }
      } catch {
        setIsValid(false);
        return;
      }
      if (requireBothTokens) {
        const validAccess = await validateToken(access_token);
        const validR = await validateToken(r_token);
        setIsValid(validAccess && validR);
      } else {
        setIsValid(true);
      }
    };
    checkTokens();
  }, [requireBothTokens]);
  if (isValid === null) {
    return <Loading />;
  }
  if (!isValid) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};
export default ProtectedRoute;
