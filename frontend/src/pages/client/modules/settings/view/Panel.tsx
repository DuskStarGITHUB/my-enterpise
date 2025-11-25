/* eslint-disable no-duplicate-imports */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { FC } from "react";
import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/layout";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ThemeSelector } from "@/components/custom/themeselectors";
import ButtonLang from "@/components/main/ButtonLang";

const Panel: FC = () => {
  const { t } = useTranslation();
  const [activeModules, setActiveModules] = useState<Array<string>>([]);
  useEffect(() => {
    const modulesFromStorage = localStorage.getItem("activeModules");
    const modulesArray = modulesFromStorage
      ? modulesFromStorage.split(",").filter((m) => m.trim() !== "")
      : [];
    setActiveModules(modulesArray);
  }, []);
  const handleModuleRemove = (moduleToRemove: string) => {
    const updatedModules = activeModules.filter(
      (module) => module !== moduleToRemove
    );
    setActiveModules(updatedModules);
    if (updatedModules.length === 0) {
      localStorage.removeItem("activeModules");
    } else {
      localStorage.setItem("activeModules", updatedModules.join(","));
    }
    window.location.reload();
  };
  return (
    <>
      <Layout fixed>
        <Layout.Body>
          <div className="mb-2 flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">
              {t("settings-page.title")}
            </h1>
          </div>
          <div className="grid gap-10 p-5">
            <div className="col-1 row-1">
              <Card>
                <CardHeader>
                  <CardTitle>{t("settings-page.card-title1")}</CardTitle>
                  <CardDescription>
                    {t("settings-page.card-sub1")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 w-full aling-center object-center justify-center flex">
                  <div className="grid gap-x-5 gap-y-2 mb-5">
                    <div className="flex gap-3 m-2 col-1 row-1">
                      <Checkbox id="x" />
                      <Label htmlFor="x">Text of checkbox setting</Label>
                    </div>
                    <div className="flex items-center gap-3 m-2 col-2 row-1">
                      <Checkbox id="x" />
                      <Label htmlFor="x">Text of checkbox setting</Label>
                    </div>
                    <div className="flex items-center gap-3 m-2 col-1 row-2">
                      <Checkbox id="x" />
                      <Label htmlFor="x">Text of checkbox setting</Label>
                    </div>
                    <div className="flex items-center gap-3 m-2 col-2 row-2">
                      <Checkbox id="x" />
                      <Label htmlFor="x">Text of checkbox setting</Label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="col-2 row-1">
              <Card>
                <CardHeader>
                  <CardTitle>{t("settings-page.card-title2")}</CardTitle>
                  <CardDescription>
                    {t("settings-page.card-sub2")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 w-full aling-center object-center justify-center flex">
                  <div className="grid gap-x-5 gap-y-2 mb-5">
                    <div className="flex gap-3 m-2 col-1 row-1">
                      <Checkbox id="x" />
                      <Label htmlFor="x">Text of checkbox setting</Label>
                    </div>
                    <div className="flex items-center gap-3 m-2 col-2 row-1">
                      <Checkbox id="x" />
                      <Label htmlFor="x">Text of checkbox setting</Label>
                    </div>
                    <div className="flex items-center gap-3 m-2 col-1 row-2">
                      <Checkbox id="x" />
                      <Label htmlFor="x">Text of checkbox setting</Label>
                    </div>
                    <div className="flex items-center gap-3 m-2 col-2 row-2">
                      <Checkbox id="x" />
                      <Label htmlFor="x">Text of checkbox setting</Label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="row-2 w-full p-5 h-full">
            <Card>
              <CardHeader>
                <CardTitle>{t("settings-page.card-title3")}</CardTitle>
                <CardDescription>
                  {t("settings-page.card-sub3")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {" "}
                <Accordion
                  collapsible
                  className="w-full"
                  defaultValue="item-1"
                  type="single"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      {t("settings-page.card-sub4")}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <div className="grid w-full">
                        {activeModules.length === 0 ? (
                          <p className="text-center text-muted-foreground p-4">
                            {t("settings-page.card-sub5")}
                          </p>
                        ) : (
                          activeModules.map((module, index) => {
                            const columnClass = `col-${(index % 3) + 1}`;
                            return (
                              <p key={module} className={columnClass}>
                                <span className="flex items-center gap-3 m-2">
                                  <Checkbox
                                    checked
                                    id={`module-${module}`}
                                    onCheckedChange={() => {
                                      handleModuleRemove(module);
                                    }}
                                  />
                                  <Label htmlFor={`module-${module}`}>
                                    {module.trim()}
                                  </Label>
                                </span>
                              </p>
                            );
                          })
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Application View</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <div className="flex flex-col pb-0 p-4">
                      <ButtonLang className="rounded-none border-b-2 border-primary hover:bg-transparent hover:text-white" />
                      </div>
                      <ThemeSelector />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </Layout.Body>
      </Layout>
    </>
  );
};

export default Panel;
