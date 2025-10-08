/**
 * =====================================================
 *  NAME    : Client.tsx
 *  DATE      : 07/10/2025
 *  DATE_MODIFY       : 07/10/2025
 *  DESCRIPTION: CLIENT AFTER LOGIN PAGE
 * =====================================================
 */

// DEPENDENCIES
import React from "react";

// LOGIC
type ClientProps = {
  t: (key: string) => string;
};

// PAGE
const Client: React.FC<ClientProps> = ({ t }) => {
  return (
    <main>
      <span>Client {t("global.language")}</span>
      <div className="flex w-scree h-screen border-2 items-center justify-center">
        hola
      </div>
    </main>
  );
};

export default Client;
