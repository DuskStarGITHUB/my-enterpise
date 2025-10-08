/**
 * =====================================================
 *  NAME    : Footer.tsx
 *  DATE      : 25/09/2025
 *  DATE_MODIFY       : 25/09/2025
 *  DESCRIPTION: FOOTER WEB
 * =====================================================
 */

// DEPENDENCIES
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Twitter, CircleCheckBig } from "lucide-react";

// LOGIC
type FooterProps = {
  t: (key: string) => string;
};

// FOOTER
const Footer: React.FC<FooterProps> = ({t}) => {
  const currentYear = new Date().getFullYear();
  const companyInfo = {
    name: "My Enterpise",
    description:
      `${t("footer.slogan")}`
  };
  const socialLinks = [
    { icon: Github, href: "/", label: "GitHub" },
    { icon: Twitter, href: "/", label: "Twitter" },
    {
      icon: CircleCheckBig,
      href: "https://github.com/DuskStarGITHUB/my-enterpise/wiki",
      label: "Wiki",
    },
  ];
  return (
    <footer className="w-full bg-white dark:bg-black">
      <Card className="w-full bg-transparent border-none rounded-none">
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div className="flex flex-col gap-2">
            <h5 className="text-2xl font-bold text-black dark:text-white">
              {companyInfo.name}
            </h5>
            <p className="text-black/80 dark:text-white/70 text-sm md:text-base">
              {companyInfo.description}
            </p>
          </div>
          <div className="flex gap-4 justify-start md:justify-end items-center">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 hover:bg-white/10 dark:hover:bg-white/20 transition-colors rounded-md"
              >
                <Icon className="w-6 h-6 text-black dark:text-white" />
              </a>
            ))}
          </div>
        </CardContent>
        <div className="border-t border-black/20 dark:border-white/20" />
        <div className="text-center text-black/70 dark:text-white/50 text-sm py-4">
          © {currentYear} {companyInfo.name}. All rights reserved.
        </div>
      </Card>
    </footer>
  );
};
export default Footer;
