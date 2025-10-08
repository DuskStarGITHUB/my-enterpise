/**
 * =====================================================
 *  NAME    : Content.tsx
 *  DATE      : 23/09/2025
 *  DATE_MODIFY       : 08/10/2025
 *  DESCRIPTION: CONTENT FOR HOME PAGE
 * =====================================================
 */

// DEPENDENCIES
import React from "react";
import Section1 from "./Section1";
import Highlights from "./Highlights";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import NavBarSecondary from "@/components/main/NavBarSecondary";

// LOGIC
type ContentProps = {
  t: (key: string) => string;
};

// CONTENT
const Content: React.FC<ContentProps> = ({ t }) => {
  return (
    <>
      <Section1 t={t} />
      <NavBarSecondary t={t} />
      <Highlights t={t} />
      <Section2 t={t} />
      <Section3 t={t} />
      <Section4 t={t} />
    </>
  );
};
export default Content;
