/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/**
 * =====================================================
 *  NAME    : Section1.tsx
 *  DATE      : 24/08/2025
 *  DATE_MODIFY       : 13/10/2025
 *  DESCRIPTION: CONTENT SECTION 1 HOME PAGE
 * =====================================================
 */

// DEPENDENCIES
import { useNavigate } from "react-router-dom";
import ButtonLang from "@/components/main/ButtonLang";
import ButtonTheme from "@/components/main/ButtonTheme";
import AnimateOnScroll from "@/components/containers/AnimateOnScroll";
import { useTranslation } from "react-i18next";

// SECTION 1
const Section1 = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <AnimateOnScroll>
      <section className="relative h-screen w-full flex flex-col justify-center p-6">
        <div className="grid grid-cols-2">
          <article className="relative text-left p-4 sm:p-6 max-w-full sm:max-w-3xl left-0 sm:left-1/12 2xl:left-2/10">
            <h1 className="mb-4 text-3xl sm:text-4xl md:text-6xl font-[Montserrat] font-medium">
              {t("home.text-1")}
            </h1>
            <p className="mb-8 text-xl sm:text-2xl md:text-4xl font-light">
              {t("home.text-2")}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
              <button
                className="w-full sm:w-auto rounded bg-accent px-4 py-2 font-medium text-black dark:bg-gray-950 hover:cursor-pointer hover:dark:bg-black dark:text-white"
                onClick={() => navigate("/login")}
              >
                {t("words.login")}
              </button>
              <button
                className="w-full sm:w-auto rounded border-2 px-4 py-2 font-medium border-white hover:cursor-pointer hover:border-gray-800"
                onClick={() => navigate("/register")}
              >
                {t("words.register")}
              </button>
            </div>
          </article>
          <div className="flex items-center justify-center">
            <div className="honeycomb hidden sm:block">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <ButtonTheme />
          <ButtonLang className="hover:bg-transparent hover:cursor-pointer" />
        </div>
      </section>
    </AnimateOnScroll>
  );
};
export default Section1;
