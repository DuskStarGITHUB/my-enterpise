/**
 * =====================================================
 *  NAME    : Section3.tsx
 *  DATE      : 25/09/2025
 *  DATE_MODIFY       : 09/10/2025
 *  DESCRIPTION: SECTION 3 FOR HOME PAGE
 * =====================================================
 */

// DEPENDENCIES
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Layers, Code2, Users, ShieldCheck, Server } from "lucide-react";
import AnimateOnScroll from "@/components/containers/AnimateOnScroll";
import { useTranslation } from "react-i18next";

const iconMap = {
  card1: <Layers className="w-10 h-10 text-primary" />,
  card2: <Code2 className="w-10 h-10 text-primary" />,
  card3: <Users className="w-10 h-10 text-primary" />,
  card4: <ShieldCheck className="w-10 h-10 text-primary" />,
  card5: <Server className="w-10 h-10 text-primary" />,
};

// SECTION 3
const Section3 = () => {
  const { t } = useTranslation();
  const cards = ["card1", "card2", "card3", "card4", "card5"];
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 200); // 200ms entre tarjetas
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-white text-black dark:bg-black dark:text-white grid gap-6 w-full px-6 lg:px-20 py-12"
    >
      <div className="flex flex-col text-center items-center space-y-8 z-10 w-full h-full">
        <AnimateOnScroll>
          <h4 className="font-bold text-3xl sm:text-4xl lg:text-6xl">
            {t("home.text-5")}
          </h4>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <p className="text-base sm:text-lg lg:text-2xl font-light max-w-3xl">
            {t("home.text-6")}
          </p>
        </AnimateOnScroll>
      </div>
      <div className="w-full overflow-hidden">
        <Carousel className="w-full max-w-6xl mx-auto relative">
          <CarouselContent className="-ml-2 flex gap-6 max-h-full">
            {cards.map((cardKey, index) => (
              <CarouselItem
                key={index}
                className="pl-2 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div
                  className={`p-2 h-full transition-all duration-700 ease-out transform ${
                    visibleCards.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <Card className="h-full shadow-lg hover:shadow-xl rounded-2xl">
                    <CardContent className="flex flex-col items-start justify-start p-6 space-y-4">
                      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10">
                        {iconMap[cardKey as keyof typeof iconMap]}
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold">
                        {t(`home.${cardKey}-title`)}
                      </h4>
                      <p className="text-sm sm:text-base lg:text-lg font-light">
                        {t(`home.${cardKey}-text`)}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-20 hover:cursor-pointer dark:hover:bg-black" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-20 hover:cursor-pointer dark:hover:bg-black" />
        </Carousel>
      </div>
    </section>
  );
};
export default Section3;
