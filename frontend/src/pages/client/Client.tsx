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

// PAGE
const Client = () => {
  const { t } = useTranslation();
  return (
    <span className="flex items-center justify-center h-screen w-screen">
      <GridSelector type="3-2">
      <Tag text={t("global.language")} color="white" desing="full" textType="bold" />
      <Tag text={t("global.language")} color="black" desing="full" textType="bold" />
      <Tag text={t("global.language")} color="black" desing="full" textType="bold" />
      <Tag text={t("global.language")} color="black" desing="full" textType="bold" />
      <Tag text={t("global.language")} color="black" desing="full" textType="bold" />
      <Tag text={t("global.language")} color="black" desing="full" textType="bold" />
      </GridSelector>
    </span>
  );
};
export default Client;
