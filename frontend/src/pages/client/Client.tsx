/**
 * =====================================================
 *  NAME    : Client.tsx
 *  DATE      : 07/10/2025
 *  DATE_MODIFY       : 09/10/2025
 *  DESCRIPTION: CLIENT AFTER LOGIN PAGE
 * =====================================================
 */

// DEPENDENCIES
import { useEffect } from "react";
import useService from "@/hooks/useService";

// PAGE
const Client = () => {
  const { data, error, isLoading, getState } = useService("stateService");
  useEffect(() => {
    if (!data) {
      getState();
    }
  }, []);
  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <h1>Hola</h1>
      <div>Estado: {JSON.stringify(data)}</div>
    </div>
  );
};

export default Client;
