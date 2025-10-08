/**
 * =====================================================
 *  NAME    : Section4.tsx
 *  DATE      : 25/09/2025
 *  DATE_MODIFY       : 08/10/2025
 *  DESCRIPTION: SECTION 3 FOR HOME PAGE
 * =====================================================
 */

// DEPENDENCIES
import React from "react";
import { Check } from "lucide-react";
import AnimateOnScroll from "@/components/containers/AnimateOnScroll";

// LOGIC
type Section4Props = {
  t: (key: string) => string;
};

// SECTION 4
const Section4: React.FC<Section4Props> = ({ t }) => {
  const frontendArray = [
    "TypeScript",
    "React",
    "Vite",
    "Tailwind CSS",
    "ShadCN/ui",
    "Storybook",
    "ReactRouter",
    "RTK Query",
    "Zod",
    "React Testing Library",
    "Vitest",
    "Playwright",
    "react-i18next",
  ];
  const backendArray = [
    "NestJS",
    "Node.js",
    "Express",
    "ESLint",
    "Prettier",
    "ts-reset",
    "Husky + Commitizen + Commitlint",
    "Docker",
    "Prisma",
  ];
  const databaseArray = ["PHPMyAdmin", "MariaDB", "MySQL", "Redis"];
  const renderTechList = (array: string[]) => (
    <ul className="space-y-2">
      {array.map((tech) => (
        <li
          key={tech}
          className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
        >
          <Check className="w-4 h-4 text-accent" />
          <p className="text-sm md:text-base">{tech}</p>
        </li>
      ))}
    </ul>
  );
  return (
    <section className="h-full w-full relative">
      <img
        src="/img/bg-web2.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <span className="p-15 h-full w-full flex flex-col items-center justify-center bg-black/10 dark:bg-black/80 backdrop-blur-sm">
        <span className="relative z-10 max-w-6xl w-full px-6 py-16 bg-white/10 rounded-xl shadow-2xl">
          <div className="text-center mb-12">
            <h5 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("home.text-7")}
            </h5>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="p-6 bg-white/20 rounded-xl shadow-lg hover:bg-white/30 transition-all">
              <h6 className="font-semibold text-white mb-4 text-lg md:text-xl">
                Frontend
              </h6>
              <AnimateOnScroll>{renderTechList(frontendArray)}</AnimateOnScroll>
            </article>
            <article className="p-6 bg-white/20 rounded-xl shadow-lg hover:bg-white/30 transition-all">
              <h6 className="font-semibold text-white mb-4 text-lg md:text-xl">
                Backend
              </h6>
              <AnimateOnScroll>{renderTechList(backendArray)}</AnimateOnScroll>
            </article>
            <article className="p-6 bg-white/20 rounded-xl shadow-lg hover:bg-white/30 transition-all">
              <h6 className="font-semibold text-white mb-4 text-lg md:text-xl">
                Database
              </h6>
              <AnimateOnScroll>{renderTechList(databaseArray)}</AnimateOnScroll>
            </article>
          </div>
        </span>
      </span>
    </section>
  );
};

export default Section4;
