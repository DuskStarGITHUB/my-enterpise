/**
 * =====================================================
 *  NAME    : Client.tsx
 *  DATE      : 07/10/2025
 *  DATE_MODIFY       : 13/10/2025
 *  DESCRIPTION: CLIENT AFTER LOGIN PAGE
 * =====================================================
 */

// DEPENDENCIES
import Tag from "@/components/custom/Tag";
import { useTranslation } from "react-i18next";
import type { JSX } from "react";

// PAGE
const Client = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <span className="flex items-center justify-center h-screen w-screen">
      <Tag border="rounded" color="green" text={t("global.language")} textType="bold" />
    </span>
  );
};
export default Client;
