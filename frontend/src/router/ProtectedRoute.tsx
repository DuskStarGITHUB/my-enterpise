/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-duplicate-imports */
/**
 * =====================================================
 *  NAME    : PrivateRouter.tsx
 *  DATE      : 27/09/2025
 *  DATE_MODIFY       : 13/10/2025
 *  DESCRIPTION: ROUTER VALIDATION FOR COMPONETS , DEFAULT FALSE BACKEND
 * =====================================================
 */

// DEPENDENCIES
import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "../assets/css/loading.css";
import Loading from "@/components/main/Loading";

// LOGIC
type ProtectedRouteProps = {
  children: React.ReactNode;
};

// PRIVATE ROUTE
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [tokensLoaded, setTokensLoaded] = useState(false);
  const mountedRef = useRef(false);
  const validateToken = async (token: string) => {
    try {
      const res = await fetch("http://localhost:3001/auth/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "validate", data: token }),
      });
      if (!res.ok) throw new Error("TOKEN ERROR");
      const data = await res.json();
      return data.valid;
    } catch (err) {
      console.error(err);
      localStorage.setItem("hasVisitedBefore", "false");
      return false;
    }
  };
  useEffect(() => {
    if (mountedRef.current) return;
    mountedRef.current = true;
    const checkTokens = async () => {
      const access_token = localStorage.getItem("access_token");
      const r_token = localStorage.getItem("r_token");
      if (!access_token || !r_token) {
        setIsValid(false);
        setTokensLoaded(true);
        return;
      }
      try {
        const accessDecoded: unknown = jwtDecode(access_token);
        const rDecoded: unknown = jwtDecode(r_token);
        const now = Date.now() / 1000;
        if (rDecoded.exp < now) {
          setIsValid(false);
          setTokensLoaded(true);
          return;
        }
        if (accessDecoded.exp < now) {
          try {
            const res = await fetch("http://localhost:3001/auth/action", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ action: "refresh", data: r_token }),
            });
            const data = await res.json();
            try {
              localStorage.setItem("access_token", data.access_token);
              localStorage.setItem("r_token", data.r_token);
              const validAccess = await validateToken(data.access_token);
              const validR = await validateToken(data.r_token);
              setIsValid(validAccess && validR);
              setTokensLoaded(true);
              console.log("RELOAD SESSION");
              return;
            } catch (err) {
              console.log(err);
              setIsValid(false);
              setTokensLoaded(true);
              return;
            }
          } catch (err) {
            console.error(err);
            setIsValid(false);
            setTokensLoaded(true);
            return;
          }
        }
      } catch {
        setIsValid(false);
        setTokensLoaded(true);
        return;
      }
      const validAccess = await validateToken(access_token);
      const validR = await validateToken(r_token);
      setIsValid(validAccess && validR);
      setTokensLoaded(true);
    };
    void checkTokens();
  }, []);
  if (!tokensLoaded) {
    return <Loading />;
  }
  if (!isValid) {
    return <Navigate replace to="/login" />;
  }
  return <>{children}</>;
};
export default ProtectedRoute;
