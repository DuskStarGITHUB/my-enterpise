/**
 * =====================================================
 *  NAME    : Client.tsx
 *  DATE      : 07/10/2025
 *  DATE_MODIFY       : 09/10/2025
 *  DESCRIPTION: CLIENT AFTER LOGIN PAGE
 * =====================================================
 */

// DEPENDENCIES
import GridSelector from "@/components/containers/GridSelector";
import { useTranslation } from "react-i18next";

// LOGIC

// PAGE
const Client = () => {
  const { t } = useTranslation();
  return (
    <>
      <GridSelector className="bg-accent-foreground">
        <span className="bg-black">Elemento</span>
        <GridSelector className="bg-gray-500">
          <span className="bg-black">Elemento</span>
          <span className="bg-black">Elemento</span>
        </GridSelector>
      </GridSelector>
    </>
  );
};

export default Client;
