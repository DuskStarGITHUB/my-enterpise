/**
 * =====================================================
 *  NAME    : Client.tsx
 *  DATE      : 07/10/2025
 *  DATE_MODIFY       : 09/10/2025
 *  DESCRIPTION: CLIENT AFTER LOGIN PAGE
 * =====================================================
 */

// DEPENDENCIES
import Tag from "@/components/custom/Tag";
import { useTranslation } from "react-i18next";
import GridSelector from "@/components/containers/GridSelector";
import type { JSX } from "react";

// PAGE
const Client = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <span className="flex items-center justify-center h-screen w-screen">
      <GridSelector type="3-2">
        <Tag
          color="white"
          desing="full"
          text={t("global.language")}
          textType="bold"
        />
        <Tag
          color="black"
          desing="full"
          text={t("global.language")}
          textType="bold"
        />
        <Tag
          color="black"
          desing="full"
          text={t("global.language")}
          textType="bold"
        />
        <Tag
          color="black"
          desing="full"
          text={t("global.language")}
          textType="bold"
        />
        <Tag
          color="black"
          desing="full"
          text={t("global.language")}
          textType="bold"
        />
        <Tag
          color="black"
          desing="full"
          text={t("global.language")}
          textType="bold"
        />
      </GridSelector>
    </span>
  );
};
export default Client;
