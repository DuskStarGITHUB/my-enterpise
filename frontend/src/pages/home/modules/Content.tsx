/**
 * =====================================================
 *  NAME    : Content.tsx
 *  DATE      : 23/09/2025
 *  DATE_MODIFY       : 09/10/2025
 *  DESCRIPTION: CONTENT FOR HOME PAGE
 * =====================================================
 */

// DEPENDENCIES
import Section1 from "./Section1";
import Highlights from "./Highlights";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import NavBarSecondary from "@/components/main/NavBarSecondary";

// CONTENT
const Content = () => {
  return (
    <>
      <Section1 />
      <NavBarSecondary />
      <Highlights />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
};
export default Content;
