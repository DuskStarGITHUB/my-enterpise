/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
"use client";

/**
 * =====================================================
 *  NAME    : Login.tsx
 *  DATE      : 27/09/2025
 *  DATE_MODIFY       : 13/10/2025
 *  DESCRIPTION: LOGIN PAGE
 * =====================================================
 */

// DEPENDENCIES
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { User, Lock, Gavel } from "lucide-react";
import { useTranslation } from "react-i18next";

// PAGE
const Login = () => {
  const { t } = useTranslation();
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 50);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  const loginSchema = z.object({
    email: z.string().email({ message: t("login.emailInvalid") }),
    password: z.string().min(6, { message: t("login.passwordMinLength") }),
  });
  type LoginFormValues = z.infer<typeof loginSchema>;
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (values: LoginFormValues) => {
    const body = {
      action: "login",
      data: {
        email: values.email,
        password: values.password,
      },
    };
    try {
      const res = await fetch("http://localhost:3001/auth/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok)
        throw new Error(data.message || "SOMETHING HAPPENED, TRY LATER");
      console.table(data);
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("r_token", data.r_token);
      localStorage.setItem("hasVisitedBefore", "true");
      window.location.href = "/";
    } catch (error: unknown) {
      console.error(error);
      const message = error instanceof Error ? error.message : String(error);
      alert(message);
    }
  };
  const handleRegisterClick = () => {
    window.location.href = "/register";
  };
  return (
    <section className=" min-h-screen flex items-center justify-center px-4">
      <span
        className={`w-full max-w-md transform transition-opacity duration-800 ease-out ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <Form {...form}>
          <form
            className="space-y-6 p-8 rounded-3xl shadow-xl sm:p-10 border-border border-2"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <h1 className="text-3xl font-extrabold text-center">
              {t("login.title")}
            </h1>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>{t("login.emailLabel")}</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder={t("login.emailPlaceholder")}
                        {...field}
                        className="pl-10"
                      />
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>{t("login.passwordLabel")}</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder={t("login.passwordPlaceholder")}
                        type="password"
                        {...field}
                        className="pl-10"
                      />
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    {t("login.passwordDescription")}
                  </FormDescription>
                </FormItem>
              )}
            />
            <Button
              className="w-full py-3 text-lg font-semibold cursor-pointer"
              type="submit"
            >
              {t("login.submitButton")}
            </Button>
            <div className="flex items-center my-4">
              <span className="flex-grow h-px bg-gray-300"></span>
              <span className="mx-2 text-gray-500 font-medium">o</span>
              <span className="flex-grow h-px bg-gray-300"></span>
            </div>
            <Button
              className="w-full py-3 flex items-center justify-center gap-2 cursor-pointer"
              type="button"
              variant="outline"
              onClick={handleRegisterClick}
            >
              <Gavel className="w-5 h-5" />
              {t("login.register")}
            </Button>
          </form>
        </Form>
      </span>
    </section>
  );
};
export default Login;
