/**
 * =====================================================
 *  NAME    : PublicRouter.tsx
 *  DATE      : 27/09/2025
 *  DATE_MODIFY       : 08/10/2025
 *  DESCRIPTION: ROUTER VALIDATION FOR COMPONETS , DEFAULT FALSE BACKEND
 * =====================================================
 */

// DEPENDENCIES
import React, { useEffect, useState, useRef } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "../assets/css/loading.css";
import Loading from "@/components/main/Loading";

// LOGIC
type Props = {
  children: React.ReactNode;
};

// PUBLIC ROUTE
const PublicRouter: React.FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const mountedRef = useRef(false);
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
    if (mountedRef.current) return;
    mountedRef.current = true;
    const checkLogin = async () => {
      const access_token = localStorage.getItem("access_token");
      const r_token = localStorage.getItem("r_token");
      if (location.pathname === "/login") {
        if (access_token && r_token) {
          try {
            const accessDecoded: any = jwtDecode(access_token);
            const rDecoded: any = jwtDecode(r_token);
            const now = Date.now() / 1000;
            if (rDecoded.exp < now) {
              setIsLoggedIn(false);
            } else if (accessDecoded.exp < now) {
              try {
                const res = await fetch("http://localhost:3001/auth/action", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ action: "refresh", data: r_token }),
                });
                const data = await res.json();
                localStorage.setItem("access_token", data.access_token);
                localStorage.setItem("r_token", data.r_token);
                const validAccess = await validateToken(data.access_token);
                const validR = await validateToken(data.r_token);
                console.log("RELOAD SESSION");
                setIsLoggedIn(validAccess && validR);
              } catch (err) {
                console.error(err);
                setIsLoggedIn(false);
              }
            } else {
              const validAccess = await validateToken(access_token);
              const validR = await validateToken(r_token);
              setIsLoggedIn(validAccess && validR);
            }
          } catch {
            setIsLoggedIn(false);
          }
        } else {
          localStorage.setItem("hasVisitedBefore", "false");
          setIsLoggedIn(false);
        }
      } else {
        if (!access_token || !r_token) {
          setIsLoggedIn(false);
        } else {
          try {
            const accessDecoded: any = jwtDecode(access_token);
            const rDecoded: any = jwtDecode(r_token);
            const now = Date.now() / 1000;
            if (rDecoded.exp < now) {
              setIsLoggedIn(false);
            } else if (accessDecoded.exp < now) {
              try {
                const res = await fetch("http://localhost:3001/auth/action", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ action: "refresh", data: r_token }),
                });
                const data = await res.json();
                localStorage.setItem("access_token", data.access_token);
                localStorage.setItem("r_token", data.r_token);
                console.log("RELOAD SESSION");
                setIsLoggedIn(true);
              } catch (err) {
                console.error(err);
                setIsLoggedIn(false);
              }
            } else {
              const validAccess = await validateToken(access_token);
              const validR = await validateToken(r_token);
              setIsLoggedIn(validAccess && validR);
            }
          } catch {
            setIsLoggedIn(false);
          }
        }
      }
      setIsLoading(false);
    };
    checkLogin();
  }, [location]);
  if (isLoading) return <Loading />;
  if (location.pathname === "/login" && isLoggedIn) {
    localStorage.setItem("hasVisitedBefore", "true");
    return <Navigate to="/" replace />;
  }
  if (location.pathname !== "/login" && !isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};
export default PublicRouter;
