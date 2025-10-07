/**
 * =====================================================
 *  NAME    : Section2.tsx
 *  DATE      : 24/09/2025
 *  DATE_MODIFY       : 27/09/2025
 *  DESCRIPTION: SECTION 2 FOR HOME PAGE
 * =====================================================
 */

// DEPENDENCIES
import React from "react";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "@/components/containers/AnimateOnScroll";

// LOGIC
type Section2Props = {
  t: (key: string) => string;
};

// SECTION 2
const Section2: React.FC<Section2Props> = ({ t }) => {
  return (
    <section className="flex min-h-dvh w-full bg-gray-950 dark:bg-black sm:grid sm:grid-cols-2 border-blur z-1 items-center">
      <article className="p-10 flex flex-col justify-center text-start items-start lg:p-20 space-y-4 dark:bg-white/10 z-2 min-h-dvh w-full">
        <h3 className="font-bold lg:text-6xl">{t("home.text-3")}</h3>
        <p className="lg:text-2xl font-light">{t("home.text-4")}</p>
        <Button
          onClick={() => (window.location.href = "/")}
          className="hover:cursor-pointer rounded bg-accent px-10 md-4 lg:px-20 lg:py-7 font-bold text-3xl dark:bg-black"
        >
          {t("words.view")}
        </Button>
      </article>
      <div className="hidden h-full p-20 bg-gray-950 dark:bg-white/10 z-1 sm:flex items-center">
        <div>
          <AnimateOnScroll>
            <img
              src="/img/img-1.png"
              alt="image"
              className="hidden sm:block sm:h-full object-contain dark:invert-90 dark:opacity-60"
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};
export default Section2;
