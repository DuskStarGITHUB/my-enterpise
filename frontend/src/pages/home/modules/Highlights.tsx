/**
 * =====================================================
 *  NAME    : Highlights.tsx
 *  DATE      : 24/09/2025
 *  DATE_MODIFY       : 08/10/2025
 *  DESCRIPTION: CONTENT HIGHLIGHTS HOME PAGE
 * =====================================================
 */

// DEPENDENCIES
import React from "react";
import modularIcon from "/svg/modular-icon.svg";
import opensourceIcon from "/svg/opensource-icon.svg";
import groupIcon from "/svg/group-icon.svg";
import secureIcon from "/svg/secure-icon.svg";
import serverIcon from "/svg/server-icon.svg";
import AnimateOnScroll from "@/components/containers/AnimateOnScroll";

// LOGIC
type HighlightsProps = {
  t: (key: string) => string;
};

// HIGHLIGHTS COMPONENT
const Highlights: React.FC<HighlightsProps> = ({ t }) => {
  return (
    <section className="bg-gray-300 w-full text-black dark:bg-black dark:text-white min-h-[80vh] flex flex-col items-center px-6 justify-center">
      <AnimateOnScroll>
        <span className="h-full w-full flex flex-col items-center justify-center py-10">
          <h2 className="font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl lilita-one mb-12">
            {t("home.highlights")}
          </h2>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-10 sm:gap-12 md:gap-16 lg:gap-20 w-full max-w-6xl">
            <div className="flex flex-col items-center text-center space-y-4">
              <img
                src={modularIcon}
                alt="icon"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 dark:invert"
              />
              <p className="font-black font-[Montserrat] text-lg sm:text-xl md:text-2xl">
                Modular
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <img
                src={opensourceIcon}
                alt="icon"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 dark:invert"
              />
              <p className="font-black font-[Montserrat] text-lg sm:text-xl md:text-2xl">
                {t("home.open-source")}
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <img
                src={groupIcon}
                alt="icon"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 dark:invert"
              />
              <p className="font-black font-[Montserrat] text-lg sm:text-xl md:text-2xl">
                {t("home.i-t-c")}
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <img
                src={secureIcon}
                alt="icon"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 dark:invert"
              />
              <p className="font-black font-[Montserrat] text-lg sm:text-xl md:text-2xl">
                {t("home.secure")}
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <img
                src={serverIcon}
                alt="icon"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 dark:invert"
              />
              <p className="font-black font-[Montserrat] text-lg sm:text-xl md:text-2xl">
                {t("home.host")}
              </p>
            </div>
          </div>
        </span>
      </AnimateOnScroll>
    </section>
  );
};
export default Highlights;
