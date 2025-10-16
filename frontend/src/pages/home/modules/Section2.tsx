/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/**
 * =====================================================
 *  NAME    : Section2.tsx
 *  DATE      : 24/09/2025
 *  DATE_MODIFY       : 16/10/2025
 *  DESCRIPTION: SECTION 2 FOR HOME PAGE
 * =====================================================
 */

// DEPENDENCIES
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "@/components/containers/AnimateOnScroll";
import { useTranslation } from "react-i18next";

// SECTION 2
const Section2 = () => {
  const { t } = useTranslation();
  return (
    <section className="flex min-h-dvh w-full sm:grid sm:grid-cols-2 z-1 items-center bg-background p-15">
      <article className="p-10 flex flex-col justify-center text-start items-start lg:p-20 space-y-4 z-2 min-h-dvh w-full text-black dark:text-white">
        <h3 className="font-bold lg:text-6xl text-justify">
          {t("home.text-3")}
        </h3>
        <p className="lg:text-2xl font-light text-justify">
          {t("home.text-4")}
        </p>
        <Button
          className="hover:cursor-pointer rounded px-10 md-4 lg:px-20 lg:py-7 font-bold text-black text-3xl bg-primary dark:text-white"
          onClick={() => (window.location.href = "/")}
        >
          {t("words.view")}
        </Button>
      </article>
      <div className="hidden h-full p-20 z-1 sm:flex items-center">
        <span>
          <AnimateOnScroll>
            <img
              alt="image"
              className="hidden sm:block sm:h-full object-contain dark:invert-100 z-0"
              src="/img/img-1.png"
            />
          </AnimateOnScroll>
        </span>
      </div>
    </section>
  );
};
export default Section2;
