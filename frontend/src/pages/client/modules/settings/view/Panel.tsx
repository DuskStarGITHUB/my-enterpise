import type { FC } from "react";
import { Layout } from "@/components/layout/layout";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Panel: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Layout fixed>
        <Layout.Body>
          <div className="mb-2 flex items-center justify-between space-y-2">
            <h1 className="text-2xl font-bold tracking-tight">
              {t("settings-page.title")}
            </h1>
          </div>
          <div className="grid gap-10 p-5">
            <div className="col-1 row-1">
              <Card>
                <CardHeader>
                  <CardTitle>Window Preferencies</CardTitle>
                  <CardDescription>This card is a settings 1</CardDescription>
                </CardHeader>
                <CardContent>Content from card 1</CardContent>
              </Card>
            </div>
            <div className="col-2 row-1">
              <Card>
                <CardHeader>
                  <CardTitle>Card 2</CardTitle>
                  <CardDescription>This card is a setting 2</CardDescription>
                </CardHeader>
                <CardContent>Content from card 2</CardContent>
              </Card>
            </div>
          </div>
          <div className="row-2 w-full p-5 h-full">
            <Card>
              <CardHeader>
                <CardTitle>Card 3</CardTitle>
                <CardDescription>This card is a setting 2</CardDescription>
              </CardHeader>
              <CardContent>Content from card 3</CardContent>
            </Card>
          </div>
        </Layout.Body>
      </Layout>
    </>
  );
};

export default Panel;
