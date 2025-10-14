/**
 * =====================================================
 *  NAME    : Client.tsx
 *  DATE      : 07/10/2025
 *  DATE_MODIFY       : 14/10/2025
 *  DESCRIPTION: CLIENT AFTER LOGIN PAGE
 * =====================================================
 */

// DEPENDENCIES
import type { JSX } from "react";
import { useTranslation } from "react-i18next";
import GridSelector from "@/components/containers/GridSelector";
import Tag from "@/components/custom/Tag";

// PAGE
const Client = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <GridSelector
      className="w-screen h-screen"
      type={{ columns: ["20vw", "1fr"], rows: ["1fr"] }}
    >
      <div className="flex items-center justify-center bg-red-500 h-full">
        <Tag
          border="rounded"
          color="green"
          text={t("global.language")}
          textType="bold"
        />
      </div>
      <GridSelector
        className="h-full w-full"
        type={{ columns: ["1fr"], rows: ["10vh", "1fr"] }}
      >
        <div className="flex items-center justify-center bg-blue-500 h-full">
          <Tag
            border="rounded"
            color="green"
            text={t("global.language")}
            textType="bold"
          />
        </div>
        <div className="flex items-center justify-center bg-white h-full">
          <Tag
            border="rounded"
            color="green"
            text={t("global.language")}
            textType="bold"
          />
        </div>
      </GridSelector>
    </GridSelector>
  );
};
export default Client;
