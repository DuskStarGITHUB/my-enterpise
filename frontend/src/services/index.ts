/**
 * =====================================================
 *  NAME    : index.ts
 *  DATE      : 20/09/2025
 *  DATE_MODIFY       : 13/10/2025
 *  DESCRIPTION: SERVICE STATE BACKEND
 * =====================================================
 */

// DEPENDENCIES
import { jsonService } from "./jsonService";
import stateService from "./stateService";

// LOGIC
interface Services {
  [key: string]: unknown;
}

// SERVICES USE LIST
const services: Services = {
  jsonService,
  stateService,
};

export default services;
