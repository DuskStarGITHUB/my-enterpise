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
    <>
      <div>Client {t("global.language")}</div>
    </>
  );
};

export default Client;
