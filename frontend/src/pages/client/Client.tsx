/**
 * =====================================================
 *  NAME    : Client.tsx
 *  DATE      : 07/10/2025
 *  DATE_MODIFY       : 08/10/2025
 *  DESCRIPTION: CLIENT AFTER LOGIN PAGE
 * =====================================================
 */

// DEPENDENCIES
import React from "react";
import GridSelector from "@/components/containers/GridSelector";
// LOGIC
type ClientProps = {
  t: (key: string) => string;
};

// PAGE
const Client: React.FC<ClientProps> = ({ t }) => {
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
