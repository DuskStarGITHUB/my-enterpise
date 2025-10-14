/**
 * =====================================================
 *  NAME    : i18n.ts
 *  DATE      : 20/09/2025
 *  DATE_MODIFY       : 21/09/25
 *  DESCRIPTION: TRANSLATION SETUP
 * =====================================================
 */

// DEPENDENCIES
import i18next, { type InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend, { type HttpBackendOptions } from "i18next-http-backend";
import en from "./en/translations.json";
import es from "./es/translations.json";
import ru from "./ru/translations.json";
import { isProduction } from "@/lib/utils";

// CONFIGURATION
type TranslationKeys = typeof es;
const translations: Record<string, { translations: TranslationKeys }> = {
  es: {
    translations: es,
  },
  en: {
    translations: en,
  },
  ru: {
    translations: ru,
  },
};
const config: InitOptions<HttpBackendOptions> = {
  supportedLngs: ["es", "en", "ru"],
  ns: ["translations"],
  defaultNS: "translations",
  fallbackLng: "es",
  debug: !isProduction,
  interpolation: {
    escapeValue: false,
  },
  resources: translations,
  backend: {
    loadPath: "/locales/{{lng}}/translations.json",
  },
};

// INITIALIZATION DETECT LANGUAGE
const i18n = i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init(config);
export default i18n;
