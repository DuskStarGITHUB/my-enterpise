/**
 * =====================================================
 *  NAME    : useService.tsx
 *  DATE    : 09/10/2025
 *  DESCRIPTION: CUSTOM HOOK TO ACCESS SERVICE DATA RESPONSE
 * =====================================================
 */

// DEPENDENCIES
import services from "@/services";

// LOGIC
interface ServiceHook {
  data: any;
  error: any;
  isLoading: boolean;
  getState: () => void;
}

// HOOK
const useService = (serviceName: string): ServiceHook => {
  const service = services[serviceName];
  if (!service) {
    throw new Error("Servicio no encontrado");
  }
  const endpointName = Object.keys(service.endpoints)[0];
  const endpoint = service.endpoints[endpointName];
  const useQuery = endpoint.useQuery;
  const { data, error, isLoading, refetch } = useQuery();
  const getState = () => {
    refetch();
  };
  return {
    data,
    error,
    isLoading,
    getState,
  };
};
export default useService;
